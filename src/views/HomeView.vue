<template>
  <div class="home">
    <Nav/>
    <!-- 侧边栏 -->
    <Harder></Harder>
    <!-- 轮播图 -->
    <div class="swiper">
      <div class="swiper_list">

      </div>
      <div class="swiper_list">

      </div>
      <div class="swiper_list">

      </div>
      <div class="swiper_list">

      </div>
      <div class="swiper_list">

      </div>
    </div>
    <!-- 菜单栏 -->
    <div class="menu">
      <div class="menu_list menu_listA" @click="menu('china')"><iconfont-svg class="menu_icon" icon="icon-zhongguofengjianzhu" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listB" @click="menu('america')"><iconfont-svg class="menu_icon" icon="icon-meiguoyiliao" size="25" ><i ></i></iconfont-svg><p class="icon_font">美国</p></div>
      <div class="menu_list menu_listC" @click="menu('canada')"><iconfont-svg class="menu_icon" icon="icon-jianadaCNta" size="25" ><i ></i></iconfont-svg><p class="icon_font">加拿大</p></div>
      <div class="menu_list menu_listD" @click="menu('japan')"><iconfont-svg class="menu_icon" icon="icon-riben" size="25" ><i ></i></iconfont-svg><p class="icon_font">日本</p></div>
      <div class="menu_list menu_listE" @click="menu('swit')"><iconfont-svg class="menu_icon" icon="icon-yuanjing" size="25" ><i ></i></iconfont-svg><p class="icon_font">瑞士</p></div>
      <div class="menu_list menu_listF" @click="menu(6)"><iconfont-svg class="menu_icon" icon="icon-malaixiyai" size="25" ><i ></i></iconfont-svg><p class="icon_font">马来西亚</p></div>
      <div class="menu_list menu_listG" @click="menu(7)"><iconfont-svg class="menu_icon" icon="icon-yingguo1" size="25" ><i ></i></iconfont-svg><p class="icon_font">英国</p></div>
      <div class="menu_list menu_listH" @click="menu(8)"><iconfont-svg class="menu_icon" icon="icon-yingguotaqiao" size="25" ><i ></i></iconfont-svg><p class="icon_font">新加坡</p></div>
      <div class="menu_list menu_listI" @click="menu(9)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listJ" @click="menu(10)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listK" @click="menu(11)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listL" @click="menu(12)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listM" @click="menu(13)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listN" @click="menu(14)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
      <div class="menu_list menu_listO" @click="menu(15)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="25" ><i ></i></iconfont-svg><p class="icon_font">中国</p></div>
    </div> 
    <!-- 轮播图 -->
    <div class="swiper_tow">
      <div class="swiper_tow_list"></div>
      <div class="swiper_tow_list"></div>
      <div class="swiper_tow_list"></div>
      <div class="swiper_tow_list"></div>
      <div class="swiper_tow_list"></div>
      <div class="swiper_tow_list"></div>
    </div>
    <!-- 推荐 -->

    <div class="tj">
      <div class="tj1" >
        <div  v-for="index in tj1" :key="index.item">
          <img @click="a(index.img),xs()" class="tj_img" :src="index.img" alt="" srcset="">
        </div>
      </div>
      <div class="tj2">
        <div  v-for="index in tj2" :key="index.item">
           <img @click="a(index.img),xs()" class="tj_img" :src="index.img" alt="" srcset="">
          </div>
      </div>
      <div :class="{yc:no,xs:yes}">
          <div class="imgs">
            <img class="tj_img" :src="imgs" alt="" srcset="">
          </div>
          <div class="ycs" @click="xs">

          </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import router from '@/router';
