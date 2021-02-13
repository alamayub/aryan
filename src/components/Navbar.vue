<template>
  <div>
    <v-app-bar dark>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>Aryan Educational Hub</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined v-for="(list, l) in lists" :key="l" class="mr-2 pink darken-4" :to="{ name: list.name }"> {{ list.name }} </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { name: 'Home', route: '/' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
        { name: 'Media', route: '/media' },
        { name: 'Contact', route: '/contact' }  
      ]  
    }
  }  
}
</script>

<style>

</style>