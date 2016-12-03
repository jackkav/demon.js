<template>
<div>
  <ol>
    <li v-for="title in likedShows">
      {{title}}
    </li>
  </ol>
</div>
</template>
<script>
export default {
  data() {
    return {
      likedShows: localStorage.getItem('demon.liked') ? JSON.parse(localStorage.getItem('demon.liked')).sort() : []
    }
  },
  methods: {}
}
</script>
