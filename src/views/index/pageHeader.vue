<!--
 * @Author: zhengduo
 * @Date: 2023-01-18 11:22:31
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 14:00:18
 * @Descripttion: 
-->
<template>
  <div class="ph-style">
    <div class="content">

      <div class="logo">
        <a href="/">MoRijiu个人博客</a>
      </div>
      <div class="menu">
        <ul>
          <li><a href="javascript:;">关于</a></li>
          <li class="sep-line"></li>
          <li><a href="javascript:;">博客</a></li>
          <li class="sep-line"></li>
          <li><a href="javascript:;">首页</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang=scss>
.ph-style {
  height: 66px;
  box-shadow: 0px 0px 10px #f3f3f3;

  .content {
    width: 1200px;
    margin: 0 auto;

    .logo {
      width: 400px;
      height: 100%;
      line-height: 66px;
      padding: 0 100px;
      font-size: 24px;
      // font-weight: 700;
      box-sizing: border-box;
      float: left;
      a {
        color: #000;
      }
    }

    .menu {
      // width: 800px;
      float: right;

      ul li {
        float: right;

        a {
          display: block;
          height: 66px;
          line-height: 66px;
          padding: 0 40px;

        }
      }
      li.sep-line {
        width: 1px;
        height: 16px;
        margin-top: calc(33px - 9px);
        background-color: #f0f0f0;
      }

      ul a:hover {
        color: #ffa959;
      }

    }
  }

}
</style>