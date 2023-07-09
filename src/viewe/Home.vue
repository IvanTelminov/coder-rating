<script setup>
import { onMounted } from 'vue'
import {useCoderStore} from "../stores/coder.js";

const coderStore = useCoderStore()

onMounted(async () => {
  await coderStore.load()
  console.log(coderStore.list)
})
</script>

<template>
  <ul>
    <li v-for="c in coderStore.list">{{ c.name }}</li>
  </ul>

  <el-link href="/elplus/" :underline="false">
    <el-button type="primary" size="large">ElementPlus</el-button>
  </el-link>
</template>

<style scoped>

</style>