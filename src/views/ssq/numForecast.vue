<template>
  <div class="panel panel-p">
    <van-notice-bar :text="'本期一等奖信息为：' + ballInfo.content + '（点击查看详细中奖信息）'" left-icon="volume-o"/>
    <van-panel :title="title" :desc="ballInfo.date" v-if="redBallList.length > 0 && blue">
      <div>
        <van-row type="flex" justify="space-around">
          <van-col span="3" v-for="(ballNum,index) in redBallList" :key="index">
            <span class="ball red-ball">{{ ballNum }}</span>
          </van-col>
          <van-col span="3">
            <span class="ball blue-ball">{{ blue }}</span>
          </van-col>
        </van-row>
        <!-- <van-row >
          <van-col span="12" v-for="bonus in bonusList" :key="bonus.type">
            <span >{{bonus.type}}等奖</span>
            <span >{{bonus.typemoney}}</span>
            <span > {{bonus.typenum}}人</span>
          </van-col>
        </van-row>-->
      </div>
    </van-panel>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      redBallList: [],
      blue: null,
      ballInfo: {},
      bonusList: []
    };
  },
  created() {
    if (this.$store.state.dataList && this.$store.state.dataList.length > 0) {
      this.initData();
    } else {
      axios({
        url: "http://47.94.255.23:3000/ssq/findListByRow?row=50",
        method: "get"
      })
        .then(response => {
          console.log(response);
          if (response.status === 200 && response.data) {
            this.save(response.data);
            this.initData(this.$store.state.dataList[0]);
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  methods: {
    initData(datanow = this.$store.state.dataList[0]) {
      this.ballInfo = datanow;
      this.redBallList = datanow.red.split(",");
      this.blue = Number(datanow.blue);
      this.bonusList = JSON.parse(datanow.prizegrades);
      this.bonusList.pop();
    },
    ...mapActions(["save"])
  },
  computed: {
    title() {
      return this.ballInfo.code + "期中奖号码";
    }
  }
};
</script>

<style>
.panel .van-cell__title {
  text-align: left;
}
.panel-p {
  padding: 15px 10px;
}
.ball {
  margin: 10px 0;
  display: inline-block;
  line-height: 32px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
}
.red-ball {
  background-color: #ff4444;
}
.blue-ball {
  background-color: #549fe0;
}
.numForecast-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
}
</style>