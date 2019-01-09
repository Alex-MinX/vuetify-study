<template>
<div>
  <div class="hello">{{ msg }}</div>
  <input type="button" @click="change" value="changemsg"></input>
</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"],
  data() {
    return {

    };
  },
  methods: {
    change () {
      console.log("change");
      let newMsg = this.msg + " button clicked";
      this.$emit("trigger", newMsg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
