<template>
    <b-row>
      <b-col cols="8">
        <label>{{ control.name }}</label>
      </b-col>
      <b-col cols="4">
        <b-form-input v-model="inputValue" :id="control.name" type="number" :value="control.value" @change="onChange()"></b-form-input>
      </b-col>
    </b-row>
</template>

<script>
import axios from 'axios'

export default {
  props: ['control'],
  name: 'ParamControlPlcUiElement',
  data () {
    return {
      inputValue: this.control.value
    }
  },
  methods: {
    onChange: function () {
      const accessToken = localStorage.getItem('access_token') || null
      if (this.inputValue !== '') {
        axios.put('http://127.0.0.1:8080/api/v0/controls/' + this.control.name + '/value',
          this.inputValue,
          {headers: { 'Content-Type': 'text/plain',
            'Authorization': `Bearer ${accessToken}`}})
          .then(response => {
            this.$emit('updated')
          })
      }
    }
  }
}
</script>
