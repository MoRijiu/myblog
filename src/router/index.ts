/*
 * @Author: zhengduo
 * @Date: 2023-01-18 10:01:04
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 10:25:11
 * @Descripttion: 
 */

/** 
 * * createRouter 这个为创建路由的方法 
 * * createWebHashHistory 这个就是vue2中路由的模式， 
 * * 这里的是hash模式，这个还可以是createWebHistory等 
 * * RouteRecordRaw 这个为要添加的路由记录，也可以说是routes的ts类型 
 * */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// 路由记录，这个跟vue2中用法一致，就不做过多解释了
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/home/index.vue"),
    alias: '/home',
    meta: {
      title: '首页'
    }
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
