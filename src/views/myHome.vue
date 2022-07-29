<template>
  <div class="home">
    <Nav/>
    <ul class="ul">
      <li>
         <p>111</p>
         <img src="../assets/logo.png" alt="" srcset="">
      </li>
      <li>
         <p>222</p>
      </li>
      <li>
        <p>333</p>
      </li>
      <li>
         <p>444</p>
      </li>
      <li>
         <p>555</p>
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
  border: 1px solid dimgrey;
  padding: 5px;
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
 border: 1px solid darkcyan;
 right: 20px;
}.ul>li>p{
line-height: 60px;
position: absolute;
 
}
</style>
