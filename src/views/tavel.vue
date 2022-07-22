<template>
  <div v-touch:right="callback" style="    height: 100vh">
    <div class="ab">
        <div class="aaa">

        </div>
    </div>
    <div>
       <Harder></Harder>
      <div class="a">
        <div class="cd" v-for="index in res" :key="index.id">
          <img :src="index.img" class="img" alt="" srcset="">
          <p class="img_p">{{index.name}}</p><p></p>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      res:[]
    }
  },
  created(){
    this.a()
  },
  methods:{ 
    a(){
      axios.get('api/travel/' +this.$route.params.id).then(res =>{
      
       this.res = res.data
      })
    },
    callback(){
       this.$router.push({path : '/'})
    }
  }
}
</script>

<style>
.db{
    position: absolute;
    height: 100vh;
}.aaa{
  background: blueviolet;
    position: absolute;
    height: 40px;
    width: 40px;
    bottom: 50%;
    transform: translate(-40px, 50%);
}
.a{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0px 7%;
}
.cd{
  width: 150px;
      border-radius: 12px;
  box-shadow: 0 0 7px 0px #eae7e6bf;
  float: left;
  margin-top: 10px;
}.img{
  width: 100%;
      border-radius: 12px 12px 0px 0px;
}.img_p{
  font-weight: 600;
    font-size: 8px;
}
</style>
