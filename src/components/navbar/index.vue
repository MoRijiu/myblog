<!--
 * @Author: zhengduo
 * @Date: 2023-01-19 10:24:52
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-19 14:43:59
 * @Descripttion: 
-->
<template>
  <div class="generic-navbar">
    <div class="content">
      <div class="logo">
        <a href="javascript:;">MoRijiu积水成渊<span>博客站</span></a>
      </div>
      <ul class="menu">
        <li><a href="javascript:;">首页</a></li>
        <li><a href="javascript:;">文章</a></li>
        <li><a href="javascript:;">关于</a></li>
      </ul>
      <div class="user-info">
        <!-- 未登录 -->
        <div v-if="!isLogin" class="btn-group">
          <div class="btn-item">
            <div class="img-bg"></div>
            <span>登录</span>
          </div>
          <div class="btn-item">
            <div class="img-bg"></div>
            <span>注册</span>
          </div>
        </div>
        <div v-else>
          <div class="headport">
            <img src="@/assets/images/user/hzyr.jpg" alt="">
          </div>
          <div class="nickname">{{ nickname }}</div>
        </div>
      </div>
      <!-- 输入框 -->
      <div class="search">
        <input type="text" placeholder="请输入想查找的技术文章、博客">
        <div class="search-btn">搜索</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLogin = true;
const nickname = 'morijiu';
</script>

<style lang=scss>
.generic-navbar {
  height: 66px;
  box-shadow: 0px 0px 10px #f3f3f3;

  .content {
    width: 1200px;
    margin: 0 auto;

    .logo {
      a {
        color: #000;
        height: 66px;
        display: block;
        line-height: 66px;
        float: left;
        padding: 0 10px;
        font-size: 24px;
        position: relative;

        span {
          position: absolute;
          top: 12px;
          right: -36px;
          font-size: 12px;
          background-color: rgb(255, 132, 31);
          padding: 0 4px;
          height: 20px;
          line-height: 20px;
          color: white;
          border-radius: 6px 0 6px 0;
        }
      }
    }

    .menu {
      float: left;
      margin-left: 100px;

      li {
        float: left;
        margin-right: 20px;

        a {
          display: block;
          padding: 0 10px;
          line-height: 66px;
          height: 66px;
          box-sizing: border-box;
        }

        a:hover {
          border-bottom: 4px solid rgb(255, 132, 31);
          color: #000;
        }
      }
    }

    .user-info {
      float: right;
      width: 200px;
      // background-color: #123;
      height: 66px;

      .btn-group {
        display: flex;
        margin-top: 20px;

        .btn-item {
          display: flex;
          width: 100px;
          cursor: pointer;

          div {
            width: 26px;
            height: 26px;
            margin-right: 10px;
          }

          span {
            line-height: 26px;
          }
        }

        .btn-item:hover {
          color: #FF841F;
        }

        .btn-item:first-child div {
          background: url('@/assets/images/user/user.svg') no-repeat;
          background-size: contain;
        }

        .btn-item:last-child div {
          background: url('@/assets/images/user/register.svg') no-repeat;
          background-size: contain;
        }
        
        .btn-item:first-child:hover div {
          background: url('@/assets/images/user/user-active.svg') no-repeat;
          background-size: contain;
        }

        .btn-item:last-child:hover div {
          background: url('@/assets/images/user/register-active.svg') no-repeat;
          background-size: contain;
        }
      }
    }
    .user-info div.headport {
      width: 46px;
      height: 46px;
      margin-top: 10px;
      border-radius: 23px;
      overflow: hidden;
      float: left;
      cursor: pointer;

      img {
        width: 46px;
        height: 46px;
      }
    }
    .user-info div.nickname {
      float: left;
      margin-left: 10px;
      line-height: 66px;
      cursor: pointer;
    }
    .search {
      width: 360px;
      // background-color: #bfa;
      float: right;
      margin-right: 90px;
      position: relative;
      input {
        border: 1px solid #b6b6b6;
        width: 100%;
        height: 36px;
        outline: none;
        margin-top: 15px;
        border-radius: 20px;
        padding: 0 84px 0 16px;
        font-size: 16px;
        transition: all 0.3s;
        box-sizing: border-box;
        color: #cfcfcf;
      }
      input:focus {
        border: 1px solid #FF841F;
        color: #000;
      }
      div.search-btn {
        position: absolute;
        top: 17px;
        right: 2px;
        // background-color: #FF841F;
        border-left: 1px solid #b6b6b6;
        color: #b6b6b6;
        height: 32px;
        padding: 0 18px;
        text-align: center;
        line-height: 32px;
        border-radius: 20px;
        transition: all 0.3s;
        cursor: pointer;
      }
      input:focus + div.search-btn {
        color: #fff;
        background-color: #FF841F;
        border: none;
      }
    }
  }
}
</style>