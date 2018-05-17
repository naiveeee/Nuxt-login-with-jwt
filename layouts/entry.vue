<template>
  <div class="bg">
    <div class="login-container-wrap">
      <nuxt/>
    </div>
    <ul class="bg-bubbles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template> 

<script>
export default {
}
</script>

<style lang="less" scoped>
  .bg{
    width: 100vw;
    height: 100vh;
    background: #50a3a2;
    overflow: hidden;
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    opacity: 0.8;
    .bg-bubbles{
      li{
        position: absolute;
        list-style: none;
        display: block;
        width: 40px;
        height: 40px;
        background-color: rgba(255, 255, 255, 0.15);
        animation: square 25s infinite;
        transition-timing-function: linear;
        transform: translateY(100vh);
      }
      li:nth-child(1){
        left: 10%;
      }
      li:nth-child(2){
        left: 20%;
        width: 80px;
        height: 80px;
        animation-delay: 2s;
        animation-duration: 17s;
      }
      li:nth-child(3){
        left: 25%;
        animation-delay: 4s;
      }
      li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-duration: 22s;
        background-color: rgba(255, 255, 255, 0.25);
      }
      li:nth-child(5){
        left: 70%;
      }
      li:nth-child(6){
        left: 80%;
        width: 120px;
        height: 120px;
        animation-delay: 3s;
        background-color: rgba(255, 255, 255, 0.2);
      }
      li:nth-child(7){
        left: 32%;
        width: 160px;
        height: 160px;
        animation-delay: 7s;
      }
      li:nth-child(8){
        left: 55%;
        width: 20px;
        height: 20px;
        animation-delay: 15s;
        animation-duration: 40s;
      }
      li:nth-child(9){
        left: 25%;
        width: 10px;
        height: 10px;
        animation-delay: 2s;
        animation-duration: 40s;
        background-color: rgba(255, 255, 255, 0.3);
      }
      li:nth-child(10){
        left: 90%;
        width: 160px;
        height: 160px;
        animation-delay: 11s;
      }
    }
    .login-container-wrap{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 600px;
      margin: 0 auto;
      padding: 80px 0;
      height: 400px;
      text-align: center;
    }
  }
  @keyframes square {
    0% {
      transform: translateY(100vh);
    }
    100% {
      transform: translateY(-250px) rotate(600deg);
    }
  }
</style>
<style>
body{
  overflow: hidden;
}
</style>
