<template>
    <div>
      <Header/>
    <Footer/>
    </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  }
};
</script>

<style>
html {
  overflow-x: hidden
}

.container {
  width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
}
</style>


