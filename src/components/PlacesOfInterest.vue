<template>
  <div>
    <div class="header-text">
      <h1>
        Places of Interest
      </h1>
    </div>
    <!-- <div v-for="place in places" :key="place.id"> -->
      <!-- <h3>{{ place.name }}</h3> -->
      <!-- <p>{{ place.location }}</p>
      <img :src="place.image" alt="Place of Interest" />
      <p>{{ place.description }}</p> -->
    <!-- </div> -->
    <div class="image-group">
      <div class="image">
        <img :src="require('@/assets/Olumo-Rock.jpg')" alt="">
        <p>Olumo Rock</p>
        <p>At Olumo Rock, you would be treated to attractions like natural tunnels, unusual trees, natural cantilevers, gardens on the rock, broken pathways, monuments of the belief system of the rock?s primeval settlers, e.t.c</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/Olumo-Rock.jpg')" alt="">
        <p>Olumo Rock</p>
        <p>At Olumo Rock, you would be treated to attractions like natural tunnels, unusual trees, natural cantilevers, gardens on the rock, broken pathways, monuments of the belief system of the rock?s primeval settlers, e.t.c</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/Olumo-Rock.jpg')" alt="">
        <p>Olumo Rock</p>
        <p>At Olumo Rock, you would be treated to attractions like natural tunnels, unusual trees, natural cantilevers, gardens on the rock, broken pathways, monuments of the belief system of the rock?s primeval settlers, e.t.c</p>
      </div>

    </div>

    <div>
      <!-- Schools in Lagos -->
      <div class="header-text">
      <h3>
        Schools in Lagos
      </h3>
    </div>
      <div class="image-group">
        <div>
          <img class="img" :src="imageURL" alt="Fetched Image" />
          <h3>National War museum</h3>
        </div>
        <div>
          <img class="img" :src="imageURL" alt="Fetched Image" />
          <h3>National War museum</h3>
        </div>
        <div>
          <img class="img" :src="imageURL" alt="Fetched Image" />
          <h3>National War museum</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      places: [],
      imageURL: 'https://images.unsplash.com/photo-1560792523-9b3e98060a4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60'

    }
  },
  mounted () {
    // Make API call to retrieve places of interest
    // Replace 'apiEndpoint' with the actual endpoint URL
    axios.get('https://locale-lkbw.onrender.com/query/place')
      .then(response => {
        this.places = response.data
      })
      .catch(error => {
        console.error('Error retrieving places of interest:', error)
      })
  }

}
</script>

<style>
.image-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 380px;
  height: 400px;
  border-radius: 8px;
  margin-left: 30px;
  margin-right: 30px;
  border: 1px solid #ccc;
}

.image img {
  width: 380px;
  height: 300px;
  border-radius: 8px;
  margin-left: 30px;
  margin-right: 30px;
}

</style>
