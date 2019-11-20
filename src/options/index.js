import Vue from "vue";
import AppComponent from "./App/App.vue";
import ElementUI from 'element-ui';
import VueParticles from 'vue-particles';
import '../static/css/base.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueParticles)
Vue.component("app-component", AppComponent);
Vue.use(ElementUI);
new Vue({
  el: "#app",
  render: createElement => {
    return createElement(AppComponent);
  }
});
