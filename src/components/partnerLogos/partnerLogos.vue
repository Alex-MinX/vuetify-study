<template>
    <div>
        <v-subheader>Partnerschaft</v-subheader>

        <div style="text-align: center">
            <template v-for="(pic, index) in pics">
                <img
                    :key="index"
                    :src="pic.url"
                    height="30"
                    :alt="pic.title"
                    style="margin: 5px"
                >
                <br
                    v-if="((index +1) % 3) == 0 && index >= 2"
                    :key="'linebreaker' + index"
                >
            </template>
        </div>

    </div>
</template>

<script>
export default {
    name: 'GIAGS-externLinks',
    data () {
        return {
            pics: [
                {
                    url: "static/Logos/logo_ita.png",
                    title: "logo_ita"
                },
                {
                    url: "static/Logos/logo_gia.gif",
                    title: "logo_gia"
                },
                {
                    url: "static/Logos/logo_iww.png",
                    title: "logo_iww"
                },
                {
                    url: "static/Logos/logo_rwth.png",
                    title: "logo_rwth"
                },
                {
                    url: "static/Logos/logo_tuhhwb.png",
                    title: "logo_tuhhwb"
                },
                {
                    url: "static/Logos/logo_fwu.gif",
                    title: "logo_fwu"
                },
                {
                    url: "static/Logos/logo_baw.gif",
                    title: "logo_baw"
                },
                {
                    url: "static/Logos/logo_BMBF.gif",
                    title: "logo_BMBF"
                },
                {
                    url: "static/Logos/logo_ptj.gif",
                    title: "logo_ptj"
                }
            ]
        }
    }
}
</script>