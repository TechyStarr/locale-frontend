<template>
    <div class="home">
      <div class="header-text">
        <h1>Developer content</h1>
      </div>
      <button @click="generateApiKey" class="generate-api-key">Generate Api Key</button>
      <api-key-modal :api-key="generatedApiKey" v-if="generatedApiKey" />
      <div v-if="copyStatus">{{ copyStatus }}</div>

      <div v-if="apiKey">
          <div class="key-container" v-for="result in apiKey" :key="result.id">
            <p v-if="apiKey">Copy the API key that was generated for you</p>
            <span class="key" @click="copyApiKey"> {{ apiKey.key }} <i class="fa-solid fa-copy"></i></span>
          </div>
      </div>
      <div>
        <button class="view-api-keys" @click="viewApiKeys">View Api Keys</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
import ApiKeyModal from '@/components/ApiKeyModal.vue'

export default {
  data () {
    return {
      apiKey: [],
      generatedApiKey: null,
      copyStatus: '',
      apiKeys: []
    }
  },
  components: {
    ApiKeyModal
  },

  methods: {
    generateApiKey () {
      // Make API call to generate API key
      axios.post('http://127.0.0.1:5000/auth/generate-api-key')
        .then(response => {
          this.apiKey = response.data
        })
        .catch(error => {
          console.error('Could not generate api key:', error)
        })
      console.log(this.apiKey)
    },
    copyApiKey () {
      // Copy API key to clipboard
      navigator.clipboard.writeText(this.apiKey.key)
        .then(() => {
          this.copyStatus = 'Copied to clipboard'
          console.log(this.copyStatus)
          setTimeout(() => {
            this.copyStatus = ''
          }, 3000) // clear the message after 3 seconds
          console.log('Copied to clipboard')
        })
        .catch(error => {
          console.error('Could not copy text: ', error)
          this.copyStatus = 'Could not copy text'
        })
    },
    viewApiKeys () {
      axios.get('https://locale-lkbw.onrender.com/auth/apikeys')
        .then(response => {
          this.apiKeys = response.data
        })
        .catch(error => {
          console.error('Could not retrieve API Keys', error)
        })
      console.log(this.apiKeys)
    }
  }
}
</script>

<style>
.header-text {
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: 2rem;

}
.key {
  font-size: 1.6rem;
  font-weight: 300;
  background-color: #f2f2f2;
  padding: 2rem;
  margin: 1rem;
  border-radius: 4px;
  margin-left: 24rem;
  margin-right: 24rem;
  cursor: pointer;
}
.key p {
  font-size: 1.2rem;
  font-weight: 300;
}

.key span {
  font-size: 1.6rem;
  cursor: pointer;
}

.generate-api-key {
  padding: 16px 20px;
  background-color: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 4rem;
}

.generate-api-key:hover {
  background-color: #1e1e1e;
}

.view-api-keys {
  border: none;
  cursor: pointer;
  font-weight: bold;
  padding: 16px 20px;
  color: #1e1e1e;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
}

.view-api-keys:hover {
  background-color: #1e1e1e;
  color: #f2f2f2;
}

.key-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media screen and (max-width: 768px) {

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

  .generate-api-key {
    padding: 12px 16px;
    margin-bottom: 2rem;
  }

  .key {
    margin-left: 2rem;
    margin-right: 2rem;
  }

}

</style>
