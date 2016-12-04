<template>
<div>
  <ol>
    <li v-for="title in topten" v-on:click="getPoster(title)">
      <el-popover trigger="click" placement="right">
        <img v-loading.body="loading" v-bind:src="poster"></img>
        <div slot="reference" class="name-wrapper">
          <el-button type="text" @click="addToWatchlist(title)">{{ title }}</el-button>
        </div>
      </el-popover>
    </li>
  </ol>
</div>
</template>
<script>
import axios from 'axios'
var instance = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  timeout: 20000,
})
export default {
  data() {
    return {
      likedShows: JSON.parse(localStorage.getItem('demon.liked')) || [],
      topten: ['The Walking Dead', 'Shameless', 'Westworld', 'The Flash', 'Supernatural', 'Game of Thrones', 'Vikings', 'Doctor Who', 'The Grand Tour', 'Gotham'],
      poster: '',
      loading: false
    }
  },
  methods: {
    getPoster(row) {
      this.loading = true
      instance.get(`?t=${row}&y=&plot=short&r=json`)
        .then((response) => {
          console.log(response.data)
          this.poster = response.data.Poster
          this.loading = false
        })
    },
    addToWatchlist(title) {
      if (this.likedShows.includes(title)) return
      this.likedShows.push(title)
      localStorage.setItem('demon.liked', JSON.stringify(this.likedShows))
      const msg = {
        message: `You're watching ${title} huh...`,
        type: 'success'
      }
      this.$message(msg)
    }
  }
}
</script>
