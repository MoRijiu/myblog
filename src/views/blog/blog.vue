<!--
 * @Author: zhengduo
 * @Date: 2023-01-19 11:21:25
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-19 15:36:33
 * @Descripttion: 
-->
<template>
  <div class="blog">
    <!-- 轮播图 -->
    <n-carousel show-arrow autoplay>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg">
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg">
      <template #arrow="{ prev, next }">
        <div class="custom-arrow">
          <button type="button" class="custom-arrow--left" @click="prev">
            <n-icon>
              <ArrowBack />
            </n-icon>
          </button>
          <button type="button" class="custom-arrow--right" @click="next">
            <n-icon>
              <ArrowForward />
            </n-icon>
          </button>
        </div>
      </template>
      <template #dots="{ total, currentIndex, to }">
        <ul class="custom-dots">
          <li v-for="index of total" :key="index" :class="{ ['is-active']: currentIndex === index - 1 }"
            @click="to(index - 1)" />
        </ul>
      </template>
    </n-carousel>
    <!-- 入驻作者 -->
    <div class="content">
      <div class="recommend w300">
        <div class="title">入驻作者</div>
        <ul>
          <li v-for="item, index in [1,2,3,4,5]">
            <div class="index">{{ index + 1 }}</div>
            <img src="@/assets/images/user/hzyr.jpg">
            <span>morijiu</span>
          </li>
        </ul>
      </div>
      <!-- 推荐博文 -->
      <div class="recommend w850" style="margin-left: 50px;">
        <div class="title">推荐博文</div>
        <ul>
          <li v-for="item, index in [1,2,3,4,5,6,7]">
            <a href="javascript:;">博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客博客</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ArrowBack, ArrowForward } from '@vicons/ionicons5'

</script>

<style lang=scss>
.blog {
  min-height: calc(100vh - 66px);

  n-carousel {
    z-index: -1;
  }

  .carousel-img {
    width: 100%;
    height: 340px;
    object-fit: cover;
  }

  .custom-arrow {
    display: flex;
    position: absolute;
    bottom: 25px;
    right: 10px;
  }

  .custom-arrow button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    margin-right: 12px;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-width: 0;
    border-radius: 8px;
    transition: background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-arrow button:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .custom-arrow button:active {
    transform: scale(0.95);
    transform-origin: center;
  }

  .custom-dots {
    display: flex;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }

  .custom-dots li {
    display: inline-block;
    width: 12px;
    height: 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.4);
    transition: width 0.3s, background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  }

  .custom-dots li.is-active {
    width: 40px;
    background: #fff;
  }
  .content {
    width: 1200px;
    margin: 20px auto;
    overflow: hidden;
    .recommend {
      float: left;
    }

    .title {
      font-size: 24px;
      border-left: 4px solid #FF841F;
      padding-left: 10px;
      margin-bottom: 10px;
    }
    ul > li {
      display: flex;
      padding: 6px 0;
      img {
        width: 30px;
        margin-right: 10px;
        border-radius: 15px;
      }
      span {
        line-height: 30px;
      }

      a:hover {
        color: #FF841F;
        text-decoration: underline;
      }
      
      a::after {
        content: '>';
      }
    }
    ul > li:not(:last-child) {
      border-bottom: 1px solid #ffeada;
      
    }
    ul .index {
      line-height: 30px;
      height: 30px;
      margin-right: 20px;
    }
    ul .index::after {
      content: '•';
      margin-left: 20px;
    }
  }
}

.w300 {
  width: 300px;
}

.w850 {
  width: 850px;
}
</style>