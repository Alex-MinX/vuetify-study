<template>
<div>
    <div class="map" id="GIAGS-map"></div>
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
import { click, pointerMove } from 'ol/events/condition';

// featureStyle for the select
import OlstyleDefs from './../style/GIAGS_OlstyleDefs.js';

import { LayerFactory } from '../factory/Layer.js';
import { InfoPopup } from '../factory/InfoPopup.js';

import proj4 from 'proj4';
import { proj4_def } from '../proj4_def/GIAGS_proj_defs.js';

//import { MapEventBus } from './../MapEventBus.js';

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
        //MapEventBus.$emit('ol-map-mounted', this.map);

        // send the map object to vuex for a better state management
        this.$store.commit('set_GIAGS_map', this.map);

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

        // ------------------------------------------------------------------------

        // add map interactions here:
        // for more detailed parameters and settings, see: https://openlayers.org/en/latest/apidoc/module-ol_interaction_Select-Select.html
        var select = new Select({ // by default single-click
            style: OlstyleDefs.featureHighlightSelected
        });
        var selectPointerMove = new Select({ // select when the mouse moves over features
            condition: pointerMove,
            style: OlstyleDefs.featureHighlight
        });

        this.map.addInteraction(select);
        // The select pointer move is used only for the change of the features when the mouse moves over them
        this.map.addInteraction(selectPointerMove);

        // here is anthoer way to get feature properties, but with this, the coordinates are not available
        select.on('select', function(evt) {
            self.$store.commit('set_featureInfo', evt);
        });

        this.map.on('click', function (evt) {
            console.log("evt.coordinate: ", evt.coordinate);
            /*
            self.map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
                console.log("feature properties @map on click: ", feature.getProperties());
            })
            */
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
        // ------------------------------------------------------------------------

        // tests are all here:
        this.map.getLayers().forEach( function(layer, index) {
            //console.log(index + " | " + layer.get("name"));
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
        }
    }
}
</script>

<style>
#GIAGS-map {
    height: 450px;
}
</style>

