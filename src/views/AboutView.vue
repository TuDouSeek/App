<template>
  <div>
    <Nav/>
    <!-- 侧边栏 -->
    <Harder></Harder>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in videolist" :key="item.title">
        <div class="mui-media-body">
          <p class="mui-ellipsis">
            <span>标题：{{ item.title }}</span>
            <span></span>
            
          </p>
          
        </div>
        <h1>
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions[index]"
            @play="onPlayerPlay($event,index)"
            @pause="onPlayerPause($event)"
          ></video-player>
        </h1>
        <div class="xq">
          <ul>
            <li class="iconfont icon-shoucang"><p>{{item.sc}}</p></li>
            <li class="iconfont icon-pinglun4"><p>{{item.pl}}</p></li>
            <li class="iconfont icon-dianzan"><p>{{item.dz}}</p></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { videoPlayer } from "vue-video-player";
require("video.js/dist/video-js.css");
require("vue-video-player/src/custom-theme.css");

export default {
  data() {
    return {
      videolist: [
        { title: "标题A", movie: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",sc:"2695",pl:"3",dz:"56165" },
        { title: "标题B", movie: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",sc:"1589",pl:"623",dz:"231" },
        { title: "标题C", movie: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",sc:"4895",pl:"155",dz:"313" },
        { title: "标题D", movie: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",sc:"2655",pl:"4587",dz:"2113" }
      ],
      playsinline: true,
      playerOptions: [],
      options: ""
    };
  },
  created() {
    this.getMovieList();
  },

  methods: {
    getMovieList() {
    // 这里正常来说应该是从后台获取的数据，以下操作都是在成功的回调函数里
      for (var i = 0; i < this.videolist.length; i++) {
          let arrs = {
            playbackRates: [1.0, 2.0, 3.0], //播放速度
            autoplay: false, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: "zh-CN",
            aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [
              {
                type: "video/mp4",
                type: "video/ogg",
                src: this.videolist[i].movie //url地址
              }
            ],
            poster: "", //封面地址
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: true //全屏按钮
            }
          };
          this.playerOptions.push(arrs);
        }
    },
    onPlayerPlay(player, index) {
 
      
       var that = this.$refs.videoPlayer;
       for (let i = 0; i < that.length; i++) {
          if(i != index)
          that[i].player.pause()
       }
    },
    onPlayerPause(player) {

      
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  margin-top: 60px;
  .mui-table-view-cell{
    box-shadow: 0 0 6px 0px #c5c5c5ad;
    margin-bottom: 10px;
  }
  .xq{
    width: 100%;
    height: 40px;
    
    ul{
      display: flex;
      justify-content: space-around;
      margin-top: 10px;
      
      li{
        list-style: none;
        font-size: 23px;
        text-align: center;
        p{
          font-size: 16px;
          float: right;line-height: 23px;margin-left: 4px;
        }
      }
    }

  }
  h1 {
    font-size: 14px;
    line-height: 24px;
    text-indent: 2em;
  }
  .mui-ellipsis {
    font-size: 14px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
    margin: 5px 0;
  }
  video {
    width: 100%;
    height: 300px;
  }
}
</style>