import harder from '@/components/harder.vue';
export default {
  components: { harder },
  name: 'HomeView',
  data(){
    return{
      yes:true,
      no:false,
      imgs:"",
      list:[
        {id:1,name:"",img:"",}
      ],
      tj1:[
        {id:1,name:"",img:"https://img2.baidu.com/it/u=2971770275,4249590145&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1659114000&t=c56f923fe7ad60ca72aae3c40cc21215",},
        {id:2,name:"",img:"https://img1.baidu.com/it/u=1756691966,3932535320&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1659114000&t=7388b62c30994edd03882095e8198520",},
        {id:3,name:"",img:"https://img1.baidu.com/it/u=3324437857,1137023330&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=750",},
        {id:4,name:"",img:"https://img2.baidu.com/it/u=686428874,3063636929&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",},
        {id:5,name:"",img:"https://img0.baidu.com/it/u=4008405335,1195432668&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",},
        {id:6,name:"",img:"https://img2.baidu.com/it/u=4256506015,3691581927&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",},
        {id:7,name:"",img:"https://img2.baidu.com/it/u=442159843,30029578&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",},
       
      ],
      tj2:[
        {id:1,name:"",img:"https://img2.baidu.com/it/u=2680194495,2163004577&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",},
        {id:2,name:"",img:"https://img2.baidu.com/it/u=4266769265,2090637863&fm=253&fmt=auto&app=138&f=JPEG?w=355&h=500",},
        {id:3,name:"",img:"https://img0.baidu.com/it/u=2807461576,1950483897&fm=253&fmt=auto&app=138&f=JPEG?w=489&h=755",},
        {id:4,name:"",img:"https://img2.baidu.com/it/u=4148837542,119294277&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",},
      ]
    }
  },
  methods:{
    
    menu(id){
      axios.get('api/travel/' + id).then(res =>{
        this.$router.push({path :  id})
      })
    },
    a(aa){
      this.imgs = aa;
      console.log(aa);
    },
    xs(){
      this.yes = !this.yes;
      this.no =! this.no
      console.log("aaa");
    }
  }
}
</script>
<style scoped>
.imgs{
  position: absolute;
  z-index: 20;
  width: 88%;
  height: 20%; 
  bottom: 50%;
  transform: translate(6%,20%);
}.yc{
 position: absolute;
  width: 100%;
  height: 100%;
  background: #6f6f6f93;
  top: 0;
}.xs{
  display: none;
}.ycs{
   position: absolute;
  width: 100%;
  height: 100%;
  background: #6f6f6f93;
  top: 0;
}
/* 推荐 */
.Recommend{
  width: 48%;
  height: 120px;
  background: #2ad349;
  float: left;
  margin: 1%;
}

/* 轮播图 */
.swiper{
  width: 96%;
  height: 200px;
  background: linear-gradient(47deg,#7117ea40,#dbd0df);
  margin-top: 60px;
  position: relative;
   display: -webkit-inline-box;
  overflow: auto;
      transform: translate(2%);
      border-radius: 10px;
}.swiper_list{
  float: left;
  width: 120px;
  height: 180px;
  border-radius: 10px;
  margin: 10px;
  background: #F9F0DA;
 
}
/* 菜单栏 */
.menu{
  width: 96%;
  margin-top: 10px;
  border-radius: 10px;
  display: flex;
  transform: translate(2%);
  flex-wrap: wrap;
  justify-content: space-between;
}.menu_list{
  width: calc(19.4%);
  height: 50px;
  margin: 1px;
  background: aquamarine;
  position: relative;
}.menu_listA{
  border-radius: 5px 0px 0px 0px;background: linear-gradient(175deg,#fec163,#e28a6f);
}.menu_listB{
  background: linear-gradient(358deg,#17ead9,#60c3ea);
}.menu_listC{
   background: linear-gradient(1deg,#97abff,#619ffb);
}.menu_listD{
   background: linear-gradient(179deg,#2ad349,#57ca85);
}.menu_listE{
  border-radius: 0px 5px 0px 0px; background: linear-gradient(177deg,#eeff01,#dedfba);
}.menu_listF{
   background: #e5a74b75;
}.menu_listG{
   background: #57ccd670;
}.menu_listH{
   background: #916fcf70;
}.menu_listI{
   background: #6fcf7970;
}.menu_listJ{
   background: #c7cf6f70;
}.menu_listK{
  border-radius: 0px 0px 0px 5px; background: #e5a74b75;
}.menu_listL{
   background: #57ccd670;
}.menu_listM{
   background: #916fcf70;
}.menu_listN{
   background: #6fcf7970;
}.menu_listO{
  border-radius: 0px 0px 5px 0px; background: #c7cf6f70;
}.menu_icon{
  position: absolute;
  transform: translate(100%,-78%);
  top: 50%;
  left: 0;
}.icon_font{
  font-size: 12px;
    
    position: absolute;
    left: 50%;
    bottom: 3px;
    transform: translate(-50%, 0px);
}.iconfont-js{
  color: beige;
}

.tj{
  width: 98%;
  height: 100%;
  box-shadow: 0px 0px 16px 5px rgb(200, 200, 200);
  border-radius: 10px;
  margin-left: 1%;
}
.tj1{
  width: 49%;
  height: 500px;
  margin-right: 2%;
  border-radius: 10px;
  float: left;
  margin-top: 15px;
}.tj2{
  width: 49%;
  height: 500px;
  float: left;
  border-radius: 10px;
  margin-top: 15px;
}.tj_img{
  width: 94%;
  margin: 3%;
  border-radius: 10px;
}
</style>
