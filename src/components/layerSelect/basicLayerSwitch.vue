<template>
    <v-list-tile @click="">
        <!--<v-list-tile-action>-->
            <v-switch
                v-model="checkbox"
                :label="singlelayerinfo.name"
                @click.native="layerSwitch"
                color="primary"
            ></v-switch>
        <!--</v-list-tile-action>-->
        <!--
        <v-list-tile-content @click="layerSwitch">
            {{ singlelayerinfo.name }}
        </v-list-tile-content>
        -->
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
            checkbox:""
        }
    },
    created () {
        /* 
         * change the status of the checkbox, if the layer is set to visible at the beginning,
         * the checkbox must also be set to true
         */
        this.checkbox = this.singlelayerinfo.visible;
    },
    methods: {
        /**
         * This function is executed, after the map is bound (see mixins/Mapable)
         */
        // https://github.com/meggsimum/wegue/blob/master/src/components/layerlist/LayerList.vue
        onMapBound: function () {

        },
        layerSwitch: function () {
            let self = this;
            this.map.getLayers().forEach( function (layer) {
                if (layer.get("name") == self.singlelayerinfo.name) {
                    layer.setVisible(self.checkbox);
                }
            })
        }
    }
}
</script>

<style>
</style>