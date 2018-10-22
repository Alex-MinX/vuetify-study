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
                <basicLayerSwitch
                    :key="index"
                    v-bind:singlelayerinfo="layerGroup.layerCollection[0]"
                ></basicLayerSwitch>
            </template>

        </div>
    </div>
</template>

<script>
import basicLayerSwitch from './basicLayerSwitch'

export default {
    name: 'GIAGS-basicLayer',
    components: {
        basicLayerSwitch
    },
    data () {
        return {
            layerInfos: "",
            checkbox: false
        }
    },
    methods: {
        layerSwitch: function() {
            console.log("basicLayer --> layerSwitch");
        }
    },
    created () {
            /*
                * Get the layer information json object
                * For object details see ths GIAGS_config.json
            */
            this.layerInfos = this.$GIAGSConfig.mapLayers;
            console.log("layerInfos: ", this.layerInfos);
    }
}
</script>

<style>

</style>
