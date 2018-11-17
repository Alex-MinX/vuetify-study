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

        <!-- for the helper class, please see: https://vuetifyjs.com/en/style/typography -->
        <v-list-tile-content
            class="caption"
        >
            {{ singlelayerinfo.name }}
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

                <span>change opacity</span>
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
import LayerGroup from 'ol/layer/Group';

export default {
    name: 'GIAGS-singleLayer-Switch',
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
        layerSwitch: function () {
            let payload = {
                layerName: this.singlelayerinfo.name,
                status: this.checkbox
            }

            this.$store.commit('set_layer_visibility', payload);
        },
        opacityChange: function () {
            let payload = {
                layerName: this.singlelayerinfo.name,
                opacity: this.sliderValue / 100
            }

            this.$store.commit('set_layer_opacity', payload);
        }
    }
}
</script>

<style>
.word-break {
    word-break: break-word;
}
</style>