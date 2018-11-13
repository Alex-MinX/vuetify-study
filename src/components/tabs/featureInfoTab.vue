<template>
    <div>
        <div>
            WFS feature information will be presented here
        </div>
        <v-divider></v-divider>
        <div>
            {{ featureinfo }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-featureInfoTab',
    props: ["featureinfo"],
    data () {
        return {
           
        }
    },
    created () {
        console.log("featureinfo: ", this.featureinfo);
    }
}
</script>