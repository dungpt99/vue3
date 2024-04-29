<template>
  <div style="position: fixed; width: 100%">
    <Header />
  </div>
  <div style="padding-top: 50px" id="body">
    <Body />
  </div>
  <div
    :class="{ visible }"
    style="visibility: hidden; opacity: 0.5; padding-top: 80px"
  >
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Body,
    Footer,
  },
  data() {
    return {
      visible: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const body = document.getElementById("body");
      if (window.pageYOffset > body.offsetHeight - 400) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(12 15 37 / 1);
}

.sticky {
  position: fixed;
  width: 100%;
}

.visible {
  transition: 0.3s;
  padding-top: 0 !important;
  opacity: 1 !important;
  visibility: visible !important;
}
</style>
