<template>
  <div>
    <Nav/>
    <!-- 侧边栏 -->
    <Harder></Harder>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(item,index) in videolist" :key="item.title">
        <div class="mui-media-body">
          <p class="mui-ellipsis">
            <span>{{ item.title }}</span>
            <span style="font-family: fantasy;color: #4e4e4e;">{{item.js}}</span>
            
          </p>
          
        </div>
        <h1>
          <video-player
            preload="none"
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
        <div class="aaaa">

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
       { title: "四姑娘山", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/6e39f59e387702304114111482/sZk2WjoZU4EA.mp4",fm:"http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/6e39f59e387702304114111482/387702304114535766.png",sc:"2695",pl:"3",dz:"56165" },
       { title: "黄龙，西岭雪山", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/71231aa9387702304114297019/ncNKG0ArDSoA.mp4",sc:"1589",pl:"623",dz:"231" },
       { title: "猫和老鼠四川方言版1",js:"01_麻将害猫", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/c9ff867a387702304122530033/z3LFVaTqJDIA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠四_吹口哨",js:"02_大假到海南", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/cc9edc89387702304122673931/L64zQ4MqKEUA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"03_海滩健身运动", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/cc9f4ac7387702304122674208/1P1HiZdvrO8A.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"04_竞争上岗", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/ce874fdc387702304122713113/xViJN1y6600A.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"05_冲浪的感觉", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/d3444ec8387702304122924337/3HBrEIbB9swA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"06_第82次战争", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/d3324bc8387702304122914851/a45F64mWTaoA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"07_假老练求爱记", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/cf057c6e387702304122782467/wQnU8pVwgTMA.mp4",fm:"http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/cf057c6e387702304122782467/387702304123198384.png",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"08_多嘴鸭", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/d332be26387702304122915218/58IyxBvTPrwA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"09_风车车从艺", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/ce87dd09387702304122714179/57aHZcB8NEgA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"10_风车车寂寞", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/cf05f703387702304122783005/yu9edr82q8AA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"11", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/129b1f0b387702304123376095/UbASDnAM4MoA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"12_高科技惹得祸", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/0e13e943387702304123194116/a2T66PyGq44A.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"13_高雅艺术", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/1056feaa387702304123284294/In4vDiqEOmoA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"14_荒岛奇遇", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/129b3c2b387702304123376743/OirYU8AvtDkA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"15_机器猫时代", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/1483bc1f387702304123416214/QG2nkEdiPJYA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"16_假老练变脸", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/14a6f2ee387702304123434976/7WPoHjQ3OtIA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
       { title: "猫和老鼠",js:"17_假老练当教练", movie: "http://1309101013.vod2.myqcloud.com/99b3dd7cvodsh1309101013/14a75d64387702304123435182/7trlaUoLPxwA.mp4",fm:"",sc:"4895",pl:"155",dz:"313" },
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
            poster: this.videolist[i].fm, //封面地址
            notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: {
              timeDivider: true,
              durationDisplay: true,
              remainingTimeDisplay: false,
              fullscreenToggle: false //全屏按钮
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
    color: #0f0f0f;
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
