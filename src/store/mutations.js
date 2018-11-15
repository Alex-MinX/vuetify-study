// vuex mutations
import LayerGroup from 'ol/layer/Group';

export default {
    set_GIAGS_map(state, OlMap) {
        state.GIAGS_map = OlMap;
        return 
    },
    set_layer_visibility(state, payload) {
        console.log("set_layer_visibility: ", payload);
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
    }
}