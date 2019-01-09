<template>
  <div id="app">
    <HelloWorld /> <v1 :msg="msg" @trigger="childClicked" /> <v2 :msg="msg" />
    <v3 :msg="msg" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import v1 from "./components/1";
import v2 from "./components/2";
import v3 from "./components/3";

export default {
  name: "App",
  data() {
    return {
      msg: "msg from root"
    };
  },
  components: {
    HelloWorld,
    v1,
    v2,
    v3
  },
  methods: {
    childClicked(value) {
      this.msg = value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
