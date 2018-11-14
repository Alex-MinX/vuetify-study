<template>
    <div>
        layer information will be presented here
        <v-btn @click="getActiveLayer">getActiveLayer</v-btn>
    </div>
</template>

<script>
import { Mapable } from './../../mixins/Mapable.js';

export default {
    name: 'GIAGS-layerInfoTab',
    data () {
        return {
           layerInfoConf: ""
        }
    },
    methods: {
        getActiveLayer: function () {
            console.log("getActiveLayer: ", this.maps);
            /*
            let activeLayer = [];
            this.map.getLayers().forEach(function (layer) {
                if (layer instanceof LayerGroup) {
                    // handle layer group here
                    layer.getLayers().forEach( function (singleLayer, index_1) {
                        if (singleLayer.getVisible() == true) {
                            activeLayer.push(singleLayer.get("name"));
                        }
                    })
                } else {
                    // handle single layer here
                    if (layer.getVisible() == true) {
                        activeLayer.push(layer.get("name"));
                    }
                }
            })

            console.log("active layer array: ", activeLayer)
            */
        }
        
    },
    computed: {
        maps() {
            console.log("this_check: ", this);
            return this.$store.state.GIAGS_map;
        }
    },
    created () {
        console.log("this in created: ", this);
        this.layerInfoConf = this.$GIAGSConfig.mapLayers;
        //this.getActiveLayer();
    }
}
</script>