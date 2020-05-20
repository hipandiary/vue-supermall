<template>
  <div id="cart">
    <NavBar class="car-nav">
      <div slot="center">购物车</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: 'cartfull',
  components:{
    NavBar
  }
}
</script>

<style scoped>
  .car-nav{
    background-color: pink;
    color: white;
  }
</style>
