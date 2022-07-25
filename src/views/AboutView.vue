<template>
  <div class="swiper-template">
    <div class="my-swiper-page">
      <div class="page-left">
        <span>{{ activeIndex + 1 }}</span
        >/{{ swiperList.length }}
      </div>
    </div>
    <div class="my-swiper-container" v-show="swiperList.length">
      <div class="my-swiper-wapper">
        <div class="arrow imgLeft" @click="clickLeft">
          <span class="el-icon-arrow-left"></span>
        </div>
        <div class="arrow imgRight" @click="clickRight">
          <span class="el-icon-arrow-right"></span>
        </div>
        <div ref="swiperDom" class="my-swiper-content">
          <ul ref="swiperDomUI" :style="ulStyle">
            <li
              v-for="(item, index) in swiperList"
              :key="item.id"
              class=""
              :style="{ width: liWidth + 'px' }"
              ref="liDom"
              @click="changeIndex(item, index)"
            >
              <div
                class="introduce-li-box"
                :class="index === activeIndex ? 'active' : ''"
              >
                <div class="introduce-img"><img :src="item.url" /></div>
                <div class="introduce-name">{{ item.name }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    swiperList: {
      type: Array,
      default: () => [
        {
          name: 'test1',
          url: 'https://img1.baidu.com/it/u=2709423071,2700494803&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=281  ',
          path: '/detail'
        },
        {
          name: 'test2',
          url: 'https://img2.baidu.com/it/u=1227594332,2730923236&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313',
          path: '/detail'
        },
        {
          name: 'test3',
          url: 'https://alifei04.cfp.cn/creative/vcg/veer/1600water/veer-130182553.jpg',
          path: '/detail'
        },
        {
          name: 'test4',
          url: 'https://alifei04.cfp.cn/creative/vcg/veer/1600water/veer-130182553.jpg',
          path: '/detail'
        }
      ]
    }
  },
  data() {
    return {
      activeIndex: 0, // 当前移动图片的索引值
      boxWidth: 0,
      liWidth: 0,
      ulStyle: { left: 0 }
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
  },
  methods: {
    changeIndex(item, index) {
      this.activeIndex = index
      this.$router.push(item.path)
    },
    getWidth() {
      this.boxWidth = this.$refs.swiperDom.offsetWidth
      this.liWidth = this.boxWidth / 3
      if (this.activeIndex * this.liWidth > this.boxWidth) {
        this.ulStyle = {
          left: -this.activeIndex * this.liWidth + 'px'
        }
      }
    },
    clickLeft() {
      if (this.activeIndex > 0) {
        this.activeIndex-- // 索引值-1
        let offsetLeft = this.activeIndex * this.liWidth + this.liWidth
 
        let ulLeft = this.$refs.swiperDomUI.offsetLeft
        let distance = 0
 
        if (ulLeft < 0) {
          if (offsetLeft <= this.boxWidth) {
            if (-ulLeft > this.boxWidth) {
              distance = Math.abs(ulLeft + this.boxWidth)
            } else {
              distance = -ulLeft
            }
          } else {
            distance = offsetLeft - this.boxWidth
            if (distance >= this.liWidth) {
              distance = this.liWidth
            } else {
              distance = distance
            }
          }
 
          let index = 0
          let temp = window.setInterval(() => {
            if (index < distance && ulLeft < 0) {
              index += 2 // 每次向右移动的距离
              this.ulStyle = { left: ulLeft + index + 'px' }
            } else {
              window.clearInterval(temp)
            }
          }, 10)
        }
      }
    },
    clickRight() {
      if (this.activeIndex < this.swiperList.length - 1) {
        this.activeIndex++
        let offsetLeft = this.activeIndex * this.liWidth + this.liWidth
        if (offsetLeft > this.boxWidth) {
          let ulLeft = Math.abs(this.$refs.swiperDomUI.offsetLeft)
          let distance = offsetLeft - this.boxWidth - ulLeft
          let index = 0
          let temp = window.setInterval(() => {
            if (index < distance) {
              index += 2 // 每次向右移动的距离
              this.ulStyle = { left: -(ulLeft + index) + 'px' }
            } else {
              window.clearInterval(temp)
            }
          }, 10)
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.getWidth)
  }
}
</script>
<style lang="scss">
.swiper-template {
  .my-swiper-page {
    font-size: 16px;
    color: #bababa;
    width: 100%;
    margin: 50px auto;
    justify-content: space-around;
    .page-left {
      text-align: left;
      width: 50%;
      padding-left: 30px;
      box-sizing: border-box;
      span {
        font-size: 24px;
        color: #000000;
      }
    }
  }
  .my-swiper-container {
    width: 100%;
    height: 405px;
    .my-swiper-wapper {
      width: 100%;
      height: 100%;
      position: relative;
      padding: 0 30px;
      font-size: 16px;
      box-sizing: border-box;
      .arrow {
        display: inline-block;
        cursor: pointer;
        background: #fff;
        padding: 7px;
        &:hover {
          background: #c09d7b;
          color: #fff;
        }
      }
      .imgLeft {
        text-align: left;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .imgRight {
        text-align: right;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
      .my-swiper-content {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        ul {
          width: auto;
          white-space: nowrap;
          position: absolute;
          left: 0;
          li {
            display: inline-block;
            padding: 0 8px;
            box-sizing: border-box;
            .introduce-li-box {
              width: 100%;
              height: 405px;
              box-sizing: border-box;
              cursor: pointer;
              text-align: center;
              .introduce-img {
                width: 100%;
                height: 360px;
                overflow: hidden;
                img {
                  height: 100%;
                  -webkit-transition: all 0.61s;
                  transition: all 0.6s;
                  &:hover {
                    transform: scale(1.2);
                    -webkit-transform: scale(1.2);
                  }
                }
              }
              .introduce-name {
                width: 100%;
                height: 45px;
                line-height: 45px;
                font-size: 16px;
                color: #1f1205;
                background: #ffffff;
              }
              &:hover {
                .introduce-name {
                  background: #c09d7b;
                  color: #fff;
                }
              }
              &.active {
                .introduce-name {
                  // background: #c09d7b;
                  // color: #fff;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
