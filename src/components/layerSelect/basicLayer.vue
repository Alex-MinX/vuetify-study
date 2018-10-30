<template>
    <div>
        <div
            v-for="(layerGroup, index) in layerInfos.BaseLayer"
            :key="index"
        >

            <template
                v-if="layerGroup.groupName != 'singleLayer'">
                <!-- the basic layer doesn't have group layer, so nothing here -->
            </template>

            <template v-else>
                <singleLayerSwitch
                    :key="index"
                    v-bind:singlelayerinfo="layerGroup.layerCollection[0]"
                ></singleLayerSwitch>
            </template>

        </div>
    </div>
</template>

<script>
import singleLayerSwitch from './singleLayerSwitch'

export default {
    name: 'GIAGS-basicLayer',
    components: {
        singleLayerSwitch
    },
    data () {
        return {
            layerInfos: "",
        }
    },
    methods: {

    },
    created () {
        /*
            * Get the layer information json object
            * For object details see ths GIAGS_config.json
        */
        this.layerInfos = this.$GIAGSConfig.mapLayers;
    }
}
</script>

<style>

</style>
