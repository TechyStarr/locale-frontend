<template>
  <nav class="header">
    <router-link to="/" class="logo">
      <i class="fa-sharp fa-solid fa-location-dot"></i> <span>Locale</span>
    </router-link>
    <div class="nav-tabs">
      <router-link to="/places">
        <span>Places</span>
      </router-link>
      <router-link to="/about">
        <span>About</span>
      </router-link>
      <router-link to="/developer">
          <span>Developer</span>
      </router-link>
    <router-link to="/contact">
        <span>Contact</span>
      </router-link>
    </div>

    <div>
        <router-link v-if="!isLoggedIn" to="/login">
          <span class="login-button">Sign In</span>
        </router-link>
        <!-- <li v-else to="/logout">
          <span class="login-button">Log Out</span>
      </li> -->
      <log-out v-if="isLoggedIn" />
    </div>
  </nav>
  <router-view/>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2023 Starr. All rights reserved.</p>
      <p>
        Made with <i class="fa-solid fa-heart"></i> by <a href="https://twitter.com/_StarrSzn">_StarrSzn</a>
      </p>
    </div>
  </footer>

</template>

<script>
import logOut from './views/LoginView.vue'

export default {
  name: 'App',
  components: {
    logOut
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
  text-decoration: none;
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
  color: #f44336;
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
  background-color: #1e1e1e;
  color: #fff;
}

.login-button:focus {
  outline: none;
}

.footer {
  padding: 20px 0;
  text-align: center;
  margin-top: 72px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  margin:5px 0;
}

.footer a {
  color: #42b983;
  text-decoration: none;
}
</style>
