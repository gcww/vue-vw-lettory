<template>
  <div>
    <ssq-tab v-on:getModel="getModel"></ssq-tab>
    <div>
      <component v-bind:is="currentTabComponent"></component>
    </div>
  </div>
</template>

<script>
import ssqTab from "./ssqTab";
import numForecast from "./numForecast";
import metaphysics from "./metaphysics";
const trend = () => import(/* webpackChunkName: "trend" */ "./trend.vue");
export default {
  components: {
    ssqTab,
    numForecast,
    trend,
    metaphysics
  },
  data() {
    return {
      currentTabComponent: numForecast
    };
  },
  methods: {
    getModel(event) {
      switch (event) {
        case 0:
          this.currentTabComponent = numForecast;
          break;
        case 1:
          this.currentTabComponent = trend;
          break;
        case 3:
          this.currentTabComponent = metaphysics;
          break;

        default:
          this.currentTabComponent = numForecast;
          break;
      }
      console.log(event);
    }
  }
};
</script>

<style scoped>
</style>