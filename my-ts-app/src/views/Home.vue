<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <!-- <loading /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; 
import Loading from "../components/Loading.vue"; 
@Component({
  components: {
    HelloWorld,
    Loading
  }
})
export default class Home extends Vue {}
</script>
