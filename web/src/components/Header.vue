<template>
<div class="top-nav">
  <el-menu theme="dark" class="el-menu-top" router :default-active="defaultActive" mode="horizontal">
    <el-menu-item index="/">home</el-menu-item>
    <el-menu-item index="/settings">settings</el-menu-item>
    <el-menu-item index="/about">about</el-menu-item>
  </el-menu>
</div>
</template>
<script>
export default {
  data() {
    let defaultActive = this.$route.path
    if (this.$route.name === 'home') {
      defaultActive = '/'
    }
    return {
      defaultActive,
    }
  },
}
</script>
