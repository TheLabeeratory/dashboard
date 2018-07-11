<template>
  <b-container fluid>
      <b-row>
        <b-col cols="2">
          <b-nav vertical class="flex-column">
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </b-col>
        <b-col cols="10" style="padding-top: 10px;">
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
          </b-card-group>-->

          <b-table :fields="fields" :items="certauths" caption-top>
            <template slot="table-caption">
              Certificate List:
            </template>
            <template slot="common_name" slot-scope="data">
              {{data.value}}
            </template>
            <template slot="properties" slot-scope="data">
              {{data.value.Country}}
            </template>
            <template slot="issuer_properties" slot-scope="data">
              {{data.value.Country}}
            </template>
          </b-table>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'CaMain',
  data () {
    return {
      fields: [
        {key: 'common_name', label: 'Name'},
        {key: 'properties', label: 'Details'},
        {key: 'issuer_properties', label: 'Issuer'}
      ],
      certauths: [
        {
          common_name: 'CA 1',
          properties: {
            'Common Name': 'CA 1',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        },
        {
          common_name: 'CA 2',
          properties: {
            'Common Name': 'CA 2',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'ROOT CA'
          }
        },
        {
          common_name: 'CA 3',
          properties: {
            'Common Name': 'CA 3',
            'Country': 'CA',
            'State/Province': 'Quebec',
            'Locality': 'Gatineau',
            'Organization': 'Testing',
            'Organizational Unit': 'Test CA'
          },
          issuer_properties: {
            'Common Name': 'ROOT CA',
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
