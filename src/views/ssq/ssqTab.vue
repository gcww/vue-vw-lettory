<template>
  <div>
    <van-tabs v-model="active" @disabled="onClickDisabled">
      <van-tab title="本期预测"></van-tab>
      <van-tab title="大盘走势"></van-tab>
      <van-tab title="运号分析" disabled></van-tab>
      <van-tab title="玄学选号"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    onClickDisabled(index) {
      if (index == 2) {
        this.$toast("非常抱歉：该功能由于中奖率太高，暂时下线调整！");
      }
    }
  },
  watch: {
    active: function(val) {
      this.$emit("getModel", val);
    }
  }
};
</script>

<style scoped>
</style>