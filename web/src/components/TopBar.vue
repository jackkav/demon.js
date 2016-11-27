<template>
<div class="headerWrapper">
  <el-row>
    <el-menu theme="dark" default-active="1" class="header-home" mode="horizontal" @select="handleSelect">
      <el-col :span="18">
        <el-menu-item index="home" to="/home">
          <router-link to="/">Home page</router-link>
        </el-menu-item>

        <el-menu-item index="about">
          <router-link to="/about">About</router-link>
        </el-menu-item>
      </el-col>
      <!-- <el-col :span="6">
        <el-menu-item index="search" justify="right">
          <el-input placeholder="Search" v-model="input">
          </el-input>
        </el-menu-item> -->
      </el-col>
    </el-menu>
  </el-row>
</div>
</template>

<script>
export default {
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.header-home {
  position: fixed;
  top: 0;
  width: 100%
}
</style>
