<template>
  <div>
    <div class="header-text-place">
      <h2>Places of Interest</h2>
      <router-link to="/places">
        <p>See more</p>
    </router-link>
    </div>
    <div class="image-group">
      <div class="image">
        <img :src="require('@/assets/Olumo-Rock.jpg')" alt="img">
        <p>Olumo Rock</p>
        <p>At Olumo Rock, you would be treated to attractions like natural tunnels, unusual trees, natural cantilevers, gardens on the rock, broken pathways, monuments of the belief system of the rock?s primeval settlers, e.t.c</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/yankari-game-reserve.jpg')" alt="img">
        <p>Yankari Game Reserve</p>
        <p> At the Reserve,  you'll find different varieties of animal species including the olive baboon, patas monkey, roan antelope, western hartebeest, living in their natural habitats.</p>
      </div>
      <div class="image">
        <img :src="require('@/assets/lekki-conservation-centre.jpg')" alt="">
        <p>Lekki Conservation Centre</p>
        <p> Generally regarded as an icon of nature conservation, Lekki Conservation Centre represents the flagship project of Nigeria Conservation Foundation for the preservati...</p>
      </div>

    </div>

      <!-- Schools in Lagos -->
      <div class="header-text-place">
        <h2>Schools in Nigeria</h2>
        <p>See more</p>
      </div>
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

            <!-- Fast Food Restaurants in Nigeria -->
            <div class="header-text-place">
        <h2>Fast Food Restaurants in Nigeria</h2>
        <p>See more</p>
      </div>
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
.header-text-place {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0px 30px;
  padding-top: 40px;
  margin: 0 50px;
}
.header-text p {
  font-size: 1rem;
  color: #FF5A5F;
}

.image-group {
  display: flex;
  /* flex-direction: row;
  justify-content: space-between; */
  margin: 0px 50px;
}

.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 450px;
  border-radius: 8px;
  margin-left: 30px;
  margin-right: 30px;
  padding: 2px;
  border: 1px solid #ccc;
}

.image img {
  width: 300px;
  height: 280px;
  border-radius: 24px;
  padding: 24px 12px 0 12px;
}

.image p {
  /* padding: 0 12px 12px 12px; */
  /* padding-botto; */
  float: left;
}

</style>
