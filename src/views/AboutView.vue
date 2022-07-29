<template>
  <div>
    <Nav/>
    <!-- 侧边栏 -->
    <Harder></Harder>
    <div class="home">
       <div class="center">
        <video
            id="my-video"
            class="video-js vjs-default-skin"
            controls
            preload="auto"
            width="500px"
        >
            <source src="http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8" type="application/x-mpegURL" />
        </video>
        <button @click="checkVideo()">点击切换到CCTV3</button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
	getVideo() {
	   videojs(
	       "my-video",
	       {
	           bigPlayButton: false,
	           textTrackDisplay: false,
	           posterImage: true,
	           errorDisplay: false,
	           controlBar: true
	       },
	       function() {
	           this.play();
	       }
	   );
	},
  checkVideo() {
    var myPlayer = videojs("my-video");
    myPlayer.src([
        {
            type: "application/x-mpegURL",
            src: "http://ivi.bupt.edu.cn/hls/cctv3hd.m3u8" //CCTV3频道
        }
    ]);
    myPlayer.play();
}

},
mounted() {
  let _that = this;
setTimeout(() => {
	 _that.getVideo();
}, 300);

   
},


}
</script>
<style scoped>
	/*base code*/
  .home{
  width: 100%;
  height: 100%;
  margin-top: 50px;
}

</style>
