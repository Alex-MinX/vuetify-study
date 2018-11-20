<template>
    <div>
        <v-data-table
        :headers="featureInfo.headerArray"
        :items="featureInfo.rowArray"
        class="elevation-1"
        :loading="loading"
        >
            <template slot="no-data">
                <v-alert :value="true" color="info" icon="info">
                    To see the feature information, please select the features on the map :)
                </v-alert>
            </template>

            <template slot="items" slot-scope="props">
                <td style="width: 400px">{{ props.item.name }}</td>
                <td style="width: 400px" class="text-xs-right">{{ props.item.value }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-featureInfoTab',
    data () {
        return {
            loading: false
        }
    },
    watch: {
        featureInfo: function() {
            let self = this;
            // show the loading bar when WFS feature arrives
            self.loading = true;
            // hide the loading bar after 0.7 seconds
            setTimeout(function() {
                self.loading = false
            }, 700);
        }
    },
    methods: {

    },
    computed: {
        featureInfo() {
            return this.$store.getters.get_GIAGS_WFSFeatureInfo;
        }
    }
}
</script>