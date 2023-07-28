<template>
  <nav class="header" >

    <!-- <div class="logo-toggle-container"> -->
      <router-link to="/" class="logo">
        <i class="fa-sharp fa-solid fa-location-dot"></i> <span>Locale</span>
      </router-link>

      <div class="menu-toggle" @click="toggleMenu">
        <i v-if="!isMenuVisible" class="fa-solid fa-bars"></i>
        <i v-else class="fa-solid fa-times"></i>
      </div>
    <!-- </div> -->

    <div class="nav-tabs" :class="{ 'show-menu' :isMenuVisible }">
      <a @click="navigateTo('/places')">
        <span>Places</span>
      </a>
      <a @click="navigateTo('/about')">
        <span>About</span>
      </a>
      <a @click="navigateTo('/developer')">
        <span>Developer</span>
      </a>
      <a @click="navigateTo('/contact')">
        <span>Contact</span>
      </a>
      <a @click="navigateTo('/login')">
        <span class="login-button">Sign In</span>
      </a>
      <a @click="navigateTo('/register')">
        <span class="login-button">Register</span>
      </a>

    </div>

  </nav>
  <div :class="{ 'hide-content': isMenuVisible }">
    <router-view/>
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2023 Starr. All rights reserved.</p>
        <p>
          Made with <i class="fa-solid fa-heart"></i> by <a href="https://twitter.com/_StarrSzn">_StarrSzn</a>
        </p>
      </div>
    </footer>
  </div>

</template>

<script>
// import login from './views/LoginView.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      isLoggedIn: true,
      isMenuVisible: false
    }
  },
  mounted () {
    const token = localStorage.getItem('token')
    if (token) {
      this.isLoggedIn = true
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuVisible = !this.isMenuVisible
    },
    navigateTo (path) {
      this.toggleMenu()
      this.$router.push(path)
    },
    logout () {
      axios.post('https://locale-lkbw.onrender.com/auth/logout')
        .then(response => {
          console.log('Logged out successfully')
          this.isLoggedIn = response.data.isLoggedIn
          console.log('isLoggedIn:', this.isLoggedIn) // Log the status
        })
        .catch(error => {
          console.log('Logout failed')
          console.log(error)
        })

      localStorage.removeItem('token') // Remove the token from localStorage
      this.isLoggedIn = false
      // Redirect the user to the login page
      this.$router.push('/login')
    }
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

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.logo-toggle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  padding-left: 30px;
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 0;
  color: #ff0000;
  text-decoration: none;
}

.menu-toggle {
  font-size: 1.5rem;
  color: #ff0000;
  cursor: pointer;
  /* margin-left: 500px; */

}

.nav-tabs {
  margin: 48px 0px;
  display: flex;
  justify-content: center;
}

.nav-tabs a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  cursor: pointer;
  margin: 0 24px;
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

@media (min-width: 769px) {
  .menu-toggle {
    display: none;
  }
}

@media (max-width: 768px) {

  .menu-toggle {
    /* display: none; */
    font-size: 1.5rem;
    color: #ff0000;
    cursor: pointer;
    margin-right: 48px;
  }

  .menu-toggle .menu-btn {
    /* display: none; */
    font-size: 1.5rem;
    color: #ff0000;
    cursor: pointer;
    margin-right: 48px;
  }

  .menu-toggle i {
    transition: transform 0.3s ease;
  }

  /* Rotation for the 'X' button when menu is active */
  .menu-toggle .fa-times {
    transform: rotate(45deg);
  }

  .header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
}

  .nav-tabs {
    display: none;
    margin-top: 20px;
  }

/* Styling for the button when it's clicked */
  .menu-btn.active {
    color: #f44336;
  }

  .show-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .show-menu a {
    margin: 24px 0;
    cursor: pointer;
  }

  .hide-content {
    display: none;
  }

}
</style>
