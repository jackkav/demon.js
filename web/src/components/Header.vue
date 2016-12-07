<template>
<div class="top-nav">
  <el-menu theme="dark" class="el-menu-top" router :default-active="defaultActive" mode="horizontal">
    <el-menu-item index="/">home</el-menu-item>
    <!-- <el-menu-item index="/latest">latest</el-menu-item>
    <el-menu-item index="/settings">settings</el-menu-item> -->
    <el-menu-item index="/about">about</el-menu-item>
    <!-- show page with visitor stats -->
    <el-menu-item v-if="hasVisitedBefore" index="/about" style="float:right;">Logged in from {{fingerprint.city}}</el-menu-item>
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
    let hasVisitedBefore = false
    let fingerprint = {}
    if (localStorage.getItem('demon.fingerprint') && JSON.parse(localStorage.getItem('demon.fingerprint')).fingerprint) {
      hasVisitedBefore = true
      fingerprint = JSON.parse(localStorage.getItem('demon.fingerprint'))
    }

    return {
      defaultActive,
      hasVisitedBefore,
      fingerprint,
    }
  },
}
</script>
