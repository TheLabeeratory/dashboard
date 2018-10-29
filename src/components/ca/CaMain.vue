<template>
  <b-container fluid>
      <b-row>
        <b-col cols="1">
          <b-nav vertical class="flex-column">
            <b-nav-item active>CAs</b-nav-item>
            <b-nav-item to="/ca/createcert">Create Cert</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="8" style="padding-top: 10px;">
          <!--
          <b-card-group columns>
            <b-card v-for="item in certauths" v-bind:title="item.common_name" v-bind:item="item" v-bind:key="item.common_name" style="max-width: 30rem;">
              <b-table stacked small :items="item.properties" style="text-align: left" caption-top>
                <template slot="table-caption">
                  Certificate Details:
                </template>
              </b-table>
              <b-table stacked small :items="item.issuer_properties" style="text-align: left" caption-top>
                <template slot="table-caption">
                  Issuer CA Details:
                </template>
              </b-table>
            </b-card>
          </b-card-group>
          -->

          <b-table hover selectable @row-clicked="caSelected" :fields="fields" :items="certauths" caption-top>
            <template slot="table-caption">
              Certificate List:
            </template>
            <template slot="properties" slot-scope="data">
              <div><label>Common Name</label><br/>{{data.value['Common Name']}}</div><div><label>Country</label><br/>{{data.value.Country}}</div> <div><label>State/Provice</label><br/>{{data.value['State/Province']}}</div> <div><label>Locality</label><br/>{{data.value.Locality}}</div> <div><label>Org</label><br/>{{data.value.Organization}}</div> <div><label>Org. Unit</label><br/>{{data.value['Organizational Unit']}}</div>
            </template>
            <template slot="issuer_properties" slot-scope="data">
              <div><label>Common Name</label><br/>{{data.value['Common Name']}}</div><div><label>Country</label><br/>{{data.value.Country}}</div> <div><label>State/Provice</label><br/>{{data.value['State/Province']}}</div> <div><label>Locality</label><br/>{{data.value.Locality}}</div> <div><label>Org</label><br/>{{data.value.Organization}}</div> <div><label>Org. Unit</label><br/>{{data.value['Organizational Unit']}}</div>
            </template>
          </b-table>
        </b-col>
        <b-col cols="3">
          <b-card :title="caCardData.ca.common_name" style="margin-top: 3em">
            <h5>Certificate Details</h5>
            <b-list-group flush>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>Common Name</label><br/>{{caCardData.ca.properties['Common Name']}}</div> <div><label>Locality</label><br/>{{caCardData.ca.properties.Locality}}</div>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>Country</label><br/>{{caCardData.ca.properties.Country}}</div> <div><label>Org</label><br/>{{caCardData.ca.properties.Organization}}</div>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>State/Provice</label><br/>{{caCardData.ca.properties['State/Province']}}</div> <div><label>Org. Unit</label><br/>{{caCardData.ca.properties['Organizational Unit']}}</div>
              </b-list-group-item>
            </b-list-group>
            <h5 style="padding-top:10px">Signing CA Certificate Details</h5>
            <b-list-group flush>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>Common Name</label><br/>{{caCardData.ca.issuer_properties['Common Name']}}</div> <div><label>Locality</label><br/>{{caCardData.ca.issuer_properties.Locality}}</div>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>Country</label><br/>{{caCardData.ca.issuer_properties.Country}}</div> <div><label>Org</label><br/>{{caCardData.ca.issuer_properties.Organization}}</div>
              </b-list-group-item>
              <b-list-group-item class="d-flex justify-content-between align-items-center">
                <div><label>State/Provice</label><br/>{{caCardData.ca.issuer_properties['State/Province']}}</div> <div><label>Org. Unit</label><br/>{{caCardData.ca.issuer_properties['Organizational Unit']}}</div>
              </b-list-group-item>
            </b-list-group>
          </b-card>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CaMain',
  methods: {
    caSelected: function (record, index) {
      this.caCardData.ca = record
    }
  },
  data () {
    return {
      fields: [
        {key: 'properties', label: 'CA Details'},
        {key: 'issuer_properties', label: 'Issuer Details'}
      ],
      caCardData: {
        ca: {
          common_name: 'CA CN 1',
          properties: {
            'Common Name': 'CA CN 1',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA CN',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        }
      },
      certauths: [
        {
          common_name: 'CA CN 1',
          properties: {
            'Common Name': 'CA CN 1',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA CN',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        },
        {
          common_name: 'CA CN 2',
          properties: {
            'Common Name': 'CA CN 2',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA CN',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        },
        {
          common_name: 'CA CN 3',
          properties: {
            'Common Name': 'CA CN 3',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA CN',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        }
      ]
    }
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
