// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Swal from 'sweetalert2'

import {
  Button,
  // Popup,
  // Field,
  // Picker,
  // DatetimePicker,
  Toast,
  // NumberKeyboard,
  // Cell,
  // CellGroup,
  // RadioGroup,
  // Radio,
  Dialog,
  // List,
  // PullRefresh,
  Grid,
  GridItem
} from 'vant'

Vue.use(Button)
// Vue.use(Popup)
// Vue.use(Field)
// Vue.use(Picker)
// Vue.use(DatetimePicker)
Vue.use(Toast)
// Vue.use(NumberKeyboard)
// Vue.use(Cell)
// Vue.use(CellGroup)
// Vue.use(RadioGroup)
// Vue.use(Radio)
Vue.use(Dialog)
// Vue.use(List)
// Vue.use(PullRefresh)
Vue.use(Grid).use(GridItem)
// Vue.use(Swal)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
