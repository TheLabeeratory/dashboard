<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand to="/">DASHBOARD</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item to="/ca">Certificate Authority</b-nav-item>
          <b-nav-item to="/plc">PLC Interface</b-nav-item>
          <b-nav-item to="/test">Test</b-nav-item>
        </b-navbar-nav>

      </b-collapse>

      <button
        class="btn btn-primary btn-margin"
        v-if="!authenticated"
        @click="login()">
        Log In
      </button>

      <button
        class="btn btn-primary btn-margin"
        v-if="authenticated"
        @click="logout()">
        Log Out
      </button>
    </b-navbar>
    <router-view
      :auth="auth"
      :authenticated="authenticated">
    </router-view>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'App',
  data () {
    authNotifier.on('authChange', authState => {
      console.log('Test')
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
