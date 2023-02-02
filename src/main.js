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
import echarts from '@/plugins/echarts';
app.provide('echarts' , echarts)

// 挂载全局分页本地化
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn'
app.use(ElementPlus, {locale: zhCn,})
import 'dayjs/locale/zh-cn'


app.use(router).mount('#app')
