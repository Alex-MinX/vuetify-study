// vuex actions (for async change, e. g. HTTP GET/POST Request before commit)
import Vue from 'vue'
import LayerGroup from 'ol/layer/Group';

export default {
    set_WMSFeatureInfo(context, evt) {
        let map = context.state.GIAGS_map;
        let viewResolution = map.getView().getResolution();

        let WMSFeatureInfoArray = [];
        map.getLayers().forEach(function (layer) {
            let obj = {};
            if (layer instanceof LayerGroup) {
                layer.getLayers().forEach(function(singleLayer) {
                    if (singleLayer.getVisible() == true && (singleLayer.get('type') == 'WMS' || singleLayer.get('type') == 'WMSBase')) {
                        let url = singleLayer.getSource().getGetFeatureInfoUrl(
                            evt.coordinate,
                            viewResolution,
                            'EPSG:25832',
                            {INFO_FORMAT: 'text/html'}
                        );
                        let name = singleLayer.get('name');

                        Vue.http.get(
                            'http://localhost:8888/proxy.php',
                            { params: { requrl: url } }
                        ).then(response => {
                            // success
                            let WMSFeatureInfo = response.body;
                            obj.name = name;
                            obj.WMSFeatureInfo = WMSFeatureInfo;
                            WMSFeatureInfoArray.push(obj);
                        }, response => {
                            // error
                            console.log("error response: ", response);
                        });
                    }
                })
            } else {
                if (layer.getVisible() == true && (layer.get('type') == 'WMS' || layer.get('type') == 'WMSBase')) {
                    let url = layer.getSource().getGetFeatureInfoUrl(
                        evt.coordinate,
                        viewResolution,
                        'EPSG:25832',
                        {INFO_FORMAT: 'text/html'}
                    );
                    let name = layer.get('name');

                    Vue.http.get(
                        'http://localhost:8888/proxy.php',
                        { params: { requrl: url } }
                    ).then(response => {
                        // success
                        let WMSFeatureInfo = response.body;
                        obj.name = name;
                        obj.WMSFeatureInfo = WMSFeatureInfo;
                        WMSFeatureInfoArray.push(obj);
                    }, response => {
                        // error
                        console.log("error response: ", response);
                    });
                }
            }
        })
        console.log("set_WMSFeatureInfo: ", WMSFeatureInfoArray);
        context.commit('set_WMSFeatureInfo', WMSFeatureInfoArray);
    }
}