import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button, Cell, CellGroup, Tabbar, TabbarItem, Tab,
  Tabs, Panel, Row, Col, NoticeBar, List, Icon, Toast, Field, DatetimePicker, Popup, NumberKeyboard, RadioGroup, Radio
} from 'vant';

Vue.config.productionTip = false;
Vue.use(Button).use(Cell).use(CellGroup).use(Panel).use(NoticeBar).use(List).use(Icon).use(Toast).use(Field).use(DatetimePicker).use(Popup).use(NumberKeyboard).use(RadioGroup).use(Radio);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Tab).use(Tabs);
Vue.use(Row).use(Col);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
