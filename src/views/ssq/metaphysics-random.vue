<template>
  <div style="min-height:52px;">
    <van-panel :title="title" :desc="desc" style="text-align:left">
      <div style="min-height:52px;">
        <transition name="custom-classes-transition" enter-active-class="animated tada">
          <div class="ball-flex" v-show="numList.length > 0">
            <transition-group name="flip-list" tag="div">
              <span
                class="ball"
                v-for="(ballNum,index) in numList"
                :key="ballNum"
                :class="[index!=6 ? 'red-ball' : 'blue-ball']"
              >{{ballNum}}</span>
            </transition-group>
          </div>
        </transition>
      </div>
      <div slot="footer" style="text-align:right;">
        <van-button size="small" @click="returnList">{{ returnBtnTxt }}</van-button>
        <van-button
          size="small"
          type="info"
          @click="random"
          style="margin-left:10px;"
        >{{ randomBtnTxt }}</van-button>
      </div>
    </van-panel>
  </div>
</template>

<script>
export default {
  props: {
    numList: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    },
    returnBtnTxt: {
      type: String,
      default: ""
    },
    randomBtnTxt: {
      type: String,
      default: ""
    }
  },
  created() {
    console.log(this.title);
  },
  methods: {
    returnList() {
      this.$emit("returnList");
    },
    random() {
      this.$emit("random");
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
.slide-fade-enter-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.ball {
  text-align: center;
}
</style>