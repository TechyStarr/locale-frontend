<!-- SearchComponent.vue -->
<!-- <template>
  <div>
    <input type="text" v-model="searchQuery" placeholder="Search...">
    <button @click="search">Search</button>
  </div>
</template> -->

<script>
import axios from 'axios'

export default {
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    handleAutoComplete () {
      if (this.searchQuery.length > 2) {
        axios.get('https://locale-lkbw.onrender.com/query/?keyword=' + this.searchQuery,{
        params: {
          query: this.searchQuery
        }
      })
      }
    },

    performSearch () {
      axios.get('https://locale-lkbw.onrender.com/query/?keyword=' + this.searchQuery, {
        params: {
          query: this.searchQuery
        }
      })
        .then(response => {
          // Handle the response data
          const searchResults = response.data
          console.log(searchResults)
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>
