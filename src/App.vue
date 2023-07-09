<template>
  <nav class="header">
    <div class="logo">
      <i class="fa-sharp fa-solid fa-location-dot"></i> <span>Locale</span>
    </div>
    <div class="nav-tabs">
      <router-link to="/">
        <span>Home</span>
      </router-link>
      <router-link to="/">
        <span>About</span>
      </router-link>
      <router-link to="/developer">
          <span>Developer</span>
      </router-link>
    <router-link to="/">
        <span>Contact</span>
      </router-link>
    </div>

    <div>
      <router-link v-if="!isLoggedIn" to="/login">
        <span class="login-button">Sign In</span>
      </router-link>
    </div>
  </nav>
  <router-view/>

</template>

<script>
// import Login from './views/LoginView.vue'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faRocket } from '@fortawesome/free-solid-svg-icons'

// library.add(faRocket)

export default {
  name: 'App',
  components: {
    // Login
    // FontAwesomeIcon,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

/* nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #f2f2f2; */
}

.logo {
  padding-left: 30px;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 0;
  float: left;
  color: #ff0000;
}

.nav-tabs {
  margin: 48px 0px;
  display: flex;
  justify-content: center;
}

.nav-tabs span {
  margin: 0 24px;
}

.nav-tabs a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

.nav-tabs span.router-link-exact-active {
  color: #42b983;
}

.login-button {
  border: none;
  cursor: pointer;
  margin-right: 16px;
  font-weight: bold;
  float: right;
  padding: 10px 20px;
  color: #1e1e1e;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.login-button a {
  text-decoration: none;
}

.login-button:hover {
  background-color: #45a049;
}

.login-button:focus {
  outline: none;
}
</style>
