<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">双色球</van-tabbar-item>
      <van-tabbar-item icon="search" >大乐透</van-tabbar-item>
      <van-tabbar-item icon="friends-o" >发现</van-tabbar-item>
      <van-tabbar-item icon="setting-o" >设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style scoped>
</style>