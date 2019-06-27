import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
// import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
// import 'ant-design-vue/lib/date-picker/style'
import {
  Button, Menu, Icon, Input, Card,
  Steps, List, Avatar, Tag, Form,
  Radio, Upload, Timeline, Spin, Divider,
  Tooltip, message, Switch
} from "ant-design-vue"

Vue.use(Button)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Card)
Vue.use(Steps)
Vue.use(List)
Vue.use(Avatar)
Vue.use(Tag)
Vue.use(Form)
Vue.use(Radio)
Vue.use(Upload)
Vue.use(Timeline)
Vue.use(Spin)
Vue.use(Divider)
Vue.use(Tooltip)
Vue.use(Switch)

Vue.prototype.$message = message;

// Vue.use(Antd)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
