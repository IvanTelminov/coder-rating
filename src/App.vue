<script setup>
import axios from "axios";
import {useCoderStore} from "./stores/coder.js";

const coderStore = useCoderStore()
// axios.get("https://ya.ru")
</script>

<template>
  <el-button type="primary" plain>Primary</el-button>
  {{ coderStore.name }}
</template>

<style scoped>

</style>
