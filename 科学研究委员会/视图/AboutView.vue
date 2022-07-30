<!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0"/>
    <title>首页</title>
    <meta name="format-detection" content="telephone=no" />
      <!-- style是一些基础的样式，例如f15就是字体15号，clfff颜色为fff 没什么重要的css-->
      <link rel="stylesheet" type="text/css" href="../css/style.css" />
      <link rel="stylesheet" type="text/css" href="../css/swiper_bundle_min.css">
      <style>
        body,html,#wrap{
          height: 100%;
          background: #000;
        }
        .video{
          width: 100%;
          height: 100%;
        }
        .video_box::-webkit-media-controls-fullscreen-button {
            display: none;
        }
        .video_box::-webkit-media-controls-mute-button {
            display: none !important;
        }
        .video_box {
            display: block;
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
        }
        .swiper-container {
          width: 100%;
          height: 100%;
          background: #000;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #000;
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
        .video_show{
          height: 100%;
          background: #000;
        }
        /*播放按钮*/
        .video_play{
          width: 2.95rem;
          height: 2.95rem;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
          z-index: 999;
        }
        /*播放按钮*/
        /*视频标题*/
        .video_title{
          left: 0.75rem;
          bottom: 1.65rem;
          width: 12.7rem;
        }
        .video_paragraph{
          margin-top: 0.6rem;
          line-height: 1rem;
          text-align: justify;
          display:-webkit-box;
          -webkit-box-orient:vertical;
          -webkit-line-clamp:2;
          overflow:hidden;
        }
        /*视频标题结束*/
        .pabs{
          position: absolute;
        }
        .prel{
          position: relative;
        }
        /*视频信息 头像、播放次数打赏等*/
        .video_msg{
          bottom: 1.9rem;
          right: 0.85rem;
          width: 2rem;
        }
        .user_img{
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
        }
        .add_user{
          width: 1rem;
          height: 1rem;
          left: 0;
          right: 0;
          top: 1.4rem;
          margin: auto;
        }
        .good{
          width: 2rem;
          height: 2rem;
        }
        .good_num{
          width: 2rem;
          text-align: center;
          text-shadow:0px 1px 1px rgba(24,24,24,0.5);
        }
        .margin_top35{
          margin-top: 1.75rem;
        }
        .margin_top26{
          margin-top: 1.3rem;
        }
        .give_money{
          width: 2rem;
          height: 2.35rem;
          margin-top: 1.5rem;
        }
        /*视频信息 头像、播放次数打赏等结束*/
      </style>
  </head>
  <body>
    <div id="wrap" v-cloak>
      <div class="video">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(i,index) in video_list" :key="index">
              <div class="video_show">
              <!-- 在video里不能设置autoplay属性，不然所有请求到的视频都会播放，必须手动播放-->
                <video id="video"   class="video_box"
                  src="http://ezgsp.tehaodian.com/yingtaokuaibao/index/video/202009/e5e11d13010b3b448b7356248e619fc1.mp4"
                  @click="video_btn"
                  loop
                  webkit-playsinline="true"
                  x5-playsinline
                  x5-video-player-type="h5"
                  x5-video-player-fullscreen="true"
                  playsinline="true"
                  x-webkit-airplay="allow"
                  x5-video-orientation="portrait"
                  preload="meta"
                  poster="xxx.jpg"
                >
                </video>
                <!-- 上面的poster就是视频的预览图（海报图片）-->
                <!-- 视频播放按钮 -->
                <img @click="video_btn" src="../image/index/video_play.png" class="video_play" v-if="video_play" alt="">
                <!-- 视频标题 -->
                <div class="pabs video_title">
                  <div class="f16 clfff bold taleft">@这是作者昵称</div>
                  <div class="f15 clfff video_paragraph">这是标题</div>
                </div>
              </div>
              <!-- 视频信息 头像、播放次数打赏等 -->
              <div class="pabs video_msg">
                <!-- 头像 -->
                <div class="prel">
                  <img class="user_img" src="https://ezg.e.tehaodian.com/uploads/20200821/1597977222.jpg" alt="">
                   <!-- 根据项目的数据来判断是否添加该用户为好友 -->
                  <img  class="pabs add_user" :src="i.is_focus_on==true ? '../image/index/add_user_y.png' : '../image/index/add_user.png'" alt="">
                </div>
                <!-- 点赞 根据项目的数据来判断是否点赞该视频-->
                <img  class="good margin_top35" :src="i.is_like==true ? '../image/index/good.png' : '../image/index/no_like.png'" alt="">
                <div class="clfff f12 good_num">456</div>
                <!-- 分享 -->
                <img  class="good margin_top26" src="../image/index/share.png" alt="">
                <div class="clfff f12 good_num">123</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script type="text/javascript" src="../script/vue.js"></script>
  <script type="text/javascript" src="../script/jquery2_2_3_min.js"></script>
  <script type="text/javascript" src="../script/swiper_bundle.js"></script>
  <script type="text/javascript">
    	var vm;
        vm=new Vue({
          el:"#wrap",
          data:function(){
            return{
              video_list:[],
              video_play:false,//是否显示播放按钮 false不显示 true显示
              current:0,//记录当前播放的是哪个 推荐推荐推荐 视频 值为index下标
            }
          },
          methods:{
            //视频点击
            video_btn(){
              var that=this;
              let nu=that.current+1
              let idi=".swiper-container .swiper-slide:nth-child("+nu+") video"
              if($(idi).get(0).currentTime==0){//用视频播放时间判断视频是否在播放
                custom_toast("缓冲中,请稍候",1000)
                return false
              }
              if($(idi).get(0).paused){//为jq获取视频的状态属性，具体可百度
                console.log("播放");
                that.video_play=false
                $(idi).trigger('play');
              }else{
                console.log("暂停");
                that.video_play=true
                $(idi).trigger('pause');
              }
            },
            //获取推荐的视频列表
            get_video(){
              var that=this;
              ...//这边是动态获取视频数据
              that.video_list=that.video_list.concat(res)
              that.show_video();
            },
            //展示视频
            show_video(){
              var that=this;
              setTimeout(function(){
                $(".swiper-container .swiper-slide:nth-child(1) video").trigger('play');//获取视频后，手动播放第一个视频
                swiper = new Swiper('.swiper-container',{
                  direction: 'vertical',
                  slidesPerView :1,
                  mousewheel:true,
                  observer: true,
                  observeParents:true,
                  on:{
                    //上滑
                    slideNextTransitionStart:function(){
                      console.log("视频上滑");
                      that.current++;
                      var nu=that.current+1
                      $(".swiper-container .swiper-slide video").trigger('pause');//其他视频暂停
                      let idi=".swiper-container .swiper-slide:nth-child("+nu+") video"
                      $(idi)[0].currentTime=0//重新设置播放时间 即重头开始播放
                      that.video_play=false
                      $(idi).trigger('play');
                      if(that.lastPage!=that.page){
                        if(nu+1==that.video_list.length){//下一条就是最后一条
                          that.page++;
                          that.get_video();
                        }
                      }else{
                        if(nu==that.video_list.length){
                          console.log("到底了");
                        }
                      }
                    },
                    //下滑
                    slidePrevTransitionStart:function(){
                      console.log("视频下滑");
                      that.current--;
                      let nu=that.current+1
                      $(".swiper-container .swiper-slide video").trigger('pause');//其他视频暂停
                      let idi=".swiper-container .swiper-slide:nth-child("+nu+") video"
                      $(idi)[0].currentTime=0//重新设置播放时间 即重头开始播放
                      that.video_play=false
                      $(idi).trigger('play');//为jq播放/暂停h5视频，具体可百度；
                    }
                  }
                })
              },1000)
            },
          },
          mounted(){
            var that=this;
            that.get_video();
          }
        })
      
  </script>
  </html>

