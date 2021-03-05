<template>
  <div class="loading text-center" :class="$store.state.loading? 'load_show': 'load_hide'">
    <v-progress-circular
      :size="70"
      :width="7"
      color="purple"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class Loading extends Vue {
    mounted() {
        console.log(this.$store.state.loading)
    }
}
</script>
<style>
.loading {
  position: fixed;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  z-index: 2222;
}
.load_show {
    display: flex;
}

.load_hide {
    display: none;
}
</style>