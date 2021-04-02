import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
//element ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//
import './static/iconfont.css'
//这一行：
import * as echarts from 'echarts'
//和这一行：
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
new Vue({
  router,
  store,
  
  render: (h) => h(App),
}).$mount("#app");
