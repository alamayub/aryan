<template>
  <v-footer class="white" padless>
    <v-row justify="center" no-gutters>
      <v-container>
        <v-row>
          <v-col cols="12" md="4" class="py-0 pt-1">
            <div class="d-flex justify-content-center align-center">
              <v-img :src="img" height="100" width="100"></v-img>  
              <div class="ml-2">
                <div class="title mb-2" style="line-height: 1.1;">Aryan Educational Consultancy</div>
                <p class="" style="line-height: 1.1;">The best Educational Consultancy in birgunj</p>  
              </div>    
            </div> 
            <div style="font-size: 16px;">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis sint harum repudiandae, deleniti, cum tempora quam inventore quasi illum eum iure excepturi rem explicabo ab voluptates repellat aspernatur ut.  
            </div> 
          </v-col> 
          <v-col cols="12" md="4" class="py-0">
            <div class="title">Contact Us</div>  
            <v-list class="pa-0">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="pink darken-3">mdi-phone</v-icon>
                </v-list-item-icon>
                <v-list-item-content>(650) 555-1234</v-list-item-content>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-icon color="pink darken-3">mdi-email</v-icon>
                </v-list-item-icon>
                <v-list-item-content>aliconnors@example.com</v-list-item-content>
              </v-list-item>

              <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="pink darken-3"> mdi-map-marker  </v-icon>
                  </v-list-item-icon>

                <v-list-item-content class="pa-0">
                  <v-list-item-title>1400 Main Street</v-list-item-title>
                  <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>  
          </v-col> 
          <v-col cols="12" md="4" class="py-0">
            <div class="mb-2 title">Connect With Us</div>  
            <div class="d-flex">
              <v-btn v-for="(social, s) in socials" :key="s" icon outlined class="mr-2" large>
                <v-icon>{{ social.icon }}</v-icon>  
              </v-btn>  
            </div>
          </v-col>  
        </v-row>  
      </v-container>  
      <!-- <v-btn v-for="link in links" :key="link" color="white" text rounded class="my-2">
        {{ link }}
      </v-btn> -->
      <v-container class="text-end">
        <strong>Copyright © {{ new Date().getFullYear() }}. Aryan Educational Consultancy</strong>  
      </v-container>
    </v-row>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      img: require('@/assets/aryan.jpeg'),  
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
      socials: [
        { name: 'Facebook', icon: 'mdi-facebook' },  
        { name: 'Instagram', icon: 'mdi-instagram' },
        { name: 'YouTube', icon: 'mdi-youtube-play' }
      ]
    }),
  }
</script>