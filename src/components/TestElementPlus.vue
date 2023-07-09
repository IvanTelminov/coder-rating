<script setup>
import {useCoderStore} from "../stores/coder.js";
import {onMounted} from "vue";

const coderStore = useCoderStore()

onMounted(async () => {
  await coderStore.load()
  console.log(coderStore.list)
})
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>

<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Aaddress" />
  </el-table>

  <ul>
    <li>{{coderStore.list}}</li>
  </ul>

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