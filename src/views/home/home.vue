<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">淘宝街</div>
    </NavBar>
    <Swiper>
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultidata} from 'network/home'
import {Swiper,SwiperItem} from 'components/common/swiper'
// import Swiper from 'components/common/Swiper'
// import SwiperItem from 'components/common/SwiperItem'


export default {
  name: 'home',
  components:{
    NavBar,
    Swiper,
    SwiperItem
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
