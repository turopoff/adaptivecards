
<script>
import * as AdaptiveCards from "adaptivecards";
import * as ACData from "adaptivecards-templating";
const markdown = require("markdown-it")();

export default {
  name: "AdaptiveCard",
  props: {
    card: {
      type: [String, Object],
      required: true,
      default: null,
    },
    data: {
      type: [String, Object],
      required: false,
      default: null,
    },
    hostConfig: {
      type: [String, Object],
      required: false,
      default: "",
    },
  },
  data() {
    return {
      cardHolder: null,
      cardRemoteTemplate: null,
    };
  },
  computed: {
    cardParsed() {
      if (this.cardRemoteTemplate != null) return this.cardRemoteTemplate;
      return this.card;
    },
    dataParsed() {
      return this.data;
    },
    hostConfigParsed() {
      if (this.hostConfig !== "" && this.hostConfig !== undefined) {
        return new AdaptiveCards.HostConfig(this.hostConfig);
      } else {
        return new AdaptiveCards.HostConfig({});
      }
    },
  },
  watch: {
    data: {
      handler() {
        this.renderCard();
      },
      deep: true,
    },
    card: {
      handler() {
        this.renderCard();
      },
      deep: true,
    },
    hostConfig: {
      handler() {
        this.renderCard();
      },
      deep: true,
    },
  },
  mounted() {
    this.renderCard();
  },
  methods: {
    renderCard() {
      AdaptiveCards.AdaptiveCard.onProcessMarkdown = (text, result) => {
        result.outputHtml = markdown.render(text);
        result.didProcess = true;
      };

      const ac = new AdaptiveCards.AdaptiveCard();
      ac.hostConfig = this.hostConfigParsed;

      ac.onExecuteAction = (action) => {
        this.$emit("onActionClicked", action, action.data);
      };

      let template = new ACData.Template(this.cardParsed);
      var context = {};
      context.$root = this.dataParsed;

      const cardToRender = template.expand(context);

      ac.onInputValueChanged = (e) => {
        if (e.id == "first_name") {
          if (e.value == 1) {
            const ee = ac.getElementById("last_name");
            ee.isVisible = true;
          }
        }
      };

      ac.parse(cardToRender);

      this.cardElement = ac.render();
      this.$el.innerHTML = "";
      this.$el.appendChild(this.cardElement);
    },
  },
};
</script>


<template>
  <div />
</template>
