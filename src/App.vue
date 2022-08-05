
<script>
import SampleCard from "./assets/exampleCard.json";

export default {
  name: "App",
  data: () => ({
    data: {
      first_name: null,
      last_name: null,
    },
    card: SampleCard,
    config: {},
  }),

  methods: {
    onItemClick(event, item) {
      console.log(item);
    },
  },
};
</script>

<template>
  <div class="demo">
    <adaptive-cards
      :card="card"
      :data="data"
      :use-templating="true"
      :host-config="config"
      @onActionClicked="onItemClick"
    />
  </div>
</template>

<style>
.demo {
  padding: 0 50px;
}
</style>