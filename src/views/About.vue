<template>
  <div class="about">
    <div class="text-center pa-2 font-weight-bold" style="font-size: 2.5rem;">OUR TEAM</div>
    <v-carousel v-model="model" hide-delimiters :height="`${height}vh`" show-arrows-on-hover cycle :interval="2000" :style="{ backgroundImage: `url(${image3})` }">
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
      <v-carousel-item v-for="(color, i) in colors" :key="color">
        <v-sheet style="background-color: rgba(0, 0, 0, .5);" class="info-img-col" height="100%" tile>
          <v-container style="height: 100%;">
            <v-row class="fill-height" style="margin-top: 0px;">
              <v-col cols="4" class="info-img-col" style="box-shadow: 0 0 40px 0 rgba(0, 0, 0, .5);" :style="{ backgroundImage: `url(${datas[i].img})` }"></v-col>
              <v-col cols="8" style="height: 100%;" class="d-flex flex-column justify-center">
                <div style="font-size: 1.75rem;">{{ datas[i].name }}</div>
                <div class="title mb-2">{{ datas[i].position }}</div>
                <div style="font-size: 15px; font-weight: 400; font-style: italic;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perferendis ipsam, quas harum mollitia adipisci architecto quia dolore similique suscipit voluptatum provident corporis doloribus maxime, unde animi ex recusandae obcaecati.</div>
                <div class="social mt-2">
                  <v-btn v-for="a in 4" :key="a" icon outlined dark class="mr-2">
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <div class="info-img-col mt-10" style="height: 40vh; width: 100%;" :style="{ backgroundImage: `url(${image3})` }">
      <div style="background-color: rgba(173,20,87, .75); height: 100%; width: 100%;"></div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      model: 0,
      image3: require('@/assets/background-pic.jpeg'),
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      datas: [
        { name: 'Ayub Alam', position: 'Web Developer', img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        { name: 'Umesh Pandit', position: 'Managing Director Developer', img: require('@/assets/img1.jpg') },
        { name: 'Md Ali', position: 'Administrative Director', img: require('@/assets/img2.jpg') },
        { name: 'Ayub Alam', position: 'Web Developer', img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' },
        { name: 'Ayub Alam', position: 'Web Developer', img: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }
      ],
    }),
    computed: {
      height() {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 30
          case 'sm': return 35
          case 'md': return 40
          default: return 45
        }  
      },
    },
  }
</script>

<style scoped>
.info-img-col {
  height: 100%;
  background-position: center; 
  background-size: cover; 
  background-repeat: none;
}
</style>
