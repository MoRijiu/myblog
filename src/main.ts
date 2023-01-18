/*
 * @Author: zhengduo
 * @Date: 2023-01-18 09:54:08
 * @LastEditors: zhengduo
 * @LastEditTime: 2023-01-18 10:30:57
 * @Descripttion: 
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

// 路由导航守卫
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title || 'morijiu 博客 | 提升技术 丰富生活'
  }
  next()
})


const app = createApp(App)
app.use(router)
// app.use(store)
// app.use(ElementPlus)
app.mount('#app')
// createApp(App).mount('#app')