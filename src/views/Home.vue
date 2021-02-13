<template>
  <div class="home">
    <Carousel />
    home
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components: {
    Carousel,
  },
  data: () => ({
    expand2: false,
  }),
}
</script>
