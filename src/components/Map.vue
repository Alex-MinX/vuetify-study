<template>
<div>
    <div class="map" id="GIAGS-map"></div>
    <!--<v-btn @click="getFeatures">getFeatures</v-btn>-->
</div>
</template>

<script>
import Map from 'ol/Map';
import View from 'ol/View';
import Attribution from 'ol/control/Attribution';
import Zoom from 'ol/control/Zoom';
import SelectInteraction from 'ol/interaction/Select';
import LayerGroup from 'ol/layer/Group';
import Rotate from 'ol/control/Rotate';
import { fromLonLat, transform } from 'ol/proj.js';

// select interaction for the WFS features
import Select from 'ol/interaction/Select';
import {click, pointerMove } from 'ol/events/condition';

import { LayerFactory } from '../factory/Layer.js';
import { InfoPopup } from '../factory/InfoPopup.js';

import proj4 from 'proj4';
import { proj4_def } from '../proj4_def/GIAGS_proj_defs.js';

import { MapEventBus } from './../MapEventBus.js';

export default {
    name: 'GIAGS-map',
    data () {
        return {
            zoom: this.$GIAGSConfig.mapZoom,
            center: this.$GIAGSConfig.mapCenter,
            projection: this.$GIAGSConfig.mapProjection
        }
    },
    mounted () {
        this.map.setTarget(document.getElementById('GIAGS-map'));

        // Send the event 'ol-map-mounted' with the OL map as payload
        MapEventBus.$emit('ol-map-mounted', this.map);

        // make sure the map won't be strechted strange after being mounted
        window.setTimeout(() => {
            this.map.updateSize();
        }, 200);
    },
    created () {
        proj4_def(); // add all the projections at once
        const self = this;
        this.map = new Map({
            layers: [],
            view: new View({
                center: transform(self.center, "EPSG:4326", self.projection),
                zoom: self.zoom,
                projection: self.projection
            }),
            controls: [
                new Zoom(),
                new Attribution({
                    // attributions will be showed at the start up
                    collapsed: false
                }),
                new Rotate() // use Alt+Shift+drag to rotate the map
            ],
            //pixelRatio: 1
        });
        // create layers from config file (/static/GIAGS-config.json)
        const layers = this.createLayers();
        // add all the layers and layer groups at once
        this.map.getLayers().extend(layers);
        console.log('CRS: ', this.map.getView().getProjection());
        MapEventBus.$emit('map-change', )

        // ------------------------------------------------------------------------

        // add map interactions here:
        // for more detailed parameters and settings, see: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html
        var select = new Select(); // by default single-click
        var selectPointerMove = new Select({ // select when the mouse moves over features
            condition: pointerMove,
            style: ''
        });

        this.map.addInteraction(select);

        // The select pointer move is used only for the change of the features when the mouse moves over them
        this.map.addInteraction(selectPointerMove);

        this.map.on('click', function (evt) {
            console.log("evt.coordinate: ", evt.coordinate);
            self.map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                console.log("feature properties @map on click: ", feature.getProperties());
                // TODO:// deal with how to show the info of the features to the user
            })
        });

        // to change the mouse the pointer, indicate the user that the feature icon is clickable
        this.map.on("pointermove", function (evt) {
            var hit = this.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                return true;
            });
            if (hit) {
                this.getTargetElement().style.cursor = 'pointer';
            } else {
                this.getTargetElement().style.cursor = '';
            }
        });

        // here is anthoer way to get feature properties, but with this, the coordinates are not available
        select.on('select', function(evt) {
            let featureCollection = evt.target.getFeatures();
            featureCollection.forEach( function (feature, index) {
                var Properties = feature.getProperties();
                console.log("select single-click feature getProperties: ", Properties);
            })
        });

        // ------------------------------------------------------------------------

        // tests are all here:
        this.map.getLayers().forEach( function(layer, index) {
            console.log(index + " | " + layer.get("name"));
            if (layer.get("name") == "GK-Waterlevels") {
                console.log("Vector Layer added");
                console.log("Features: ", layer.getSource().getFeatures());
            }
        })
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
        },
        getFeatures () {
            // test1
            console.log('test: getFeatures');
            
            this.map.getLayers().forEach( function(layer, index) {
                console.log(index + " | " + layer.get("name"));

                if (layer.get("name") == "Pegel Schleswig-Holstein") {
                    console.log("Features: ", layer.getSource().getFeatures());
                }
            })
            
            // test2
            /*
            this.$http.get('http://localhost:8888/proxy.php', {params: {requrl: "http://httpbin.org/ip"}}).then(response => {
                // success
                console.log("oh! success!");
                console.log("success response: ", response);
            }, response => {
                // error
                console.log("oh! error!")
                console.log("error response: ", response);
            });
            */
        }
    }
}
</script>

<style>
#GIAGS-map {
    height: 500px;
}
</style>

