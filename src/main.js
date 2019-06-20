import Vue from 'vue'
import App from './App.vue'
import router from "./router"
// import store from "./store"
import { Button, Menu, Icon, Input, Card, Steps } from "ant-design-vue"

Vue.use(Button)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Card)
Vue.use(Steps)

// Vue.component(Button.name, Button)
// Vue.component(Menu.name, Menu)
// Vue.component(Menu.Item.name, Menu.Item)
// Vue.component(Menu.SubMenu.name, Menu.SubMenu)
// Vue.component(Menu.Divider.name, Menu.Divider)
// Vue.component(Menu.ItemGroup.name, Menu.ItemGroup)
// Vue.component(Icon.name, Icon)

Vue.config.productionTip = false

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
