<template>
  <b-row>
    <b-col cols="8">
      <label>{{ control.name }}</label>
    </b-col>
    <b-col cols="4">
      <toggle-button v-model="checked" :labels="{checked: 'ON', unchecked: 'OFF'}" :value="isOn()" @change="onChange()"/>
    </b-col>
  </b-row>
</template>

<script>
import axios from 'axios'

export default {
  props: ['control'],
  name: 'SwitchControlPlcUiElement',
  data () {
    return {
      checked: this.isOn()
    }
  },
  methods: {
    isOn: function () {
      return (this.control.state === 'ON')
    },
    onChange: function () {
      const accessToken = localStorage.getItem('access_token') || null
      const newState = this.checked ? 'ON' : 'OFF'
      axios.put(
        'http://127.0.0.1:8080/api/v0/controls/' + this.control.name + '/value',
        newState,
        {headers: { 'Content-Type': 'text/plain',
          'Authorization': `Bearer ${accessToken}`}})
        .then(response => {
          this.$emit('updated')
        })
    }
  }
}
</script>
