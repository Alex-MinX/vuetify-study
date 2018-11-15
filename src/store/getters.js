// veux getters
import LayerGroup from 'ol/layer/Group';

export default {
    get_GIAGS_map(state) {
        // get_GIAGS_map will return the current OpenLayers map object 
        return state.GIAGS_map;
    },
    get_GIAGS_map_active_layer(state) {
        // get_GIAGS_map_active_layer will return the name as array from the current OpenLayers map object
        let activeLayerArray = [];
        state.GIAGS_map.getLayers().forEach(function (layer) {
            if (layer instanceof LayerGroup) {
                // handle layer group here
                layer.getLayers().forEach( function (singleLayer) {
                    if (singleLayer.getVisible() == true) {
                        activeLayerArray.push(singleLayer.get("name"));
                    }
                })
            } else {
                // handle single layer here
                if (layer.getVisible() == true) {
                    activeLayerArray.push(layer.get("name"));
                }
            }
        })
        return activeLayerArray;
    }
}