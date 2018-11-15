// veux getters
import LayerGroup from 'ol/layer/Group';

export default {
    get_GIAGS_map(state) {
        // get_GIAGS_map will return the current OpenLayers map object 
        return state.GIAGS_map;
    },
    get_GIAGS_map_status(state) {
        return state.GIAGS_map_status;
    },
    get_GIAGS_map_active_layer_info(state) {
        if (state.GIAGS_map) {
            // get_GIAGS_map_active_layer will return the name as array from the current OpenLayers map object
            let activeLayerInfo = [];
            state.GIAGS_map.getLayers().forEach(function (layer) {
                if (layer instanceof LayerGroup) {
                    // handle layer group here
                    let groupName = layer.get("name");
                    layer.getLayers().forEach( function (singleLayer) {
                        if (singleLayer.getVisible() == true) {
                            let infoCollection = {};
                            infoCollection.name = singleLayer.get("name");
                            infoCollection.group = groupName;
                            infoCollection.opacity = singleLayer.getOpacity();
                            //infoCollection.url = singleLayer.getSource().getUrl();

                            activeLayerInfo.push(infoCollection);
                        }
                    })
                } else {
                    // handle single layer here
                    if (layer.getVisible() == true) {
                        let infoCollection = {};
                        infoCollection.name = layer.get("name");
                        infoCollection.group = "none";
                        infoCollection.opacity = layer.getOpacity();
                        //infoCollection.url = layer.getSource().getUrl();

                        activeLayerInfo.push(infoCollection);
                    }
                }
            })

            console.log("activeLayerInfo: ", activeLayerInfo);
            return activeLayerInfo;
        } else {
            return null;
        }
    },
    get_GIAGS_featureInfo(state) {
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

        if (state.GIAGS_featureInfo) {
            // represents the header (each column title) in the table
            // the data table need sources, which need to be same as the example
            // see: https://vuetifyjs.com/en/components/data-tables

            let rowArray = [];
            state.GIAGS_featureInfo.forEach(function (ele) {
                let obj = {};
                obj.name = ele[0];
                obj.value = ele[1];
                rowArray.push(obj);
            })

            let url;
            state.GIAGS_featureInfo.forEach(function (ele) {
                if (ele[0] == "chart_url") {
                    url = ele[1];
                }
            })

            let output = {
                headerArray: headerArray,
                rowArray: rowArray,
                diagramUrl: url
            }

            return output;
        } else {
            let output = {
                headerArray: headerArray,
                rowArray: [],
                diagramUrl: null
            }
            return output;
        }
    }
}