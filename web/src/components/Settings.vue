<template>
<div>
  <p>liked shows: {{likedShows}}</p>
  <p>disliked shows: {{dislikedShows}}</p>
</div>
</template>

<script>
export default {
  data() {
    return {
      dislikedShows: JSON.parse(localStorage.getItem('demon.disliked')) || [],
      likedShows: JSON.parse(localStorage.getItem('demon.liked')) || []
    }
  }
}
</script>
