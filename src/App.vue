<template>
  <div id="app">
    <MainTabBar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from "components/common/tabbar/MainTabBar.vue";
export default {
  name: "App",
  components: {
    MainTabBar
  }
};
</script>

<style>
@import "assets/css/base.css";
</style>
