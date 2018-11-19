<template>
    <div>
        <v-card>
            <v-container
                id="WMSFeatureInfoRootContainer"
                fluid
                grid-list-lg
            >

                <v-layout
                    v-for="(feature, index) in WMSFeatureInfo"
                    :key="index"
                >
                    <v-flex xs12>

                    <v-card
                        color="light-blue lighten-5"
                    >
                        <!--
                        <v-container
                            :key="index + 'feature'"
                            align-content-center
                            v-html="feature.WMSFeatureInfo"
                        >
                        </v-container>
                        -->
                            <iframe :srcdoc="feature.WMSFeatureInfo"></iframe>
                        <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">{{ feature.name }}</h3>
                        </div>
                        </v-card-title>
                    </v-card>

                    </v-flex>
                </v-layout>

            </v-container>
        </v-card>
    </div>
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
    iframe {
        max-height: 120px;
        border: inherit;
    }
    #WMSFeatureInfoRootContainer {
        max-height: 400px;
        overflow-x: auto;
        overflow-y: auto;
    }
    .container {
        max-height: 250px;
        overflow-x: auto;
        overflow-y: auto;
    }
</style>