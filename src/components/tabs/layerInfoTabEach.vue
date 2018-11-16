<template>
    <div>
        <v-list-tile>

            <v-list-tile-avatar>
                <v-icon color="primary">layers</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
                <v-list-tile-title>{{ layer.name }}</v-list-tile-title>
                <v-list-tile-sub-title>Group: {{ layer.group }} | Type: {{ layer.type }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
                <v-tooltip bottom>
                    <v-btn
                        slot="activator"
                        icon
                        ripple
                        @click="showLayerConf"
                    >
                        <v-icon color="orange">info</v-icon>
                    </v-btn>

                    <span>show layer configuration</span>
                </v-tooltip>
            </v-list-tile-action>

            <v-list-tile-action>
                <v-tooltip bottom>
                    <v-btn
                        slot="activator"
                        icon
                        ripple
                        @click="getLayerCap"
                    >
                        <v-icon color="primary">fingerprint</v-icon>
                    </v-btn>

                    <span>get layer capabilities</span>
                </v-tooltip>
            </v-list-tile-action>

        </v-list-tile>

        <v-dialog v-model="LayerConfDialog" max-width="500px">
            <v-card>
                <v-card-title class="font-weight-bold title">
                    Layer configuration
                </v-card-title>

                <v-card-text>
                    <v-list>
                        <v-list-tile
                            v-for="(value, key) in layer"
                            :key="key"
                        >
                            <v-list-tile-content class="text-uppercase font-weight-bold">
                                <v-list-tile-title>
                                    {{ key }}
                                </v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-content>
                                <v-list-tile-title>
                                    {{ value }}
                                </v-list-tile-title>
                            </v-list-tile-content>

                        </v-list-tile>
                    </v-list>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="primary" flat @click="LayerConfDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

    </div>
</template>

<script>
export default {
    name: 'GIAGS-layerInfoTabEach',
    props: ["layer"],
    data () {
        return {
            layerInfos: "",
            LayerConfDialog: false,
        }
    },
    created () {
        this.layerInfos = this.$GIAGSConfig.mapLayers;
    },
    methods: {
        showLayerConf: function() {
            this.LayerConfDialog = true;
        },
        getLayerCap: function() {
            let self = this;
            let type, service;
            let url;
            switch (this.layer.type){
                case "WMSBase":
                    type = "BaseLayer";
                    service = "WMS";
                    break;
                case "WMS":
                    type = "WMSLayer";
                    service = "WMS";
                    break;
                case "WFS":
                    type = "WFSLayer";
                    service = "WFS";
                    break;
            }

            this.layerInfos[type].forEach(function(ele) {
                if (ele.layerCollection.length != 1) {
                    ele.layerCollection.forEach(function(layer) {
                        if (layer.name == self.layer.name) {
                            url = layer.url;
                        }
                    })
                } else {
                    if (ele.layerCollection[0].name == self.layer.name) {
                        url = ele.layerCollection[0].url;
                    }
                }
            })
            url += "service="+ service + "&request=GetCapabilities";

            window.open(url);
        }
    }
}
</script>