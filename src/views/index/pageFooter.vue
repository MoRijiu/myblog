<!--
 * @Author: zhengduo
 * @Date: 2023-01-18 14:28:54
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 14:58:32
 * @Descripttion: 
-->
<template>
  <div class="pf-style">
    <div class="content">
      <p>
        <span>MoRijiu个人博客 - 网站用于个人学习和交流使用</span>
      </p>
      <p>
        <a href="javascript:;">辽ICP备10046444号</a>
        <a href="javascript:;"> 辽公网安备11010802020134号</a>
      </p>
      <p>
        <span>Copyright &copy; 2023 MoRijiu - All Rights Reserved - www.morijiu.cn</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang=scss>
.pf-style {
  background-color: #494949;
  animation:shadow-kf 4s linear infinite;

  .content {
    width: 1000px;
    margin: 0 auto;
    color: #ccc;
    font-size: 12px;
    padding: 20px;
    text-align: center;

    p {
      margin: 10px;
    }

    a {
      color: #ccc;
    }
  }
}

@keyframes shadow-kf {
  0% {
    box-shadow: 0px 0px calc(50vh - 66px) #808080;
  }

  25% {
    box-shadow: 0px 0px calc(50vh) #808080;
  }

  50% {
    box-shadow: 0px 0px calc(50vh) #242424;
  }

  75% {
    box-shadow: 0px 0px calc(50vh) #808080;
  }

  100% {
    box-shadow: 0px 0px calc(50vh - 66px) #808080;
  }
}
</style>