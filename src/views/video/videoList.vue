<template>
    <div class="video-list">
        <swiper :options="swiperOption">
            <!-- 幻灯内容 -->
            <swiper-slide v-for="(item,index) in dataList" :key="index">
                    <div>
                        <videos ref="videos" :videoList="item" :index="index"></videos>
                    </div>
                    <div class="infobar-ware">
                        <info-bar></info-bar>
                    </div>
                    <div class="rightbar_ware">
                       <right-bar></right-bar> 
                    </div>   
                </swiper-slide>    
            </swiper>
            <!-- 评论 -->
            <!-- <div class="comment">
                <div class="comment-list">
                    <div class="comment-top">
                        <div class="close"></div>
                        <div @click="numberTop" class="number"><span>X</span></div>
                    </div>
                </div>
            </div> -->
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'    //导入组件
import Videos from '../../components/index/Videos'
import InfoBar from '../../components/index/InfoBar'
import RightBar from '../../components/index/RightBar'

    export default{
        name:'videoList',
        methods:{
            playAction(index){
                this.$refs.videos[index].playOrStop()
            },
            nextVideo(index){
                this.$refs.videos[index-1].stop();
                this.$refs.videos[index].play();
            },
            //当我们上滑的时候
            prevVideo(index){
                this.$refs.videos[index+1].stop();
                this.$refs.videos[index].play();
            }
        },
        components: {
            swiper,          //定义组件
            swiperSlide,
            Videos,
            InfoBar,
            RightBar
            
        },

               data(){
            return {
                page:1,
                swiperOption: {
                    
                    direction:"vertical",
                    grabCursor: true, 
                    setWrapperSize: true, 
                    autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
                    slidesPerView: 1,
                    mousewheel: true, 
                    mousewheelControl: true, 
                    height: window.innerHeight, // 高度设置，占满设备高度
                    resistanceRatio: 0, 
                    observeParents: true, 
                    on:{
                        
                        tap:()=>{
                           this.playAction(this.page-1)
                        },
                        slideNextTransitionStart:()=>{
                            this.page += 1;
                            this.nextVideo(this.page - 1);
                            console.log(this.page);
                        },
                        slidePrevTransitionEnd:()=>{
                           if(this.page>1){
                              this.page -= 1;
                              this.prevVideo(this.page - 1);
                            console.log(this.page) 
                           }
                        }
                    }
                },
                dataList:
                [
                {
                    id:"0",
                    url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                    
                },
                {
                    id:"1",
                    url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4",
                   
                },
                {
                    id:"2",
                    url:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                },
                {
                    id:'3',
                    type:'video/mp4',
                    src:"http://video.jishiyoo.com/161b9562c780479c95bbdec1a9fbebcc/8d63913b46634b069e13188b03073c09-d25c062412ee3c4a0758b1c48fc8c642-ld.mp4"
                }
                ]
            }
        },
       
     }
</script>

<style scoped>
    .video-list{
        height: 100%;
        position: relative;
    }
    .infobar-ware{
        position: absolute;
        bottom: 55px;
        left: 0;
    }
    .rightbar_ware{
        position: absolute;
        right: 0;
        bottom: 55px;
    }
    .comment{
        position: fixed;
        bottom: 0;
        width: 95%;
        height: 500px;
        background: floralwhite;
        z-index: 999;
        padding: 10px 10px;
    }
    .number{
        float: right;
    }
</style>
