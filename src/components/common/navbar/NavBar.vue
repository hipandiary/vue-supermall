<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
}
</script>

<style scoped>
  .nav-bar{
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    font-size: 30px;
  }
  .left{
    width: 20%;
  }
  .center{
    width: 60%;
  }
  .right{
    width: 20%;
  }
</style>