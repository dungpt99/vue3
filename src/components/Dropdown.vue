<template>
  <div class="dropdown">
    {{ content }}
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    content: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dropdown {
  width: 120px;
  height: 120px;
  background-color: white;
}
</style>
