<template>
  <b-container fluid>
    <b-row>
      <b-col cols="1">
        <b-nav vertical class="flex-column">
          <b-nav-item to="/ca">CAs</b-nav-item>
          <b-nav-item active>Create Cert</b-nav-item>
        </b-nav>
      </b-col>
      <b-col cols="8" style="padding-top: 10px;">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <b-form-group id="CommonNameInputGroup"
                        label="Common Name:"
                        label-for="CommonNameInput">
            <b-form-input id="CommonNameInput"
                          type="text"
                          v-model="form.common_name"
                          required
                          placeholder="Enter Common Name">
            </b-form-input>
          </b-form-group>
          <b-form-group id="CountryInputGroup"
                        label="Country:"
                        label-for="CountryInput">
            <b-form-input id="CountryInput"
                          type="text"
                          v-model="form.country"
                          required
                          placeholder="Enter Country">
            </b-form-input>
          </b-form-group>
          <b-form-group id="StateInputGroup"
                        label="State / Province:"
                        label-for="StateInput">
            <b-form-input id="StateInput"
                          type="text"
                          v-model="form.state"
                          required
                          placeholder="Enter State/Province">
            </b-form-input>
          </b-form-group>
          <b-form-group id="LocalityInputGroup"
                        label="Locality:"
                        label-for="LocalityInput">
            <b-form-input id="LocalityInput"
                          type="text"
                          v-model="form.locality"
                          required
                          placeholder="Enter Locality">
            </b-form-input>
          </b-form-group>
          <b-form-group id="OrganisationInputGroup"
                        label="Organisation:"
                        label-for="OrganisationInput">
            <b-form-input id="OrganisationInput"
                          type="text"
                          v-model="form.organisation"
                          required
                          placeholder="Enter Organisation">
            </b-form-input>
          </b-form-group>
          <b-form-group id="OrganisationUnitInputGroup"
                        label="Organisational Unit:"
                        label-for="OrganisationUnitInput">
            <b-form-input id="OrganisationUnitInput"
                          type="text"
                          v-model="form.name"
                          required
                          placeholder="Enter Organisational Unit">
            </b-form-input>
          </b-form-group>

          <b-form-group id="CAInputGroup"
                        label="Certificate Authority:"
                        label-for="CAInput">
            <b-form-select id="CAInput"
                           :options="cas"
                           required
                           v-model="form.ca">
            </b-form-select>
          </b-form-group>
          <b-form-group id="UsageInputGroup"
                        label="Certificate Usage:"
                        label-for="UsageInput">
            <b-form-select id="UsageInput"
                           :options="usages"
                           required
                           v-model="form.usage">
            </b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
      <b-col cols="3">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data () {
    return {
      form: {
        common_name: '',
        country: '',
        state: '',
        locality: '',
        organisation: '',
        organisation_unit: '',
        ca: '',
        usage: ''
      },
      cas: [
        { text: 'Self-Signed', value: null },
        'CA 1', 'CA 2', 'CA 3'
      ],
      usages: [
        'Root CA', 'Intermediate CA', 'Server Certificate', 'Client Certificate'
      ],
      show: true
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      alert(JSON.stringify(this.form))
    },
    onReset (evt) {
      evt.preventDefault()
      /* Reset our form values */
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false
      this.$nextTick(() => { this.show = true })
    }
  }
}
</script>

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
