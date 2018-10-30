<template>
    <div>
        <div
            v-for="(layerGroup, index) in layerInfos.WMSLayer"
            :key="index"
        >

            <template
                v-if="layerGroup.groupName != 'singleLayer'"
            >
                <groupLayerSwitch
                    :key="index"
                    v-bind:layergroupinfo="layerGroup"
                ></groupLayerSwitch>
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
import groupLayerSwitch from './groupLayerSwitch'

export default {
    name: 'GIAGS-WMSLayer',
    components: {
        singleLayerSwitch,
        groupLayerSwitch
    },
    data () {
        return {
            layerInfos:""
        }
    },
    created () {
        /*
            * Get the layer information json object
            * For object details see ths GIAGS_config.json
        */
        this.layerInfos = this.$GIAGSConfig.mapLayers;
        console.log("this.layerInfos.WMSLayer: ", this.layerInfos.WMSLayer);
    }
}
</script>

<style>

</style>
