<template>
<div class="top-bar">
  <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="home">Home page</el-menu-item>
    <el-menu-item index="pageTwo">Page two</el-menu-item>
    <!-- <el-menu-item index="search" justify="right">
      <el-input placeholder="Search" v-model="input">
      </el-input>
    </el-menu-item> -->
  </el-menu>
</div>
</template>

<script>
// TODO: fix to top
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
