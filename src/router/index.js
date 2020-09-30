import Vue from 'vue'
import Router from 'vue-router'
import viewPage from '@/components/viewPage'
import editPage from '@/components/editPage'

Vue.use(Router)

export default new Router({
  routes: [
    // 视觉页
    {
      path: '/viewPage',
      name: 'viewPage',
      component: viewPage
    },
    // 编辑页
    {
      path: '/editPage',
      name: 'editPage',
      component: editPage
    }
  ]
})
