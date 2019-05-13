<template>
  <div style="margin-top:10px;">
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell title="选择近50期出现频率最高的7位数" clickable @click="radio = '1'">
          <van-radio name="1"/>
        </van-cell>
        <van-cell title="选择近50期出现频率最低的7位数" clickable @click="radio = '2'">
          <van-radio name="2"/>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <br>
    <metaphysics-random
      :numList="numList"
      @returnList="returnList"
      @random="random2"
      title="大数据分析选码"
      desc="用科学的力量让您飞黄腾达！"
      returnBtnTxt="返回"
      randomBtnTxt="抽选"
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
      btnStatus: true,
      radio: "1",
      allList: [],
      blueList: []
    };
  },
  created() {
    this.getAllList();
  },
  methods: {
    returnList() {
      this.$router.push({ name: "randomList" });
    },
    random2() {
      let blSort = this.blueList.sort(function(a, b) {
        return a.length - b.length;
      });
      let redList = [];
      let blue = null;
      if (this.radio === "1") {
        //冒泡排序 找出频率最高6个
        for (let i = this.allList.length - 1; i > 0; i--) {
          for (let j = 0; j < i; j++) {
            if (this.allList[j].length > this.allList[j + 1].length) {
              [this.allList[j], this.allList[j + 1]] = [
                this.allList[j + 1],
                this.allList[j]
              ];
            }
          }
          if (this.allList.length - i == 6) {
            let redArrayList = this.allList.slice(i);
            for (const iterator of redArrayList) {
              redList.push(iterator[0]);
            }
            blue = blSort[blSort.length - 1][0];
            break;
          }
        }
      } else if (this.radio === "2") {
        //选择排序 找出频率最低6个
        for (let i = 0; i < 33; i++) {
          let min = i;
          for (let j = i + 1; j < 33; j++) {
            if (this.allList[j].length < this.allList[j - 1].length) {
              min = j;
            }
          }
          [this.allList[i], this.allList[min]] = [
            this.allList[min],
            this.allList[i]
          ];
          if (i === 6) {
            let redArrayList = this.allList.slice(0, i);
            for (const iterator of redArrayList) {
              redList.push(iterator[0]);
            }
            blue = blSort[0][0];
            break;
          }
        }
      }

      if (!this.btnStatus) {
        return;
      }
      this.btnStatus = false;
      this.numList = [];

      Promise.resolve().then(() => {
        this.numList = [...redList, blue];
        setTimeout(() => {
          this.numList = [...redList.sort(compare), blue];
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
    },
    getAllList() {
      let dataList = this.$store.state.dataList;
      for (let index = 0; index < 33; index++) {
        this.allList.push([index + 1]);
        if (index < 16) {
          this.blueList.push([index + 1]);
        }
      }

      for (const data of dataList) {
        let redList = data.red.split(/\,/g);
        let bule = data.blue.replace(/0(\d)/, "$1");
        this.blueList[Number(bule) - 1].push(Number(data.blue));
        for (const iterator of redList) {
          this.allList[Number(iterator) - 1].push(Number(iterator));
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div.van-cell__value {
  flex: none;
}
</style>