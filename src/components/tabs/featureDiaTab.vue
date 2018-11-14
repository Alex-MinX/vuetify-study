<template>
    <div>
        <!--<div>
            WFS feature diagramm will be presented here
        </div>

        <v-divider></v-divider>-->
        <iframe :src="diagramUrl"></iframe>
        <div>
            {{ diagramUrl }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-featureDiaTab',
    props: ["featureinfo"],
    data () {
        return {

        }
    },
    created () {
        console.log("featureinfo: ", this.featureinfo);
    },
    methods: {

    },
    computed: {
        diagramUrl: function () {
            let url;
            this.featureinfo.forEach(function (ele) {
                if (ele[0] == "chart_url") {
                    url = ele[1];
                }
            })
            return url;
        }
    }
}
</script>

<style>
    iframe {
        width: 100%;
        height: 400px;
    }
</style>