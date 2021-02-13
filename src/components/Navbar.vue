<template>
  <div>
    <v-app-bar dark color="white">
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" style="color: #AD1457;"></v-app-bar-nav-icon>
      <v-toolbar-title style="color: black;">Aryan Educational Hub</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined v-for="(list, l) in lists" :key="l" class="mr-2 pink darken-4 d-none d-md-flex" :to="{ name: list.name }"> {{ list.name }} </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app height="100vh" disable-resize-watcher> <!--dark color="rgba(0, 0, 0, 0.1)"-->
      <v-list nav dense>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in lists" :key="i" :to="{ name: item.name }">
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      selectedItem: 0,
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