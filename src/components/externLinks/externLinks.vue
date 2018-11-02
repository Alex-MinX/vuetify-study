<template>
    <div>
        <v-list-tile
            v-for="link in links"
            :key="link"
        >

            <a
                :href="'//' + link.url"
                target="_blank"
                style="text-decoration: none"
            >{{ link.title }}</a>

        </v-list-tile>
    </div>
</template>

<script>
export default {
    name: 'GIAGS-externLinks',
    components: {
        
    },
    data () {
        return {
            links: [
                {
                    url: "www.bsh.de/de/Meeresdaten/Beobachtungen/MARNET-Messnetz/index.jsp",
                    title: "MARNET-Messnetz"
                },
                {
                    url: "www.geoseaportal.de/mapapps/?lang=en",
                    title: "GeoSeaPortal"
                },
                {
                    url: "www.mdi-de.org",
                    title: "MDI-DE"
                }

            ]
        }
    },
    methods: {

    },
    created () {

    }
}
</script>

<style>

</style>
