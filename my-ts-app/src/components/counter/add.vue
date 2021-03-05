<template>
  <div class="add">
    <v-btn @click="add">+</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Add"
})
export default class Add extends Vue {
  add() {
    this.$emit("add");
  }
}
</script>
