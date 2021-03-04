<template>
  <div class="minus">
    <v-btn @click="minus">-</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Minus"
})
export default class Minus extends Vue {
    minus () {
        this.$emit("minus")
    }
}
</script>
