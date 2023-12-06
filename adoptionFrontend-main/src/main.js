import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import {ElMenu, ElMenuItem, ElSubMenu, ElButton } from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn,
})

createApp(App).use(router).mount('#app')
app.component(ElMenu.name, ElMenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElSubMenu.name, ElSubMenu)
app.component(ElButton.name, ElButton)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
