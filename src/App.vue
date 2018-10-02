<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >

      <v-toolbar>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Layer Select
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list dense class="pt-0">
        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-navigation-drawer
      v-model="rightDrawer"
      fixed
      right
      app
    >
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

export default {
  name: 'App',
  components: {
    Map
  },
  data () {
    return {
      drawer: true,
      rightDrawer: true,
      fixed: false,
      title: 'Early Dike',
      items: [
          { title: 'Basic Layer', icon: 'add' },
          { title: 'WMS Layer', icon: 'add' },
          { title: 'WFS Layer', icon: 'add' },

      ],
    }
  }
}
</script>
