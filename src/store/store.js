/*
 * This js file here is for the vuex, the state management for the whole app

 * To take a simple guide of vuex, you can go to see this series of video:
 * https://www.youtube.com/watch?v=2CSr2vBApSI
 * 
 * State management in this Early Dike app will be used to replace the glaobal event Bus.
 * Because the core of OpenLayers and also the core of this app is most related to the map object.
 * So for this reason. We need a better state management here. And therefore, the vuex will be used.
 * 
 * For the Vue.js app, vuex is so far the most modern and popular way to do the state management.
 * 
 * Min Xie
 */

import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex, {
});

export const store = new Vuex.Store({
    state: {
        GIAGS_map: "", // the map will be first set after the OpenLayers map is first mounted
        GIAGS_WFSFeatureInfo: "", // the WFSFeatureInfo will be set after the select click event happened
        GIAGS_WMSFeatureInfo: "", // the WMSFeatureInfo will be set after the map click event happened
        GIAGS_map_status: {mounted: false}
    },
    getters: getters,
    mutations: mutations,
    actions: actions
});