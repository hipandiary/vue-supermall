<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">淘宝街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import {getHomeMultidata} from 'network/home'

export default {
  name: 'home',
  components:{
    NavBar
  },
  data() {
    return {
      banners:[],
      recommends:[]
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
}
</script>

<style scoped>
  .home-nav{
    background-color: pink;
    color: white;
  }
</style>
