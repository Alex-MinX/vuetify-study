<template>
    <div>
        <v-list two-line>
            <v-list-tile
                v-for="(layer, index) in activeLayerInfo"
                :key="index"
            >
                <v-list-tile-avatar>
                    <v-icon color="primary">layers</v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{ layer.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>Group: {{ layer.group }}</v-list-tile-sub-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-tooltip bottom>
                        <v-btn
                            slot="activator"
                            icon
                            ripple
                        >
                            <v-icon color="orange">info</v-icon>
                        </v-btn>

                        <span>show layer configuration</span>
                    </v-tooltip>
                </v-list-tile-action>

                <v-list-tile-action>
                    <v-tooltip bottom>
                        <v-btn
                            slot="activator"
                            icon
                            ripple
                        >
                            <v-icon color="primary">fingerprint</v-icon>
                        </v-btn>

                        <span>get layer capabilities</span>
                    </v-tooltip>
                </v-list-tile-action>

            </v-list-tile>
        </v-list>
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

    },
    computed: {
        /*
        map() {
            return this.$store.getters.get_GIAGS_map;
        },
        */
       /*
        activeLayer() {
            return this.$store.getters.get_GIAGS_map_active_layer;
        },
        */
        activeLayerInfo() {
            return this.$store.getters.get_GIAGS_map_active_layer_info;
        }
    },
    created () {
        this.layerInfoConf = this.$GIAGSConfig.mapLayers;
    }
}
</script>