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
      <SwitchControlPlcUIElement :control="component.switchControl"></SwitchControlPlcUIElement>
      <div slot="footer">
        <small class="text-muted">Current State: {{component.state}}</small>
      </div>
    </b-container>
  </b-card>

</template>

<script>
import SwitchControlPlcUIElement from '../controls/SwitchControlPlcUIElement.vue'

export default {
  components: {SwitchControlPlcUIElement},
  props: ['component'],
  name: 'PumpPlcUIElement'
}
</script>
