<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/home.svg" alt />
        <div slot="item-name">首页</div>
      </TabbarItem>
      <TabbarItem path="/all" activeColor="blue">
        <img slot="item-icon" src="~assets/img/all.svg" alt />
        <div slot="item-name">分类</div>
      </TabbarItem>
      <TabbarItem path="/cartfull" activeColor="blue">
        <img slot="item-icon" src="~assets/img/cartfull.svg" alt />
        <div slot="item-name">购物车</div>
      </TabbarItem>
      <TabbarItem path="/conditions" activeColor="blue">
        <img slot="item-icon" src="~assets/img/conditions.svg" alt />
        <div slot="item-name">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from "components/common/tabbar/Tabbar.vue";
import TabbarItem from "components/common/tabbar/TabbarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    Tabbar,
    TabbarItem
  }
};
</script>

<style scoped>
</style>