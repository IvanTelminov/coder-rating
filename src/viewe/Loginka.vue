<script setup>

import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})


</script>

<template>
  <div class="inputfields">
    <div id="buttonsleft">
      <el-form :model="form" label-width="100px">
        <el-form-item label="Activity name">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
    </div>
    <div id="buttonsright">
      <img
          width="550"
          height="700"
          src="https://gpt-open.ru/uploads/generate/64b10cc936206doc693980333/64b10ea0c9ef1doc1042834836.png">
    </div>
  </div>
  
</template>

<style scoped>
.inputfields {
  display: inline;
}

#buttonsright {
  float: right;
  //width: 30%;
}

#buttonsleft {
  float: left;
  width: 30%;
}

</style>