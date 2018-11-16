<template>
    <div>
        <v-list two-line>
            <template v-for="(layer, index) in activeLayerInfo">
                <layerInfoTabEach
                    :key="index"
                    :layer="layer"
                ></layerInfoTabEach>
            </template>
        </v-list>
    </div>
</template>

<script>
import layerInfoTabEach from './layerInfoTabEach';

export default {
    name: 'GIAGS-layerInfoTab',
    components: {
        layerInfoTabEach
    },
    data () {
        return {
           layerInfoConf: "",
        }
    },
    methods: {

    },
    computed: {
        activeLayerInfo() {
            return this.$store.getters.get_GIAGS_map_active_layer_info;
        }
    },
    created () {
        this.layerInfoConf = this.$GIAGSConfig.mapLayers;
    }
}
</script>