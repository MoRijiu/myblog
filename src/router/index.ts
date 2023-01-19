/*
 * @Author: zhengduo
 * @Date: 2023-01-18 10:01:04
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-19 10:31:34
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
    name: 'index',
    component: () => import("@/views/index/index.vue"),
    alias: '/index',
    meta: {
      title: 'MoRijiu积水成渊博客站'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import("@/views/blog/index.vue"),
    alias: '/blog',
    meta: {
      title: '首页 | MoRijiu积水成渊博客站'
    }
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
