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
import '@fortawesome/fontawesome-free/css/all.css'

export default {
  name: 'HomeView',
  components: {
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

</style>
