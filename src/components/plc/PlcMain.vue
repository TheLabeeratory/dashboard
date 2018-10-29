<template>
  <span>
    <b-container fluid v-if="authenticated">
      <b-row>
        <b-col cols="2">
          <b-nav vertical class="flex-column">
            <b-nav-item active>PLC Components</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="1"></b-col>
        <b-col cols="6" style="padding-top: 10px;">
          Components List:
          <PlcUIElement v-on:updated="onUpdated" v-for="component in components" :key="component.name" :component="component"></PlcUIElement>
          <HeaterLineChart :data="tempTimeSerie" :labels="labels"></HeaterLineChart>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
    </span>
</template>

<script>
import HeaterLineChart from './elements/charts/HeaterLineChart.vue'
import PlcUIElement from './elements/components/PlcUIElement.vue'
import axios from 'axios'

export default {
  components: {
    PlcUIElement,
    HeaterLineChart
  },
  name: 'CaMain',
  props: ['admin', 'auth', 'authenticated'],
  data () {
    return {
      components: [],
      message: '',
      tempTimeSerie: [],
      currentTime: 1,
      labels: []
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.loadComponents()
    this.timer = setInterval(this.loadComponents, 3000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  watch: {
    // call again the method if the route changes
    '$route': 'loadComponents'
  },
  methods: {
    loadComponents () {
      if (!this.authenticated) {
        return
      }

      const accessToken = localStorage.getItem('access_token') || null
      const headers = {Authorization: `Bearer ${accessToken}`}

      axios.get('http://127.0.0.1:8080/api/v0/components', {headers})
        .then(response => {
          this.components = response.data
          this.tempTimeSerie = this.components.reduce(
            (accumulator, currentValue) => {
              if (currentValue.type === 'Pid') {
                accumulator.push({x: this.currentTime, y: currentValue.thermometer.calibratedTemperature})
                this.currentTime++
              }

              return accumulator
            },
            this.tempTimeSerie
          )
          this.labels = this.tempTimeSerie.reduce(
            (accumulator, currentValue) => {
              accumulator.push(currentValue.x.toString())
              return accumulator
            }
            , [])
        })
    },
    onUpdated () {
      this.loadComponents()
    },
    cancelAutoUpdate: function () { clearInterval(this.timer) }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container-fluid {
    padding: 0px 20px 0px 0px;
  }

  .list-group-item > div {
    display: inline-block;
    text-align: left;
  }

  td > div {
    display: inline-block;
    padding-right: 1em;
    text-align: left;
  }

  label {
    color: darkgrey;
    margin-bottom: 0;
    font-size: small;
  }

  ::before {
    text-align: left;
  }

  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    background-color: #17a2b8;
    display: inline-block;
    text-align: left;
    margin: 0 0px;
  }
  a {
    color: #ffffff;
  }
</style>
