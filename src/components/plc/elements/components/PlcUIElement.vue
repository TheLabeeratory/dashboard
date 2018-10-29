<template>
  <PidPlcUIElement v-on:updated="onUpdated" v-if="isPidComponent()" :component="component"></PidPlcUIElement>
  <PumpPlcUIElement v-on:updated="onUpdated" v-else-if="isPumpComponent()" :component="component"></PumpPlcUIElement>
  <HeaterPlcUIElement v-on:updated="onUpdated" v-else-if="isHeaterComponent()" :component="component"></HeaterPlcUIElement>
  <ThermometerPlcUIElement v-on:updated="onUpdated" v-else-if="isThermometerComponent()" :component="component"></ThermometerPlcUIElement>
</template>
<script>
import PidPlcUIElement from './PidPlcUIElement.vue'
import PumpPlcUIElement from './PumpPlcUIElement.vue'
import HeaterPlcUIElement from './HeaterPlcUIElement.vue'
import ThermometerPlcUIElement from './ThermometerPlcUIElement.vue'

export default {
  components: {
    ThermometerPlcUIElement,
    HeaterPlcUIElement,
    PidPlcUIElement,
    PumpPlcUIElement
  },
  methods: {
    isPidComponent: function () {
      return (this.component.type === 'Pid')
    },
    isPumpComponent: function () {
      return (this.component.type === 'Pump')
    },
    isHeaterComponent: function () {
      return (this.component.type === 'Heater')
    },
    isThermometerComponent: function () {
      return (this.component.type === 'Thermometer')
    },
    onUpdated: function () {
      this.$emit('updated')
    }
  },
  props: ['component'],
  name: 'PlcUIElement'
}
</script>
