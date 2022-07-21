<template>
  <div v-touch:right="callback">
    <Harder></Harder>
    <div class="a">
      <div class="cd" v-for="index in res" :key="index.id">
        <p>{{index.name}}</p>
        <img :src="index.img" class="img" alt="" srcset="">
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
.a{
  display: flex;
      flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px 7%;
}
.cd{
  width: 150px;
  height: 200px;
  background: rgba(194, 194, 187, 0.712);
  float: left;
  margin-top: 10px;
}.img{
  width: 100%;
}
</style>
