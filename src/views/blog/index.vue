<!--
 * @Author: zhengduo
 * @Date: 2023-01-19 10:23:54
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-19 11:22:35
 * @Descripttion: 
-->
<template>
  <div>
    <navbar></navbar>
    <blog></blog>
    <page-footer></page-footer>
  </div>
</template>

<script setup lang="ts">
import navbar from '@/components/navbar/index.vue'
import blog from './blog.vue'
import pageFooter from '../../components/footer/pageFooter.vue'
</script>

<style lang=scss>
</style>