<template>
    <div>
        <!--
        <v-container
            style="max-height: 420px"
            class="scroll-y"
        >-->
        <v-list two-line>
            <template v-for="(layer, index) in activeLayerInfo">
                <layerInfoTabEach
                    :key="index"
                    :layer="layer"
                ></layerInfoTabEach>
            </template>
        </v-list>
        <!--
        </v-container>
        -->
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

<style scoped>
.v-list {
  max-height: 420px;
  overflow-y: auto;
}
</style>