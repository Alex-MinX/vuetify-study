<template>
<div>
    <v-tabs
        v-model="active"
        color="cyan"
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
                :featureinfo="featureinfo"
                v-if="featureinfo"
            ></component>

            <!--
            <v-card flat>
                <v-card-text>{{ item.selectComponent }}</v-card-text>
            </v-card>
            -->
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
    props: ["featureinfo"],
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
                    "props:": { "featureinfo": "featureinfo" }
                },
                {
                    "title": "Layer",
                    "selectComponent": "layerInfoTab",
                    "props:": { "layerinfo": "layerinfo" }
                },
                {
                    "title": "Diagram",
                    "selectComponent": "featureDiaTab",
                    "props:": { "featureinfo": "featureinfo" }
                },
            ],
            active: null,
        }
    },
    created () {
        
    },
    methods: {

    }
}
</script>

<style>

</style>

