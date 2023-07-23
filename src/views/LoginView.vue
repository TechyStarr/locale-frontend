<template>
  <div class="login-container">
    <h1>Sign into your account</h1>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <div class="form-group">
        <button type="submit">Sign In</button>
      </div>
      <router-link class="log-alt" to="/login">
          Don't have an account? <span> Sign In</span>
        </router-link>
    </form>

  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      isLoggedIn: false,
      email: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login () {
      // Reset error message
      this.errorMessage = ''

      // Make API request to Login
      axios.post('https://locale-lkbw.onrender.com/auth/login', {
        email: this.email,
        password: this.password
      })
        .then(response => {
        // Successful login, redirect to home page
          console.log('Logged in successfully')
          this.isLoggedIn = response.data.isLoggedIn
          console.log(response.data.access_token)
          console.log('isLoggedIn:', this.isLoggedIn) // Log the status

          // Store the token in the localstorage
          localStorage.setItem('token', response.data.access_token)

          // Set the logged in status to true
          this.isLoggedIn = true

          // Redirect to home page
          this.$router.push('/')
        })
        .catch(error => {
          if (error.response.status === 401) {
            // Invalid credentials, set error message
            this.errorMessage = 'Invalid email or password.'
          } else {
            // Handle other errors
            console.log(error)
            this.errorMessage = error.message
          }
          // Handle the error here
          console.log('Error: ', error.message)
        })
    },
    checkLoggedIn () {
      const token = localStorage.getItem('token')
      if (token) {
        axios
          .get('https://locale-lkbw.onrender.com/auth/validate_token', {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
          .then(response => {
            this.isLoggedIn = response.data.loggedIn
          })
          .catch(error => {
            console.error(error)
          })
      } else {
        this.isLoggedIn = false
      }
    },
    logout () {
      // Handle the logout functionality
      // For example, you can clear the token from localStorage and redirect the user to the login page
      localStorage.removeItem('token') // Example: Remove the token from localStorage
      // Redirect the user to the login page
      this.$router.push('/login')
    }
  },
  mounted () {
    this.checkLoggedIn()
    console.log(this.isLoggedIn)
  }
}
</script>

<style scoped>
.login-container {
  /* max-width: 400px; */
  /* margin: 0 auto; */
  margin-left: 400px;
  margin-right: 400px;
  padding: 20px;
  border-radius: 4px;
  display: block;
  /* border: 1px solid #ccc; */
}
h1 {
  display: flex;
  justify-content: center;
  padding: 2rem;
  margin-bottom: 20px;
}
.form-group {
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;

}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  align-self: flex-start;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 30rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 31.4rem;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.log-alt {
  display: flex;
  justify-content: center;
  color: #1e1e1e;
  text-decoration: none;
}

.log-alt span {
  display: flex;
  justify-content: center;
  padding-left: 4px;
  color: #f44336;
  font-weight: bold;
}

.error-message {
  color: red;
  margin-top: 10px;
}

/* Mobile View */
@media screen and (max-width: 768px) {

  .login-container {
  /* max-width: 400px; */
  /* margin: 0 auto; */
  margin-left: 150px;
  margin-right: 150px;
  padding: 20px;
  border-radius: 4px;
  display: block;
  /* border: 1px solid #ccc; */
}
h1 {
  display: flex;
  justify-content: center;
  padding: 1rem;
  margin-bottom: 10px;
}
.form-group {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;

}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
  align-self: flex-start;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 24rem;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 25.4rem;
  padding: 10px 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.log-alt {
  display: flex;
  justify-content: center;
  padding: 2rem;
  text-decoration: none;
}

.log-alt span {
  color: #f44336;
  font-weight: bold;
  text-decoration: none;
  list-style: none;
}

.error-message {
  color: red;
  margin-top: 10px;
}

}

</style>
