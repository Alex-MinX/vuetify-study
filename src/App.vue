<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
      width="400"
    >

      <v-toolbar>
        <v-toolbar-title>Layer Select</v-toolbar-title>
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

    </v-navigation-drawer>

    <v-toolbar
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon @click.stop="rightDrawer = !rightDrawer"></v-toolbar-side-icon>
    </v-toolbar>

    <v-content>
      <Map/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import Map from './components/Map'
import basicLayer from './components/layerSelect/basicLayer'
import WMSLayer from './components/layerSelect/WMSLayer'
import WFSLayer from './components/layerSelect/WFSLayer'
import externLinks from './components/externLinks/externLinks'

export default {
  name: 'App',
  components: {
    Map,
    basicLayer,
    WMSLayer,
    WFSLayer,
    externLinks
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

  }
}
</script>
