<!--
 * @Author: zhengduo
 * @Date: 2023-01-18 14:44:00
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 16:15:34
 * @Descripttion: 
-->
<template>
  <div class="pc-style">
    <div class="content">
      <div class="main">
        <div class="logo"></div>
        <div class="main-intro">
          <p class="title">MoRijiu个人博客</p>
          <p class="en-intro">Record every bit of life, achieve my dream, improve my ability, and change my world!</p>
          <p class="button-style">点击进入</p>
        </div>
      </div>
      <ul class="intro-list">
        <li>
          <p>学会总结</p>
          <p>一缕零散的思绪，一段深刻的记忆，一件意义非凡的事迹，一篇妙笔生花的随笔，都可以记录下来，让瞬间成为永恒，停留在刹那的芳华。</p>
        </li>
        <li>
          <p>习惯分享</p>
          <p>分享欲是每个人都具备的，把快乐的故事分享给其他人，快乐会加倍；把不快的事情分享给其他人，痛苦会减半。习惯于分享，分享生活，留住感动。</p>
        </li>
        <li>
          <p>热爱生活</p>
          <p>当我们具有足够的热情，去面对生活的时候，我们总会是幸运的，我们所释放的正能量也会向我们自己不断输出正反馈。</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang=scss>
.pc-style {
  height: calc(100vh - 66px);

  .content {
    width: 1200px;
    height: calc(100vh - 66px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    .main {
      flex: 1;
      width: 500px;
      margin: 100px auto;
      display: flex;

      .logo {
        width: 120px;
        height: 120px;
        background-color: #123;
        background: url('/vite.svg');
        background-repeat: no-repeat;
        background-size: contain;

      }

      .main-intro {
        width: 360px;
        margin-left: 20px;

        // background-color: #bfa;
        .title {
          font-size: 44px;
          font-weight: 700;
        }

        .en-intro {
          color: #808080;
          font-size: 14px;
          margin: 4px 0 4px 0;
          padding-left: 4px;
          border-left: 4px solid #7e3900;
        }

        .button-style {
          line-height: 40px;
          text-decoration: underline;
          cursor: pointer;
          width: 64px;
          transition: all 0.4s;
        }

        .button-style:hover {
          transition: all 0.4s;
          color: white;
          background-color: rgb(245, 133, 42);
          width: 140px;
          text-align: center;
          border-radius: 20px;
          text-decoration: none;
        }

        .button-style:hover+.en-intro {
          font-size: 12px;
        }
      }
    }

    .intro-list {
      flex: 1;
      display: flex;
      // align-items: center;

      li {
        flex: 1;
        margin: 20px;
      }

      li:not(:last-child) {
        padding-right: 20px;
        border-right: 1px solid rgb(230, 230, 230);
      }

      li p:first-child {
        font-size: 24px;
        border-left: 4px solid rgb(255, 143, 39);
        padding-left: 6px;
      }

      li p:last-child {
        margin-top: 10px;
      }
    }
  }
}
</style>