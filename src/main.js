import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/base.css'


const app = createApp(App)

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 第三方库挂载导全局
import echarts from '@/plugins/echarts'
app.provide('echarts' , echarts)


app.use(router).mount('#app')
