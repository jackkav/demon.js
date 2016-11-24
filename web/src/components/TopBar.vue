<template>
  <div class="hello">
<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item index="home">Home page</el-menu-item>
  <el-menu-item index="pageTwo">Page two</el-menu-item>
</el-menu>
</div>
</template>

<script>
  export default {
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
