<template>
<div>
    <v-list-tile>

        <!--<v-list-tile-avatar>
            <v-icon>layers</v-icon>
        </v-list-tile-avatar>-->
        <v-list-tile-action>
            <v-switch
                v-model="checkbox"
                @click.native="layerSwitch"
                color="primary"
            ></v-switch>
        </v-list-tile-action>

        <v-list-tile-content
            class="word-break"
        >
            {{ singlelayerinfo.name }}
            <!--<v-switch
                v-model="checkbox"
                :label="singlelayerinfo.name"
                @click.native="layerSwitch"
                color="primary"
            ></v-switch>-->

            <!--<v-list-tile-sub-title v-html="singlelayerinfo.name"></v-list-tile-sub-title>-->

        </v-list-tile-content>

        <v-list-tile-action>
            <v-tooltip bottom>
                <v-btn
                    slot="activator"
                    icon
                    ripple
                    @click="sliderShow = !sliderShow"
                >
                    <v-icon color="secondary">opacity</v-icon>
                </v-btn>

                <span>opacity</span>
            </v-tooltip>
        </v-list-tile-action>

    </v-list-tile>

    <v-list-tile
        v-show="sliderShow"
    >
        <v-slider
            v-model="sliderValue"
            thumb-label
            step="10"
            ticks="always"
            prepend-icon="settings_brightness"
            @change="opacityChange"
        ></v-slider>
    </v-list-tile>
</div>
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
            checkbox:"",
            sliderShow: false, // trun on/off the opacity slider
            sliderValue: 100 // the initial value of the opacity should aways be 100
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
        },
        opacityChange: function () {
            var self = this;
            this.map.getLayers().forEach( function (layer, index_0) {
                if (layer instanceof LayerGroup) {
                    // handle layer group here
                    layer.getLayers().forEach( function (singleLayer, index_1) {
                        if (singleLayer.get("name") == self.singlelayerinfo.name) {
                            singleLayer.setOpacity(self.sliderValue / 100);
                        }
                    })
                } else {
                    // handle single layer here
                    if (layer.get("name") == self.singlelayerinfo.name) {
                        layer.setOpacity(self.sliderValue / 100);
                    }
                }
            })
        }
    }
}
</script>

<style>
.word-break {
    word-break: break-word;
}
</style>