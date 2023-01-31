<script setup lang="ts">
import { ref,onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { navOptions } from '@/components/navigations/NavOptions'

const siderCollapsed = ref(false)
const appRouter = useRouter()
const appRoute = useRoute()
const menuSelectedKeys = ref([navOptions[0].route])
onMounted(() => {
    console.log('onMounted: App')
    console.log(appRoute.name) // undefined on refresh
})
</script>

<template>
  <a-layout class="app-layout">
    <!-- <Sidebar></Sidebar> -->
    <a-layout-sider collapsible v-model:collapsed="siderCollapsed">
        <div class="app-logo"></div>
        <a-menu theme="dark" mode="inline" v-model:selectedKeys="menuSelectedKeys">
            <a-menu-item
                v-for="option in navOptions"
                :key="option.route"
            >
                <component :is="option.icon" />
                <span>{{ option.name }}</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>

    <a-layout>
      <!-- <a-layout-header style="background: #fff; padding: 0"></a-layout-header> -->
      <a-layout-content style="margin: 0 16px">
        <router-view />
      </a-layout-content>
      <!-- <a-layout-footer style="text-align: center"></a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<style scoped lang="scss">
.app-layout {
  height: 100%;
}
.app-logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}
</style>
