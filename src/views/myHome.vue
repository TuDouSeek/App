<template>
  <div class="home">
    <ul class="ul">
      <li>
         <p>111</p>
         <img src="../assets/logo.png" alt="" srcset="">
      </li>
      <li>
        222
      </li>
      <li>
        333
      </li>
      <li>
        444
      </li>
      <li>
        555
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.home{
  width: 100%;
  height: 100%;
}.ul>li{
  width: 100%;
  height: 60px;
  position: relative;
}.ul>li:hover{
  background: rgb(189, 189, 189);
}.ul>li>img{
 width: 50px;
 height: 50px;
 line-height: 60px;
 border-radius: 50%;
 position: absolute;
 right: 20;
}
</style>
