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

import { GlobalEventBus } from "./../GlobalEventBus.js"

export default {
    name: 'GIAGS-info',
    components: {
        featureInfoTab,
        featureDiaTab,
        layerInfoTab
    },
    data () {
        return {
            categories: [
                {
                    "title": "Information",
                    "selectComponent": "featureInfoTab",
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
            active: 2, // the default selected tab (controled with index)
        }
    },
    computed: {
        ifMapMounted() {
            return this.$store.getters.get_GIAGS_map_status;
        }
    },
    created () {
        let self = this;
        GlobalEventBus.$on("featureSelected", function($event) {
            if (self.active == 2) { // active = 2 means the active layer is currently selected
                self.active = 0;
            }
        })
    },
    methods: {

    }
}
</script>

<style sccoped>

</style>

