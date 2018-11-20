<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width="400"
    >

      <v-toolbar>
        <v-toolbar-title>Layer options</v-toolbar-title>
      </v-toolbar>

      <v-list>
        <v-list-group
          v-for="item in items_leftNavi"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >

          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- here we use the dynamic component -->
          <component :is="item.selectComponent"></component>

        </v-list-group>
      </v-list>

    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="rightDrawer"
      fixed
      right
      app
      width="400"
    >

      <v-list>
        <v-list-group
          v-for="item in items_rightNavi"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >

          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <!-- here we use the dynamic component -->
          <component :is="item.selectComponent"></component>

        </v-list-group>
      </v-list>

      <partnerLogos></partnerLogos>

    </v-navigation-drawer>

    <v-toolbar
      app
      dark
      color="primary"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <img src="static/Logos/logo_earlydike.png" alt="Early_Dike_logo" height="65%">
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="rightDrawer = !rightDrawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <Map/>
      <Info/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 Min Xie All Rights Reserved</span>
    </v-footer>
  </v-app>
</template>

<script>
import Map from './components/Map'
import Info from './components/tabs/Info'
import basicLayer from './components/layerSelect/basicLayer'
import WMSLayer from './components/layerSelect/WMSLayer'
import WFSLayer from './components/layerSelect/WFSLayer'
import externLinks from './components/externLinks/externLinks'
import partnerLogos from './components/partnerLogos/partnerLogos'

export default {
  name: 'App',
  components: {
    Map,
    Info,
    basicLayer,
    WMSLayer,
    WFSLayer,
    externLinks,
    partnerLogos
  },
  data () {
    return {
      drawer: true,
      rightDrawer: true,
      fixed: false,
      title: 'Early Dike',
      items_leftNavi: [
          {
            icon: 'layers',
            title: 'Basic Layer',
            selectComponent: 'basicLayer',
            active: true
          },
          {
            icon: 'layers',
            title: 'WMS Layer',
            selectComponent: 'WMSLayer'
          },
          {
            icon: 'layers',
            title: 'WFS Layer',
            selectComponent: 'WFSLayer'
          }
      ],
      items_rightNavi: [
        {
          icon: 'link',
          title: 'External links',
          selectComponent: 'externLinks',
          active: true
        }
      ]
    }
  },
  created () {

  },
  methods: {
    
  }
}
</script>
