<template>
  <div class="tab-contor">
    <div v-for="(item,index) in titles" :key="index.id" class="tab-contor-item" 
    :class="{active:index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabContor',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    }
  },
}
</script>

<style scoped>
  .tab-contor{
    display: flex;
    text-align: center;

  }
  .tab-contor-item{
    flex:1;
    height: 40px;
    line-height: 40px;
  }
  
  .active{
    color: pink;
  }
  .active span{
    padding: 5px;
    border-bottom:3px solid pink;
  }
</style>