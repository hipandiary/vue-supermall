<template>
  <div class="recommend">
    <div v-for="(item, index) in recommends" :key="index" class="recommeds-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'Recommends',
  props:{
    recommends:{
      type:Array,
      default(){
        return[]
      }
    }
  }
}
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;

  }
  .recommeds-item{
    flex:1;
  }
  .recommeds-item img{
    width: 80px;
  }

</style>