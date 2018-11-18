// vuex mutations
import LayerGroup from 'ol/layer/Group';

export default {
    set_GIAGS_map(state, OlMap) {
        state.GIAGS_map = OlMap;
        state.GIAGS_map_status = true;
    },
    set_GIAGS_map_status(state) {
        state.GIAGS_map_status.mounted = true;
    },
    set_layer_visibility(state, payload) {
        state.GIAGS_map.getLayers().forEach( function (layer) {
            if (layer instanceof LayerGroup) {
                // handle layer group here
                layer.getLayers().forEach( function (singleLayer) {
                    if (singleLayer.get("name") == payload.layerName) {
                        singleLayer.setVisible(payload.status);
                    }
                })
            } else {
                // handle single layer here
                if (layer.get("name") == payload.layerName) {
                    layer.setVisible(payload.status);
                }
            }
        })
    },
    set_layer_opacity(state, payload) {
        state.GIAGS_map.getLayers().forEach( function (layer) {
            if (layer instanceof LayerGroup) {
                // handle layer group here
                layer.getLayers().forEach( function (singleLayer) {
                    if (singleLayer.get("name") == payload.layerName) {
                        singleLayer.setOpacity(payload.opacity);
                    }
                })
            } else {
                // handle single layer here
                if (layer.get("name") == payload.layerName) {
                    layer.setOpacity(payload.opacity);
                }
            }
        })
    },
    set_featureInfo(state, evt) {
        let featureCollection = evt.target.getFeatures();
        let featureInfo = [];
        
        featureCollection.forEach( function (feature) {
            /*
             * we can't directly pass the feature properties to the store.js,
             * because the feature property object is a cyclic objet from OpenLayers.
             * The way to deal with the feature properties here is to take out
             * the cyclic part (e. g. the_geom in Layer GK-Waterlevels). Otherweise it will
             * cause error.
             */

            // push the additional info of coordinate to the selected feature
            featureInfo.push(["coordinate", evt.mapBrowserEvent.coordinate]);
            
            let Properties = feature.getProperties();
            let Keys = feature.getKeys();

            Keys.forEach(function (key) {
                let subArray = [];
                if (typeof Properties[key] != "object") { // take out the cyclic parts by take out the object
                    subArray.push(key);
                    subArray.push(Properties[key]);
                    featureInfo.push(subArray);
                }
            })
        })
        state.GIAGS_featureInfo = featureInfo;
    }
}