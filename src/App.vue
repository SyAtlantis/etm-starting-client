<template>
  <div id="app">
    <Home/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "app",
  components: { Home }
};
</script>

<style  lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
</style>
