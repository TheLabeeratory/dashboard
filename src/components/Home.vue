<template>
  <div>
    <span v-if="authenticated">
        <h1>Make a Call to the Server</h1>

        <p v-if="!authenticated">
          Log in to call a private (secured) server endpoint.
        </p>

        <button
          class="btn btn-primary"
          @click="ping()">
            Call Public
        </button>

        <button
          class="btn btn-primary"
          @click="securedPing()">
            Call Private
        </button>

        <button
          class="btn btn-primary"
          @click="adminPing()"
          v-if="authenticated && admin">
            Call Admin
        </button>

        <h2>{{ message }}</h2>
    </span>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: ['auth', 'authenticated', 'admin'],
  data () {
    const accessToken = localStorage.getItem('access_token') || null
    const headers = {Authorization: `Bearer ${accessToken}`}
    return {
      message: '',
      ping () {
        this.$http.get('https://api.dickey.cloud/api/v0/public')
          .then(response => {
            this.message = response.body
          }, error => {
            this.message = error.statusText
          })
      },
      securedPing () {
        this.$http.get('https://api.dickey.cloud/api/v0/private', {headers})
          .then(response => {
            this.message = response.body
          }, error => {
            this.message = error.statusText
          })
      },
      adminPing () {
        this.$http.get('https://api.dickey.cloud/api/v0/private/admin', {headers})
          .then(response => {
            this.message = response.body
          }, error => {
            this.message = error.statusText
          })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
</style>
