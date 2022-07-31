<template>
    <div class="videos">
        <video-player  class="video-player vjs-custom-skin "
          ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions"
        ></video-player>  
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player';
export default {
    name:'videos',
    props:['videoList',"index"],
    data(){
        return{
            playerOptions : {
               // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', 
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [
                        {
                            src: this.videoList.url,  // 路径
                            type: 'video/mp4'  // 类型
                        }, 
                    ],
                    //poster: "../../static/images/test.jpg", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar:false
                },
                playing:true
        }
    },
    created(){
        this.autoPlayAction();
    },
    methods:{
        playOrStop(){
            if(this.playing){
                this.$refs.videoPlayer.player.pause();
                this.playing = false;
            }else{
                this.$refs.videoPlayer.player.play();
                this.playing = true;
            }
            //自动播放第一个视频
        },
        autoPlayAction(){
                if(this.index == 0){
                    this.playerOptions.autoplay = true;
                }
        },
        play(){
                 this.$refs.videoPlayer.player.play();
                 this.playing = true;
             },
        stop(){
                 this.$refs.videoPlayer.player.pause();
                 this.playing = false;
             }
        },
    components:{
        videoPlayer
    }
    
}
</script>
<style>
    .videos{
        position: relative;
    }
   .videos .vjs-custom-skin > .video-js .vjs-big-play-button{
       width: 60px;
      
       font-size: 30px;
       border-radius: 50%;
       position: absolute;
       top: 50%;
       left: 53%;
       transform: translateX(-45%,-50%);
     
   }


</style>