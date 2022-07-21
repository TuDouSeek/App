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
      <div class="menu_list menu_listA" @click="menu('china')"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listB" @click="menu('america')"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listC" @click="menu('canada')"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listD" @click="menu('canada')"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listE" @click="menu('swit')"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listF" @click="menu(6)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listG" @click="menu(7)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listH" @click="menu(8)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listI" @click="menu(9)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listJ" @click="menu(10)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listK" @click="menu(11)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listL" @click="menu(12)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listM" @click="menu(13)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listN" @click="menu(14)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
      <div class="menu_list menu_listO" @click="menu(15)"><iconfont-svg class="menu_icon" icon="icon-daizhangguanli" size="34" ><i ></i></iconfont-svg></div>
    </div> 
    <!-- 推荐 -->
    <div>
      
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
      
    }
  },
  methods:{
    
    menu(id){
      axios.get('api/travel/' + id).then(res =>{
       
        this.$router.push({path :  id})
      })
    }
  }
}
</script>
<style>
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
  transform: translate(50%,-50%);
  top: 50%;
  left: 0;
}
</style>
