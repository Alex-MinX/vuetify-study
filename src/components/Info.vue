<template>
<div>
    <v-tabs
        v-model="active"
        color="primary"
        dark
        slider-color="yellow"
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


export default {
    name: 'GIAGS-info',
    //props: ["featureinfo"],
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
            active: 0, // the default selected tab (controled with index)
        }
    },
    computed: {
        ifMapMounted() {
            return this.$store.getters.get_GIAGS_map_status;
        }
    },
    methods: {

    }
}
</script>

<style sccoped>

</style>

