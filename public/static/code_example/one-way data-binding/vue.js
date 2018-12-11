var app = new Vue({
    el: "#app",
    data:{
        name: "demo2 name"
    },
    methods: {
        changeName2 () {
            this.name = "demo2 name changed";
        }
    }
})