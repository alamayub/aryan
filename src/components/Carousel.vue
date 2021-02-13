<template>
  <v-carousel hide-delimiters cycle :interval="2000">
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        ],
      }
    },
  }
</script>
