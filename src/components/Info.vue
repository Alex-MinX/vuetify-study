<template>
<div>
    <v-tabs
        v-model="active"
        color="primary"
        dark
        slider-color="white"
    >
        <v-tab
            v-for="(item, index) in categories"
            :key="index"
            ripple
        >
          {{ item.title }}
  
        </v-tab>

        <v-tab-item
          v-for="(item, index) in categories"
          :key="index"
        >
            <component
                :is="item.selectComponent"
                v-if="ifMapMounted"
            ></component>

        </v-tab-item>
    </v-tabs>
</div>
</template>

<script>
import featureInfoTab from './tabs/featureInfoTab';
import featureDiaTab from './tabs/featureDiaTab';
import layerInfoTab from './tabs/layerInfoTab';
import WMSFeatureInfoTab from './tabs/WMSFeatureInfoTab';

import { GlobalEventBus } from "./../GlobalEventBus.js"

export default {
    name: 'GIAGS-info',
    components: {
        featureInfoTab,
        featureDiaTab,
        layerInfoTab,
        WMSFeatureInfoTab
    },
    data () {
        return {
            categories: [
                {
                    "title": "WFS-Info",
                    "selectComponent": "featureInfoTab",
                },
                {
                    "title": "WMS-Info",
                    "selectComponent": "WMSFeatureInfoTab",
                },
                {
                    "title": "Diagram",
                    "selectComponent": "featureDiaTab",
                },
                {
                    "title": "Active layer",
                    "selectComponent": "layerInfoTab",
                }

            ],
            active: 3, // the default selected tab (controled with index)
        }
    },
    computed: {
        ifMapMounted() {
            return this.$store.getters.get_GIAGS_map_status;
        }
    },
    created () {
        let self = this;
        GlobalEventBus.$on("WFSfeatureSelected", function($event) {
            console.log("WFS feature selected");
            if (self.active == 3 || self.active == 1) { // active = 2 means the active layer is currently selected
                self.active = 0;
            }
        })

        GlobalEventBus.$on("WMSfeatureSelected", function($event) {
            console.log("WMS feature selected");
            if (self.active != 1) { // active = 2 means the active layer is currently selected
                self.active = 1;
            }
        })
    },
    methods: {

    }
}
</script>

<style sccoped>

</style>

