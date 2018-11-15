import '@babel/polyfill'
import Vue from 'vue'

import App from './App.vue'

import './plugins/vuetify'
import './plugins/vue-resource'
import { store } from './store/store';

require('../node_modules/ol/ol.css');

Vue.config.productionTip = false

fetch('static/GIAGS_Config.json')
  .then(function (response) {
    return response.json().then(function (GIAGSConfig) {
      // make app config accessible for all components
      Vue.prototype.$GIAGSConfig = GIAGSConfig;
  
      new Vue({
        store,
        render: h => h(App)
      }).$mount('#app')
  
    });
  })