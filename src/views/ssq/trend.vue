<template>
  <div class="panel p-t-20">
    <van-panel title="蓝号走势图" desc="精准分析过去10期蓝号走势，助您精准打击！">
      <div>
        <Chart style="width: 100%;height:250px;" :option="blueOption"/>
      </div>
    </van-panel>

    <van-panel title="红号散点图" desc="罗列过去10期红号分布，让您轻松掌握大局！" style="margin-top:15px;">
      <div>
        <Chart style="height:550px;" :option="redOption"/>
      </div>
    </van-panel>
    <div style="margin-top:20px;height:20px;"></div>
  </div>
</template>

<script>
import Chart from "../../components/chart";
export default {
  components: {
    Chart
  },
  async mounted() {
    await this.$nextTick();
    this.blueOption = {
      grid: {
        top: 15,
        bottom: 25,
        right: 20
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: this.chartX
      },
      yAxis: {
        type: "value",
        min: 1,
        max: 16,
        interval: 1,
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
      },
      series: [
        {
          data: this.bluelist,
          type: "line",
          color: "#32c5e9",
          areaStyle: {}
        }
      ]
    };
    this.redOption = {
      grid: {
        top: 15,
        bottom: 25,
        right: 20
      },
      xAxis: {
        data: this.chartX,
        boundaryGap: false,
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
      },
      yAxis: {
        min: 0,
        max: 33,
        interval: 1,
        splitLine: {
          lineStyle: {
            type: "dashed"
          }
        }
      },
      series: [
        {
          symbolSize: 10,
          data: this.redList,
          type: "scatter"
        }
      ]
    };
    this.initMain();
    this.initRedScatter();
  },
  data() {
    return {
      bluelist: [],
      chartX: [],
      redList: [],
      blueOption: {},
      redOption: {}
    };
  },
  methods: {
    initMain() {
      for (const iterator of this.$store.state.dataList
        .slice(0, 10)
        .reverse()) {
        this.bluelist.push(Number(iterator.blue));
        this.chartX.push(iterator.code.split("2019")[1]);
      }
    },
    initRedScatter() {
      this.$store.state.dataList
        .slice(0, 10)
        .reverse()
        .forEach((iterator, index) => {
          let redBallNumList = iterator.red.split(",");
          for (const redBallNum of redBallNumList) {
            this.redList.push([index, Number(redBallNum)]);
          }
        });
    }
  }
};
</script>

<style scoped>
.p-t-20 {
  padding-top: 20px;
}
.panel.p-t-20 {
  overflow: auto;
  height: calc(100vh - 94px);
}
#redScatter {
  width: 100%;
  height: 570px;
}
</style>