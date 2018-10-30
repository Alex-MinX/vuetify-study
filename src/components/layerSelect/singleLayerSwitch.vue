<template>
    <v-list-tile>

            <v-switch
                v-model="checkbox"
                :label="singlelayerinfo.name"
                @click.native="layerSwitch"
                color="primary"
            ></v-switch>

    </v-list-tile>
</template>

<script>
import { Mapable } from './../../mixins/Mapable.js';
import LayerGroup from 'ol/layer/Group';

export default {
    name: 'GIAGS-singleLayer-Switch',
    mixins: [Mapable],
    props: ['singlelayerinfo'], // case-insensitive and don't use '-'
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
            this.map.getLayers().forEach( function (layer, index_0) {
                if (layer instanceof LayerGroup) {
                    // handle layer group here
                    layer.getLayers().forEach( function (singleLayer, index_1) {
                        //console.log("layer-", index_0, "-", index_1, "-", singleLayer.get("name"), "-", singleLayer.getVisible());
                        if (singleLayer.get("name") == self.singlelayerinfo.name) {
                            singleLayer.setVisible(self.checkbox);
                        }
                    })
                } else {
                    // handle single layer here
                    //console.log("layer-", index_0, "-", layer.get("name"), "-", layer.getVisible());
                    if (layer.get("name") == self.singlelayerinfo.name) {
                        layer.setVisible(self.checkbox);
                    }
                }
            })
        }
    }
}
</script>

<style>
</style>