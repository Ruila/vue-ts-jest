<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
    <loading />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Loading from "./components/Loading.vue"; 

@Component({
  components: {
    Loading
  }
})
export default class App extends Vue {}
</script>
