<template>
  <div class="home">
    <div>
    <div class="header-text">
      <h1>Locale, your best bet to <span>knowing Nigeria well</span></h1>
    </div>
    <div>
      <router-link to="/register">
      <button class="get-started-btn">Sign Up to Get Started</button>
    </router-link>
    </div>
  </div>
  </div>
</template>

<script>
// import LogOut from '@/components/LogOut.vue'
import axios from 'axios'
// import PlacesOfInterest from '@/components/PlacesOfInterest.vue'
import '@fortawesome/fontawesome-free/css/all.css'

// import SearchComponent from '@/components/SearchComponent.vue'
// import RegisterView from './RegisterView.vue'

export default {
  name: 'HomeView',
  components: {
    // LogOut,
    // PlacesOfInterest
    // SearchComponent
    // RegisterView
  },
  data () {
    return {
      searchQuery: '', // searchQuery is the variable that holds the search query from the user
      searchResults: [],
      region: '',
      state: '',
      lga: '',
      filteredLocations: []
      // imageURL: 'https://images.unsplash.com/photo-1560792523-9b3e98060a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'
    }
  },
  methods: {
    handleAutoComplete () {
      if (this.searchQuery.length > 2) {
        axios.get('https://locale-lkbw.onrender.com/query/autocomplete', {
          params: {
            query: this.searchQuery
          }
        })
      }
    },
    search () {
      axios.get('https://locale-lkbw.onrender.com/query?keyword=' + this.searchQuery)
        .then(response => {
          if (Array.isArray(response.data) && response.data.length > 0) {
            // Search results found
            this.searchResults = response.data
            // No search results found
            this.searchResults = 'error'
          }
          this.searchResults = response.data
          console.log(this.searchResults)
        })
        .catch(error => {
          console.log(error)
        })
      console.log(typeof this.searchResults)
    },
    filterLocations () {
      const url = 'http://127.0.0.1:5000/query/?keyword=' + this.searchQuery
      const params = {
        region: this.region,
        state: this.state,
        lga: this.lga
      }
      axios.get(url, { params })
        .then(response => {
          this.filteredLocations = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}

</script>

<style>

.header-text h1 {
  font-size: 4rem;
  overflow: hidden;
}

.header-text span {
  font-size: 4rem;
  display: block;
  margin-top: 1rem;
  overflow: hidden;
}

.get-started-btn {
  padding: 16px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 4rem;
}

.get-started-btn:hover {
  background-color: #1e1e1e;
}

.search-input {
  border: none;
  background-color: transparent;
  outline: none;
  appearance: none;
  caret-color: #000000; /* Set the caret color to black */
  cursor: text;
}

.search-input:focus {
  border: none;
  outline: none;
}

.search-input::placeholder {
  float: left;
}

.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 500px;
  border-radius: 4px;
  padding: 16px 16px;
  border: 1px solid #ccc;
}

.search-bar input[type="text"] {
  padding-left: 10px;
  padding-right: 40px; /* Adjust the padding to accommodate the icon */

}

.search-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.search-result {
  display: block;
  justify-content: flex-start;
  align-items: center;
  margin: 350px;
  margin-top: 32px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-item {
  margin-top: 32px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-result p,
.search-result li {
  flex: 24%;
  color: #1e1e1e;
  font-size: 18px;
  list-style: none;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 24px;
  margin-bottom: 8px;
  margin-left: 400px;
  margin-right: 400px;
  background-color: rgb(255, 228, 228);
  padding: 15px 72px;
  /* border: 1px solid red; */
  border-radius: 4px 0 0 4px;
}

hr {
  border-color: #e2e2e2;
  border-width: 1px;
  border-style: solid;
  width: 100%;
}

/* RESPONSIVE STYLING */

@media (max-width: 768px) {
  .header-text h1 {
  font-size: 3rem;
  overflow: hidden;
}

.header-text span {
  font-size: 3rem;
  display: block;
  margin-top: 1rem;
  overflow: hidden;
}

  .get-started-btn {
    padding: 12px 16px;
    margin-bottom: 2rem;
  }

  .search-input {
  border: none;
  background-color: transparent;
  }

  .search-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 150px;
    border-radius: 4px;
    padding: 14px 16px;
    border: 1px solid #ccc;
  }

  /* .search-bar input[type="text"] {
    padding-left: 10px;
    padding-right: 40px; /* Adjust the padding to accommodate the icon */
  /* } */

  .search-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
  }

  .search-result {
    margin: 150px;
    margin-top: 32px;
  }

  .search-item {
    font-size: 14px;
  }

  .search-result p,
  .search-result li {
    font-size: 14px;
  }
}

</style>
