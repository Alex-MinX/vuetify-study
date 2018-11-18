<template>
    <v-container
        align-content-center
        v-html="WMSFeatureInfo"
    >
    </v-container>
</template>

<script>

export default {
    name: 'GIAGS-WMSFeatureInfoTab',
    data () {
        return {

        }
    },
    methods: {

    },
    computed: {
        WMSFeatureInfo () {
            return this.$store.getters.get_GIAGS_WMSFeatureInfo;
        }
    }
}
</script>

<style scoped>
    .container {
        max-height: 400px;
        overflow-x: auto;
        overflow-y: auto;
    }
</style>