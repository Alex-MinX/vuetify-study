<template>
    <v-list-group
        no-action
        sub-group
        prepend-icon="arrow_drop_down_circle"
    >

        <v-list-tile slot="activator">
            <v-list-tile-title>{{ layergroupinfo.groupName }}</v-list-tile-title>
        </v-list-tile>

        <!--<v-list-tile
            v-for="(singlelayer, index) in layergroupinfo.layerCollection"
            :key="index"
        >-->
        <template
            v-for="(singlelayer, index) in layergroupinfo.layerCollection"
        >
            <singleLayerSwitch
                :key="index"
                v-bind:singlelayerinfo="singlelayer"
            ></singleLayerSwitch>
        <!--</v-list-tile>-->
        </template>

    </v-list-group>
</template>

<script>
//import { Mapable } from './../../mixins/Mapable.js'
import singleLayerSwitch from './singleLayerSwitch'

export default {
    name: 'GIAGS-groupLayer-Switch',
    props: ['layergroupinfo'], // case-insensitive and don't use '-'
    components: {
        singleLayerSwitch
    },
    data () {
        return {
            checkbox:""
        }
    },
    created () {

    },
    methods: {
        /**
         * This function is executed, after the map is bound (see mixins/Mapable)
         */
        // https://github.com/meggsimum/wegue/blob/master/src/components/layerlist/LayerList.vue
        onMapBound: function () {

        }
    }
}
</script>

<style>
</style>