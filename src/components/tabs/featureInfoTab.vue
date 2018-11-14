<template>
    <div>
        <!--<div>
            WFS feature information will be presented here
        </div>

        <v-divider></v-divider>-->

        <v-data-table
        :headers="headers"
        :items="infos"
        class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td class="text-xs-right">{{ props.item.value }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-featureInfoTab',
    props: ["featureinfo"],
    data () {
        return {

        }
    },
    created () {
        //this.buildHeader();
        //this.buildRows();
    },
    methods: {

    },
    computed: {
        headers: function() { // represents the header (each column title) in the table
            // the data table need sources, which need to be same as the example
            // see: https://vuetifyjs.com/en/components/data-tables
            let headerArray = [
                {
                    text: "Properties",
                    sortable: false,
                    align: "center"
                },
                {
                    text: "value",
                    sortable: false,
                    align: "center"
                }
            ]
            return headerArray
        },
        infos: function () { // represents the row in the table
            let rowArray = [];
            this.featureinfo.forEach(function (ele) {
                let obj = {};
                obj.name = ele[0];
                obj.value = ele[1];
                rowArray.push(obj);
            })
            return rowArray;
        }
    }
}
</script>