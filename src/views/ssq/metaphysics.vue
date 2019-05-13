<template>
  <div class="panel-p">
    <!-- <br>
    <div class="hello example" style="height:200px"></div>
    <br>
    <div class="hello" style="height:200px;border:1px solid black"></div>-->
    <van-panel title="生死有命" desc="日有纷飞梦，神魂预吉凶" style="text-align:left;">
      <span class="stamp is-draft">天师认证</span>

      <van-field
        name="uname"
        v-model="uname"
        maxlength="4"
        placeholder="请输入您的姓名"
        :error="nameErrMsg"
        required
      />
      <van-field
        name="ulovename"
        v-model="ulovename"
        maxlength="4"
        :error="loveNameErrMsg"
        placeholder="请输入您恋人的名字"
        required
      />
      <van-field
        name="uage"
        :value="birthTXT"
        :error="ageErrMsg"
        placeholder="请输入您的生日"
        @click="show = true"
        readonly
        required
      />
      <van-field
        name="unumber"
        :value="unumber"
        :error="numberErrMsg"
        placeholder="请输入您的幸运数字[0-33]"
        @click="keyboardShow = true"
        required
        readonly
      />
      <van-popup v-model="show" position="bottom" :overlay="true">
        <van-datetime-picker
          v-model="currentDate"
          type="date"
          :min-date="minDate"
          :max-date="today"
          @confirm="comfirm"
          @cancel="cancel"
        />
      </van-popup>

      <van-number-keyboard
        :show="keyboardShow"
        theme="custom"
        close-button-text="完成"
        @blur="keyboardShow = false"
        @input="onInput"
        @delete="onDelete"
      />
    </van-panel>

    <section class="random-number">
      <metaphysics-random
        :numList="numList"
        @returnList="returnList"
        @random="getSsq"
        title="富贵在天"
        desc="庄周虚幻蝶，吕望兆飞熊"
        returnBtnTxt="重置"
        randomBtnTxt="直断"
      ></metaphysics-random>
    </section>
  </div>
</template>

<script>
import metaphysicsRandom from "./metaphysics-random";
export default {
  data() {
    return {
      uname: "",
      unumber: "",
      ulovename: "",
      minDate: new Date(1920, 0, 1),
      today: new Date(),
      currentDate: new Date(2000, 0, 1),
      picker: null,
      show: false,
      birthDate: null,
      birthTXT: null,
      keyboardShow: false,
      dirty: false,
      numList: [],
      redBall: "",
      blueBall: "",
      btnStatus: true
    };
  },
  components: {
    metaphysicsRandom
  },
  methods: {
    getSsq() {
      this.dirty = true;
      if (
        !this.nameErrMsg &&
        !this.loveNameErrMsg &&
        !this.ageErrMsg &&
        !this.numberErrMsg
      ) {
        this.random2();
        console.log("ok");
      }
    },
    setNumber() {
      //   let nowMonth = new Date().getMonth() + 1;
    },
    comfirm(value) {
      this.birthDate = new Date(value);
      this.birthTXT = `${new Date(value).getFullYear()}年${new Date(
        value
      ).getMonth() + 1}月${new Date(value).getDate()}日`;
      this.show = false;
    },
    cancel() {
      this.currentDate = this.birthDate;
      this.show = false;
    },
    onInput(value) {
      if (this.unumber === "" || this.unumber.length < 2) {
        let newValue = String(this.unumber) + String(value);
        if (Number(newValue) > 0 && Number(newValue) < 34) {
          this.unumber = newValue;
        }
      }
    },
    onDelete() {
      if (this.unumber && this.unumber.length > 0) {
        this.unumber = this.unumber.slice(0, this.unumber.length - 1);
      }
    },

    returnList() {
      this.dirty = false;
      this.uname = "";
      this.birthTXT = "";
      this.unumber = "";
      this.ulovename = "";
      this.numList = [];
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

        let zySet = new Set();
        //1-33
        zySet.add(Number(this.unumber));
        //1-12
        zySet.add(new Date(this.birthDate).getMonth() + 1);
        //1-33
        zySet.add(
          new Date(this.birthDate).getFullYear() %
            (this.uname.length * this.ulovename.length * 2 + 1)
        );
        //1-31
        zySet.add(new Date(this.birthDate).getDate());
        redList = [...zySet];

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
  },
  computed: {
    nameErrMsg() {
      return this.uname || !this.dirty ? false : true;
    },
    loveNameErrMsg() {
      return this.ulovename || !this.dirty ? false : true;
    },
    ageErrMsg() {
      return this.birthTXT || !this.dirty ? false : true;
    },
    numberErrMsg() {
      return this.unumber || !this.dirty ? false : true;
    }
  }
};
</script>

<style lang="scss" scoped>
.panel-p {
  padding: 15px 10px;
}
@svg 1px-border {
  width: 4px;
  height: 4px;
  @rect {
    fill: transparent;
    width: 100%; // 宽度为4px * 100%
    height: 100%; // 高度为4px * 100%
    stroke-width: 25%; // 边框宽度 4px * 25%(即1px)
    stroke: var(--color, black); // 颜色
  }
}

.example {
  border: 1px solid transparent;
  border-image: svg(1px-border param(--color #000)) 1 stretch;
}

.stamp {
  font-size: 20px;
  font-weight: 700;
  border: 5px solid #d23;
  display: inline-block;
  text-transform: uppercase;
  font-family: "Courier";
  -webkit-mask-image: url("../../assets/img/grunge.png");
  -webkit-mask-size: 80vw 60vh;
  mix-blend-mode: multiply;
}
.is-draft {
  color: #d23;
  border: 8px double #d23;
  font-family: "Open sans", Helvetica, Arial, sans-serif;
  border-radius: 0;
  padding: 2px 8px;
  transform: rotate(-12deg);
  position: absolute;
  top: 0px;
  right: 20px;
}

.random-number {
  margin-top: 15px;
}
</style>