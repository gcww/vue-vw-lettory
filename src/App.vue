<template>
  <div id="app">
    <router-view/>
    <footer class="footer">
      <floor/>
    </footer>
  </div>
</template>
<script>
import floor from "./views/floor/floor.vue";
export default {
  components: {
    floor
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  position: fixed;
  bottom: 0;
}
body {
  background-color: #fafafa;
}
</style>
