<script setup>

</script>

<template>

  <el-menu     mode="horizontal" :ellipsis="false">
    <el-menu-item>Рейтинг</el-menu-item>
    <div class="flex-grow" />
    <el-link href="/loginka/" :underline="false">
      <el-button type="info" round>Войти</el-button>
    </el-link>
    <el-menu-item index="1">
      <a href="http://127.0.0.1:8000/backend/admin/">Админка</a>
    </el-menu-item>
  </el-menu>

  <router-view></router-view>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
