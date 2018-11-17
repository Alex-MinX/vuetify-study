<template>
    <div>
        <v-data-table
        :headers="featureInfo.headerArray"
        :items="featureInfo.rowArray"
        class="elevation-1"
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

        }
    },
    mounted () {

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