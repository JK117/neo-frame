import { createApp } from 'vue'
import '@/styles/index.css'
import App from './App.vue'
import router from './router'
import * as Icons from "@ant-design/icons-vue";

router.beforeEach((to, from) => {
    console.log("--- Router update ---")
    console.log("Router: from ", from.fullPath)
    console.log("Router: to ", to.fullPath)
})

const app = createApp(App)
app.use(router)
app.mount('#app')

const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i]);
}
