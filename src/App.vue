<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      
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
    }
  }
}
</script>
