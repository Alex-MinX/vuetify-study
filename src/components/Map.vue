<template>
    <div class="map" id="GIAGS-map"></div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import Attribution from 'ol/control/Attribution';
import Zoom from 'ol/control/Zoom';
import SelectInteraction from 'ol/interaction/Select';
import LayerGroup from 'ol/layer/Group';
import { fromLonLat } from 'ol/proj.js';

import { LayerFactory } from '../factory/Layer.js';

export default {
    name: 'GIAGS-map',
    props: {
        collapsibleAttribution: {type: Boolean, default: false}
    },
    data () {
        return {
            zoom: this.$GIAGSConfig.mapZoom,
            center: this.$GIAGSConfig.mapCenter,
            projection: this.$GIAGSConfig.mapProjection
        }
    },
    mounted () {
        this.map.setTarget(document.getElementById('GIAGS-map'));
    },
    created () {
        const self = this;
        this.map = new Map({
            layers: [],
            view: new View({
                center: fromLonLat(self.center) || [0,0],
                zoom: self.zoom,
                projection: self.projection
            })
        });

        // create layers from config file (/static/GIAGS-config.json)
        const layers = this.createLayers();
        // add all the layers and layer groups at once
        this.map.getLayers().extend(layers);
    },
    methods: {
        createLayers () {
            const self = this;
            let layers = [];
            const mapLayers = self.$GIAGSConfig.mapLayers;

            // loop through the mapLayers from the GIAGS_Config.json
            Object.keys(mapLayers).forEach(function (LayerService) {
                let SingleServiceLayerGroup = LayerFactory.buildLayerGroup(mapLayers[LayerService]);
                // merge two arrays together use the ES6 ... operator
                layers.push(...SingleServiceLayerGroup);
            })
            return layers;
        }
    }
}
</script>

<style>
#GIAGS-map {
    height: 500px;
}
</style>

