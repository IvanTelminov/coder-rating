<script setup>
import { onMounted } from 'vue'
import {useCoderStore} from "../stores/coder.js";

const coderStore = useCoderStore()

onMounted(async () => {
  await coderStore.load()
})
</script>

<template>
  <ul>
    <li v-for="c in coderStore.list">{{ c.name }}</li>
  </ul>

  <el-link href="/" :underline="false">
    <el-button type="primary" size="large">дом</el-button>
  </el-link>

</template>

<style scoped>

</style>