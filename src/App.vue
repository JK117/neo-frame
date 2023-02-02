<script setup lang="ts">
</script>

<template>
  <a-layout class="app-layout">
    <Sidebar></Sidebar>

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
