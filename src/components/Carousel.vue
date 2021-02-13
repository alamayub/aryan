<template>
  <v-carousel hide-delimiters cycle :interval="2000">
    <template v-slot:prev="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-menu-left</v-icon>
      </v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" icon>
        <v-icon>mdi-menu-right</v-icon>
      </v-btn>
    </template>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item"></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          require('@/assets/carousel/img1.jpeg'),
          require('@/assets/carousel/img2.jpeg'),
          require('@/assets/carousel/img3.jpeg')
        ],
      }
    },
  }
</script>
