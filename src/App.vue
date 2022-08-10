
<script>
import SampleCard from "./assets/adaptivecard.json";

import AdaptiveCards from "./components/AdaptiveCards.vue";

export default {
  components: { AdaptiveCards },

  name: "App",
  data: () => ({
    data: {
      first_name: "Flash",
      last_name: "Man",
    },
    card: SampleCard,
    config: {},
  }),

  methods: {
    onItemClick(event, item) {
      this.data = item;
    },
  },
};
</script>

<template>
  <div>
    <div class="demo">
      <adaptive-cards
        :card="card"
        :data="data"
        :use-templating="true"
        :host-config="config"
        @onActionClicked="onItemClick"
      />

      <hr />

      <div class="text">
        {{ data }}
      </div>
    </div>
  </div>
</template>

<style>
.demo {
  margin: 30px auto;
  max-width: 400px;
  padding: 20px;
  border: 1px solid rgb(165, 165, 165);
  border-radius: 5px;
}

.text {
  font-family: sans-serif;
  white-space: pre;
}
</style>