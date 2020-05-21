<template>
  <div id="hy-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item, index) in slideCount" :key="index.id" class="indi-item" :class="{active:index === currentIndex-1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    //间隔时间
    interval: {
      type: Number,
      default: 3000
    },
    //动画时间
    animDuration: {
      type: Number,
      default: 300
    },
    moveRation: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, //滑动次数
      totalWidth: 0, //swiper宽度
      swiperStyle: {}, //swiper样式
      currentIndex: 1, //当前index
      scrolling: false //是否正在滚动
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();

      //启动定时器
      this.startTimer();
    }, 100);
  },
  methods: {
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++; //idnex每滚动3秒+1
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer); //clearInterval函数来停止循环playtimer函数
    },

    /* 滚动到当前位置 */
    scrollContent(currentPosition) {
      //设置启动滚动
      this.scrolling = true;

      //滚动动画
      tihs.swiperStyle.transition = "transform" + this.animDuration + "ms";
      this.setTransfrom(currentPosition); //重置并构建新的位置

      //判断滚动到的位置
      this.checkPosition();

      //滚动结束
      this.scrolling = false;
    },

    /* 检查滚动位置 */
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransfrom(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransfrom(-this.currentIndex * this.totalWidth);
        }

        this.$emit("transitionEnd", this.currentIndex - 1);
      }, this.animDuration);
    },

    /* 设置滚动位置 */
    setTransfrom(position) {
      this.swiperStyle.transfrom = `translate3d(${position}px,0,0)`;
      this.swiperStyle[
        "-webkit-transform"
      ] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
    }
  },
  /**
   * 设置滚动的位置
   */
  setTransform: function(position) {
    this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
    this.swiperStyle["-webkit-transform"] = `translate3d(${position}px), 0, 0`;
    this.swiperStyle["-ms-transform"] = `translate3d(${position}px), 0, 0`;
  },

  /**
   * 操作DOM, 在DOM前后添加Slide
   */
  handleDom: function() {
    // 1.获取要操作的元素
    let swiperEl = document.querySelector(".swiper");
    let slidesEls = swiperEl.getElementsByClassName("slide");

    // 2.保存个数
    this.slideCount = slidesEls.length;

    // 3.如果大于1个, 那么在前后分别添加一个slide
    if (this.slideCount > 1) {
      let cloneFirst = slidesEls[0].cloneNode(true);
      let cloneLast = slidesEls[this.slideCount - 1].cloneNode(true);
      swiperEl.insertBefore(cloneLast, slidesEls[0]);
      swiperEl.appendChild(cloneFirst);
      this.totalWidth = swiperEl.offsetWidth;
      this.swiperStyle = swiperEl.style;
    }

    // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
    this.setTransform(-this.totalWidth);
  },

  /**
   * 拖动事件的处理
   */
  touchStart: function(e) {
    // 1.如果正在滚动, 不可以拖动
    if (this.scrolling) return;

    // 2.停止定时器
    this.stopTimer();

    // 3.保存开始滚动的位置
    this.startX = e.touches[0].pageX;
  },

  touchMove(e) {
    // 1.计算出用户拖动的距离
    this.currentX = e.touches[0].pageX;
    this.distance = this.currentX - this.startX;
    let currentPosition = -this.currentIndex * this.totalWidth;
    let moveDistance = this.distance + currentPosition;

    // 2.设置当前的位置
    this.setTransform(moveDistance);
  },

  touchEnd: function(e) {
    // 1.获取移动的距离
    let currentMove = Math.abs(this.distance);

    // 2.判断最终的距离
    if (this.distance === 0) {
      return;
    } else if (
      this.distance > 0 &&
      currentMove > this.totalWidth * this.moveRatio
    ) {
      // 右边移动超过0.5
      this.currentIndex--;
    } else if (
      this.distance < 0 &&
      currentMove > this.totalWidth * this.moveRatio
    ) {
      // 向左移动超过0.5
      this.currentIndex++;
    }

    // 3.移动到正确的位置
    this.scrollContent(-this.currentIndex * this.totalWidth);

    // 4.移动完成后重新开启定时器
    this.startTimer();
  },

  /**
   * 控制上一个, 下一个
   */
  previous: function() {
    this.changeItem(-1);
  },

  next: function() {
    this.changeItem(1);
  },

  changeItem: function(num) {
    // 1.移除定时器
    this.stopTimer();

    // 2.修改index和位置
    this.currentIndex += num;
    this.scrollContent(-this.currentIndex * this.totalWidth);

    // 3.添加定时器
    this.startTimer();
  }
};
</script>

<style scoped>
 #hy-swiper {
    overflow: hidden;
    position: relative;
  }

  .swiper {
    display: flex;
  }

  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
  }

  .indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0 5px;
  }

  .indi-item.active {
    background-color: rgba(212,62,46,1.0);
  }
</style>