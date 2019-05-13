<template>
  <div ref="chartDom"></div>
</template>

<script>
import echarts from "echarts";
import { addListener, removeListener } from "resize-detector";
import { setTimeout } from "timers";
import debounce from "lodash/debounce";
export default {
  props: {
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    this.resize = debounce(this.resize, 300);
  },
  watch: {
    option: {
      handler(val) {
        this.myChart.setOption(val);
      },
      deep: true
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(this.$refs.chartDom);
    addListener(this.$refs.chartDom, this.resize);
    // 使用刚指定的配置项和数据显示图表。
    this.myChart.setOption(this.option);
  },
  beforeDestroy() {
    removeListener(this.$refs.chartDom, this.resize);
    this.chart = null;
  },
  data() {
    return {
      myChart: null,
      timeout: null
    };
  },
  methods: {
    resize() {
      console.log("resize");
      this.myChart.resize();
    },
    debounce(fn, wait) {
      return function() {
        console.log("debounce", this.timeout);
        if (this.timeout !== null) {
          clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(fn, wait);
      };
    }
  }
};
</script>