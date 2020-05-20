<template>
     <div class="tab-bar-item" @click="itemClick">
       <slot name='item-icon'></slot>
       <slot name='item-icon-active'></slot>
       <div :style="activeStyle">
        <slot name='item-name'></slot>
       </div>
     </div>
</template>

<script>
export default {
  name: 'TabbarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red '
    }
  },
  data () {
    return {
      // isActive: false
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? { color: this.activeColor } : {}
    }
  },
  methods: {
    itemClick () {
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
.tab-bar-item img{
  height: 21px;
  width: 21px;
}

</style>
