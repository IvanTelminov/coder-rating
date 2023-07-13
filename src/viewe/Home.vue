<script setup>
import { onMounted } from 'vue'
import {useCoderStore} from "../stores/coder.js";

const coderStore = useCoderStore()

onMounted(async () => {
  await coderStore.load()
})
</script>

<template>

  <el-table :data="coderStore.list" border style="width: 100%">
    <el-table-column prop="avatar" label="" width="130" >
      <template #default="scope">
        <el-image style="width: 100px; height: 100px" :src="scope.row.avatar" fit="fill" />
      </template>
    </el-table-column>
    <el-table-column prop="name" label="Имя" width="180" />
    <el-table-column prop="score" label="Баллы" width="180" />
    <el-table-column prop="description" label="Описание" width="180" />
    <el-table-column prop="units" label="урок" width="180" />
  </el-table>
</template>

<style scoped>

</style>