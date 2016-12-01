<template>
<el-row>
  <el-col :span="12">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Watching</span>
        <el-button style="float: right;" type="danger" icon="delete" @click="deleteAllLiked">Delete All</el-button>
      </div>
      <el-tag v-for="title in likedShows" :closable="true" :key="title" type="primary" :close-transition="false" @close="handleLikedClose(title)">
        {{title}}
      </el-tag>
    </el-card>
  </el-col>
  <el-col :span="12">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">Ignoring</span>
        <el-button style="float: right;" type="danger" icon="delete" @click="deleteAllDisliked">Delete All</el-button>
      </div>
      <el-tag v-for="title in dislikedShows" :closable="true" :key="title" type="danger" :close-transition="false" @close="handleDislikedClose(title)">
        {{title}}
      </el-tag>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  // TODO: add simple deleteable tag list
  data() {
    return {
      dislikedShows: localStorage.getItem('demon.disliked') ? JSON.parse(localStorage.getItem('demon.disliked')).sort() : [],
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : []
    }
  },
  methods: {
    handleLikedClose(title) {
      this.likedShows.splice(this.likedShows.indexOf(title), 1)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
    },
    handleDislikedClose(title) {
      this.dislikedShows.splice(this.dislikedShows.indexOf(title), 1)
      localStorage.setItem('demon.disliked', JSON.stringify(this.dislikedShows))
    },
    deleteAllLiked() {
      localStorage.removeItem('demon.liked')
    },
    deleteAllDisliked() {
      localStorage.removeItem('demon.disliked')
    }
  }
}
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 90%;
}
</style>
