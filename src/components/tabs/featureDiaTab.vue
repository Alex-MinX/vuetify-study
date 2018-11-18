<template>
    <div>
        <iframe
            :src="featureInfo.diagramUrl"
            v-if="featureInfo.diagramUrl">
        </iframe>
        <div v-else>
            no diagram available
        </div>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-featureDiaTab',
    data () {
        return {

        }
    },
    created () {

    },
    methods: {

    },
    computed: {
        featureInfo() {
            return this.$store.getters.get_GIAGS_featureInfo;
        }
    }
}
</script>

<style>
    iframe {
        width: 100%;
        height: 420px;
    }
</style>