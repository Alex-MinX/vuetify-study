<template>
  <div class="hello">{{ msg }}</div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["msg"],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
