import Vue from 'vue'
import ToDoApp from './ToDoApp.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(ToDoApp),
  store: store
}).$mount('#todo-app')
