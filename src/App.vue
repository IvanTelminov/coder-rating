<script setup>
import axios from "axios";
import {useCoderStore} from "./stores/coder.js";

const coderStore = useCoderStore()
// axios.get("https://ya.ru")
</script>

<template>
  {{ coderStore.name }}

  <el-link href="/home/" :underline="false">
    <el-button type="primary" size="large">дом</el-button>
  </el-link>

  <router-view></router-view>
</template>

<style scoped>

</style>
