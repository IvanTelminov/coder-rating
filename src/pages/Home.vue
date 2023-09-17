<script setup>
  import {useCoderStore} from "../stores/coder.js";

  const coder = useCoderStore()
  coder.load()
</script>

<template>
  <h2>Home</h2>


  <el-table :data="coder.list">
    <el-table-column prop="name" label="Имя"/>
    <el-table-column prop="score" label="Счёт"/>
    <el-table-column label="Темы">
      <template #default="scope">
        <span
            v-for="u in scope.row.units" :key="u.id">
          {{u.name}}
        </span>
      </template>
    </el-table-column>
  </el-table>

</template>

<style scoped>

</style>