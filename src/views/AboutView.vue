<template>
  <div class="home">
    <Nav/>
    <!-- 侧边栏 -->
    <Harder></Harder>
    <!-- 轮播图 -->
  <div class="waterfall-container" >
    <div v-for="(item, index) in list" :key="index" class="list">
      <div
        v-for="(it, key) in item"
        :key="key"
        class="item"
        :style="{ height: `${it.itemHeight}rem` }"
      >
        <img
          class="cover"
          :key="it.thumb_path"
          src="https://img1.halobear.com/upload_page/FvZmzzPmEhvRzE7ThqyrjcSZXAg_.png"
          v-lazy="it.thumb_path"
          :style="{ height: `${it.imageHeight}rem` }"
        />
      </div>
    </div>
  </div>
  </div>
</template>

<script>
// @ is an alias to /src

import harder from '@/components/harder.vue';
export default {
  components: { harder },
  name: 'HomeView',
  props: {
    data: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      index: 0
    };
  },
  computed: {
    list() {
      let leftHeight = 0;
      // let middleHeight = 0;
      let rightHeight = 0;
      const leftData = [];
      // const middleData = [];
      const rightData = [];
      this.data.forEach(item => {
        const w = item.width || item.cover_width;
        const h = item.height || item.cover_height;
        if (!item.imageHeight) {
          item.imageHeight = (((h || 100) / (w || 100)) * 324) / 100;
        }
        // if (Math.min(leftHeight, middleHeight, rightHeight) == leftHeight) {
        //   leftHeight += item.imageHeight;
        //   leftData.push(item);
        // } else if (
        //   Math.min(leftHeight, middleHeight, rightHeight) == middleHeight
        // ) {
        //   middleHeight += item.imageHeight;
        //   middleData.push(item);
        // } else {
        //   rightHeight += item.imageHeight;
        //   rightData.push(item);
        // }
        
        if (leftHeight <= rightHeight) {
          leftHeight += item.imageHeight;
          leftData.push(item);
        } else {
          rightHeight += item.imageHeight;
          rightData.push(item);
        }
      });
      return [leftData, rightData];
      // return [leftData, middleData, rightData];
    }
  }
}
</script>
<style lang="less" scoped>
.waterfall-container {
  display: flex;
  justify-content: space-between;
  padding: 0 30px 40px;
  .list {
    width: 339px;
  }
  .item {
    display: block;
    width: 100%;
    margin-bottom: 0.12rem;
  }
  .cover {
    width: 100%;
    background: block;
    border-radius: 6px;
    background: #f0f2f5;
    opacity: 0.5;
  }
  .fadeIn {
    transition: all 1s;
    opacity: 1;
  }
}
</style>
