<template>
    <v-list-tile>
        <div>example-basicLayer</div>
    </v-list-tile>
</template>

<script>
    export default {
        name: 'GIAGS-basicLayer',
        data () {
            return {

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
