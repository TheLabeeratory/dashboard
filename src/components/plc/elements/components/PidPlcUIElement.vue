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
          <p class="card-text">Current Temperature</p>
        </b-col>
        <b-col cols="4">
          <p class="card-text">{{ component.thermometer.calibratedTemperature.toFixed(2) }} Celcius  ({{ (component.thermometer.calibratedTemperature*(9/5) + 32).toFixed(2) }} Farenheit)</p>
        </b-col>
      </b-row>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.targetTempParam"></ParamControlPlcUiElement>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.kpParam"></ParamControlPlcUiElement>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.kiParam"></ParamControlPlcUiElement>
      <ParamControlPlcUiElement v-on:updated="onUpdated" :control="component.kdParam"></ParamControlPlcUiElement>
      <div slot="footer">
        <small class="text-muted">PWM Output: {{((component.pwmProbe.pwmDutycycle > 100 ? 100 : component.pwmProbe.pwmDutycycle)/100)*5500}} Watts</small>
      </div>
    </b-container>
  </b-card>

</template>

<script>
import ParamControlPlcUiElement from '../controls/ParamControlPlcUIElement.vue'

export default {
  components: {ParamControlPlcUiElement},
  props: ['component'],
  name: 'PidPlcUIElement',
  methods: {
    onUpdated: function () {
      this.$emit('updated')
    }
  }
}
</script>
