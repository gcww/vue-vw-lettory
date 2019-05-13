<template>
  <van-panel title="本期预测" desc="选择你心仪的号码" style="margin-top:10px;">
    <div>
      <van-list>
        <van-cell @click="toOrdinaryRandom">
          <van-row type="flex">
            <van-col span="22">
              <div class="van-cell__title">
                <span>随机抽选号码</span>
                <div class="van-cell__label">彻底解决你的选择困难症！</div>
              </div>
            </van-col>
            <van-col span="2" class="numForecast-arrow">
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-cell>
        <van-cell>
          <van-row type="flex">
            <van-col span="22">
              <div class="van-cell__title">
                <span>精确随机大法</span>
                <div class="van-cell__label">排除不可能，让您离中奖更进一步！</div>
              </div>
            </van-col>
            <van-col span="2" class="numForecast-arrow">
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-cell>
        <van-cell @click="toBigData">
          <van-row type="flex">
            <van-col span="22">
              <div class="van-cell__title">
                <span>大数据分析摇号</span>
                <div class="van-cell__label">用科学的力量让您飞黄腾达！</div>
              </div>
            </van-col>
            <van-col span="2" class="numForecast-arrow">
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-cell>
        <van-cell @click="toZhouyi">
          <van-row type="flex">
            <van-col span="22">
              <div class="van-cell__title">
                <span>周易占卜摇号</span>
                <div class="van-cell__label">乾、坎、艮、震、巽、离、坤、兑</div>
              </div>
            </van-col>
            <van-col span="2" class="numForecast-arrow">
              <van-icon name="arrow"/>
            </van-col>
          </van-row>
        </van-cell>
      </van-list>
    </div>
  </van-panel>
</template>

<script>
export default {
  methods: {
    toOrdinaryRandom() {
      this.$router.push({ name: "normalRandom" });
    },
    toBigData() {
      this.$router.push({ name: "bigData" });
    },
    toZhouyi() {}
  }
};
</script>

<style scoped>
</style>