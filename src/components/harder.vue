<template>
  <div >
     <!-- 侧边栏 -->
    <div :class="{sidebar:a , ys:isVisible }">
      <div class="sidebarA">
        <div class="lm">
          <ul>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
          <li>123456</li>
        </ul>
        </div>
      </div>
      <div class="sidebarB" @click="kb()">
        
      </div>
    </div>
    <!-- 顶部搜索导航栏 -->
    <div class="harder" >
      <span  @click="kb()"  class="iconcd"><iconfont-svg icon="icon-caidan2" size="30"></iconfont-svg></span>
      <div id="container">
     <div class="search bar1">
            <form action="">
                <input type="text" style="border-radius:17px;" placeholder="请输入您要搜索的内容...">
                <button type="submit" > <iconfont-svg icon="icon-sousuo2" size="34" ><i ></i></iconfont-svg></button>
            </form>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Harder',
  data(){
    return{
      a:true,
      isVisible:false
    }
  },
  methods:{
    kb(){
        this.isVisible = !this.isVisible;
        this.a =! this.a
    },
  }
}

</script>

<style scoped>
/* 侧边栏 */
.harder{
  display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    z-index: 10;
    background: #dddddd;width: 100%;
    height: 50px;
}
  .sidebar{
  display: none;
  }
.ys{
  position: absolute;
  display: flex;
  height: 0;
  width: 0px;
  width: 100%;

}.sidebarA{
  width: 63%;
    height: 43vh;
    background: slategray;
    z-index: 2;
    border-radius: 2px 2px 10px 2px;
    position: absolute;
    top: -10px;
}.sidebarB{
    width: 100%;
    height: 100vh;
    background: rgba(135, 135, 135, 0.344);
    position: absolute;
    z-index: 0;
}
/* 搜索导航栏 */
#container{
  margin-top: 5px;
}
.harder{
  display: flex;
  align-items: center;
  
}
.iconcd{
  margin-right: 18%;
}
.bar1 {
  
}

.bar1 input {
    border: 2px solid #7BA7AB;
    border-radius: 5px;
    background: #F9F0DA;
    color: #9E9C9C;
}

.bar1 button {
    top: 0;
    right: 0;
    background: #7BA7AB;
    border-radius: 0 5px 5px 0;
}

  * {
    box-sizing: border-box;
}
form {
    position: relative;
    width: 200px;
    margin: 0 auto;
}

input,
button {
    border: none;
    outline: none;
}

input {
    width: 100%;
    height: 35px;
    padding-left: 13px;
}

button {
    height: 35px;
    width: 35px;
    cursor: pointer;
    position: absolute;
}
.lm{
  margin-top: 70px;
}.lm>ul>li{
  height: 30px;
  text-align: center;
  width: 100%;
}.lm>ul>li:hover{
  background: #F9F0DA;
}
</style>
