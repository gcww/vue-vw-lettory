<template>
  <div style="margin-top:10px;">
    <metaphysics-random
      :numList="numList"
      @returnList="returnList"
      @random="random2"
      title="随机选码"
      desc="彻底解决你的选择困难症！"
      returnBtnTxt="返回"
      randomBtnTxt="随机"
    ></metaphysics-random>
  </div>
</template>

<script>
import metaphysicsRandom from "./metaphysics-random";
export default {
  components: {
    metaphysicsRandom
  },
  data() {
    return {
      numList: [],
      redBall: "",
      blueBall: "",
      btnStatus: true
    };
  },
  methods: {
    returnList() {
      this.$router.push({ name: "randomList" });
    },
    add() {
      this.numList = [10, 11, 17, 23, 32, 33, 14];
      setTimeout(() => {
        this.numList = [23, 10, 17, 33, 11, 32, 14];
      }, 1200);
    },
    random2() {
      if (!this.btnStatus) {
        return;
      }
      this.btnStatus = false;
      this.numList = [];

      Promise.resolve().then(() => {
        let redList = [];
        let blueBallNum = null;
        while (redList.length <= 5) {
          let redallNum = Math.round(Math.random() * 100);
          if (redallNum > 0 && redallNum < 34) {
            if (!redList.includes(redallNum)) {
              redList.push(redallNum);
            }
          }
        }

        while (!blueBallNum) {
          let randomNum = Math.round(Math.random() * 100);
          if (randomNum > 0 && randomNum < 10) {
            blueBallNum = "0" + randomNum;
          } else if (randomNum < 17 && randomNum > 10) {
            blueBallNum = String(randomNum);
          }
        }

        redList.map(x => {
          if (x < 10) {
            x = String("0" + x);
          } else {
            x = String(x);
          }
        });

        this.numList = [...redList, blueBallNum];
        setTimeout(() => {
          this.numList = [...redList.sort(compare), blueBallNum];
          setTimeout(() => {
            this.btnStatus = true;
          }, 1000);
        }, 1200);
      });

      let compare = function(x, y) {
        //比较函数
        if (x < y) {
          return -1;
        } else if (x > y) {
          return 1;
        } else {
          return 0;
        }
      };
    }
  }
};
</script>

<style scoped>
@import url("../../assets/css/animate.css");
.flip-list-move {
  transition: transform 1s;
}
.ball-flex > div {
  display: flex;
  justify-content: space-around;
}
</style>