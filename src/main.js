import Vue from 'vue'
import App from './App'
import VueRouter from 'Vue-router'
import VueResource from 'Vue-resource'
import index from './View/index'
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()
router.map({
  '/': {
    component: index
  }
})

router.redirect({
  '*': '/hello'
})
router.start(App, 'app')
