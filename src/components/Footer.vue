<template>
  <v-footer padless style="background-color: rgb(173,20,87); height: auto; width: 100%;" class="white--text">
    <v-container class="py-10">
      <v-row>
        <v-col cols="12" sm="4">
          <div class="d-inline-flex">
            <v-img :src="require('@/assets/aryan.jpeg')" height="90" width="90"></v-img>
            <div class="ml-2">
              <div style="font-size: 20px; line-height: 1.2;" class="mb-2">Aryan Educational Consultancy</div>
              <div style="font-style: italic; font-size: 14px; font-weight: 400;">Best in Birgunj</div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="title mb-2">Contact</div>
          <div v-for="(contact, i) in contacts" :key="i" class="mb-2">
            <v-icon color="white">{{ contact.icon }}</v-icon>
            <span class="ml-2">{{ contact.text }}</span>
          </div>
        </v-col>
        <v-col cols="12" sm="4">
          <div class="title mb-1">Connect With Us</div>
          <div v-for="(social, s) in socials" :key="s" class="mb-1">
            <v-btn dark tile text outlined width="160" class="d-flex justify-start">
              <v-icon left>{{ social.icon }}</v-icon>
              <span class="font-weight-light text-capitalize">{{ social.name }}</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>
<!--style="background-color: rgba(173,20,87, .75); height: 100%; width: 100%;"-->
<script>
  export default {
    data: () => ({
      img: require('@/assets/background-pic.jpeg'),  
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
        { name: 'YouTube', icon: 'mdi-youtube' }
      ],
      contacts: [
        { icon: 'mdi-phone', text: '+9779876543210' },
        { icon: 'mdi-map-marker', text: 'Near Om Asharm Birgunj, Nepal' }
      ]
    }),
  }
</script>


<!--
<v-list dense class="pa-0" style="">
              <v-list-item v-for="(contact, i) in contacts" :key="i" class="pa-0" style="color: transparent;">
                  <v-list-item-icon class="mr-2">
                    <v-icon v-text="contact.icon"></v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title v-text="contact.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
            </v-list>-->


<!--
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
      <v-container class="text-end">
        <strong>Copyright © {{ new Date().getFullYear() }}. Aryan Educational Consultancy</strong>  
      </v-container>
    </v-row>
-->
