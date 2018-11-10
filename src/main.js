import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-resource'
import App from './App.vue'

//import proj4 from 'proj4';
//import proj4_def from './proj4_def/GIAGS_proj_defs.js';

require('../node_modules/ol/ol.css');

Vue.config.productionTip = false

fetch('static/GIAGS_Config.json')
  .then(function (response) {
    return response.json().then(function (GIAGSConfig) {
      // make app config accessible for all components
      Vue.prototype.$GIAGSConfig = GIAGSConfig;
  
      new Vue({
        render: h => h(App)
      }).$mount('#app')
  
    });
  })




