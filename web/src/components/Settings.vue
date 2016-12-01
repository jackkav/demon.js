<template>
<div>
  <p>liked shows:
    <el-tag v-for="title in likedShows" :closable="true" :key="title" type="primary" :close-transition="false" @close="handleLikedClose(title)">
      {{title}}
    </el-tag>
  </p>
  <p>disliked shows:
    <el-tag v-for="title in dislikedShows" :closable="true" :key="title" type="danger" :close-transition="false" @close="handleDislikedClose(title)">
      {{title}}
    </el-tag>
  </p>
</div>
</template>

<script>
export default {
  // TODO: add simple deleteable tag list
  data() {
    return {
      dislikedShows: JSON.parse(localStorage.getItem('demon.disliked')).sort() || [],
      likedShows: JSON.parse(localStorage.getItem('demon.liked')).sort() || []
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
    }
  }
}
</script>
