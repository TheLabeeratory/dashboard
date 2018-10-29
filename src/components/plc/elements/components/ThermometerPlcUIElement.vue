<template>
  <b-card
    style="width: 50rem;"
    :header="component.type"
    header-tag="header"
    :title="component.name">
    <b-container fluid>
      <b-row>
        <b-col cols="8">
          <p class="card-text">Description</p>
        </b-col>
        <b-col cols="4">
          <p class="card-text">{{ component.description }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8">
          <p class="card-text">Raw Temperature</p>
        </b-col>
        <b-col cols="4">
          <p class="card-text">{{ component.uncalibratedTemperature.toFixed(2) }} Celcius</p>
        </b-col>
      </b-row>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.cparamControl"></ParamControlPlcUiElement>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.kparamControl"></ParamControlPlcUiElement>
      <div slot="footer">
        <small class="text-muted">Calibrated Temperature: {{ component.calibratedTemperature.toFixed(2) }} Celcius</small>
      </div>
    </b-container>
  </b-card>

</template>

<script>
import ParamControlPlcUiElement from '../controls/ParamControlPlcUIElement.vue'

export default {
  components: {ParamControlPlcUiElement},
  props: ['component'],
  name: 'ThermometerPlcUIElement',
  methods: {
    onUpdated: function () {
      this.$emit('updated')
    }
  }
}
</script>
