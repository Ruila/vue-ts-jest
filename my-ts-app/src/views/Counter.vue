<template>
  <div class="counter">
    <v-card
      class="d-flex flex-column align-center justify-center mb-6"
      :color="'white lighten-4'"
      flat
      tile
    >
      <span>現在數值{{ msg }}：</span>
      <span>{{ state.num }}</span>
      <v-card
        class="d-flex  align-center justify-center mb-6"
        :color="'white lighten-4'"
        flat
        tile
      >
        <minus @minus="minus"></minus>
        <add @add="add"></add>
      </v-card>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Add from "../components/counter/add.vue";
import Minus from "../components/counter/minus.vue";

@Component({
  components: {
    Add,
    Minus
  }
})
export default class Counter extends Vue {
  @Prop() msg!: string | undefined;
  state = {
    num: 0
  };
  add() {
    this.$set(this.state, "num", this.state.num + 1);
  }

  minus() {
    this.$set(this.state, "num", this.state.num - 1);
  }
}
</script>

<style>
.counter {
  padding: 50px;
}
</style>
