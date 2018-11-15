<template>
    <div>
        <v-list>
            <v-list-tile-title>
                Current active Layer(s):
            </v-list-tile-title>
            <v-list-tile
                v-for="layer in activeLayer"
                :key="layer"
            >
                {{ layer }}
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
        activeLayer() {
            return this.$store.getters.get_GIAGS_map_active_layer;
        }
    },
    created () {
        this.layerInfoConf = this.$GIAGSConfig.mapLayers;
    }
}
</script>