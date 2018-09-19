import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

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




