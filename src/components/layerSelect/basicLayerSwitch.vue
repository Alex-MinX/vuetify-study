<template>
    <v-list-tile @click="">
        <v-list-tile-action>
            <v-checkbox v-model="checkbox"></v-checkbox>
        </v-list-tile-action>

        <v-list-tile-content @click="layerSwitch">
            {{ singlelayerinfo.name }}
        </v-list-tile-content>
    </v-list-tile>
</template>

<script>
import { Mapable } from './../../mixins/Mapable.js';

export default {
    name: 'GIAGS-basicLayer-Switch',
    mixins: [Mapable],
    props:['singlelayerinfo'], // case-insensitive and don't use '-'
    data () {
        return {
            checkbox: false
        }
    },
    methods: {
        /**
         * This function is executed, after the map is bound (see mixins/Mapable)
         */
        // https://github.com/meggsimum/wegue/blob/master/src/components/layerlist/LayerList.vue
        onMapBound: function () {

        },
        layerSwitch: function () {
            this.checkbox = !this.checkbox;
            // TODO:
            // figure out how to gain the access to map, which is defined in Map.vue
            // with mixins and EventBus we already have the access to map, now deal with the select
            console.log('testmap: ', this.map)
        }
    }
}
</script>

<style>
</style>