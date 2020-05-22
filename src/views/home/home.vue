<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">淘宝街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <Recommends :recommends="recommends"></Recommends>
    <FeatureView />
    <TabContor :titles="['流行','精选','新款']"></TabContor>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
  
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import Recommends from './childComps/Recommends'
import FeatureView from './childComps/FeatureView'

import TabContor from 'components/content/TabContor'
import {getHomeMultidata} from 'network/home'

export default {
  name: 'home',
  components:{
    NavBar,
    HomeSwiper,
    Recommends,
    FeatureView,
    TabContor
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
    /* 固定顶部标题名 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .home{
    /* 固定顶部标题名 */ 
    padding-top: 44px;
  }
</style>
