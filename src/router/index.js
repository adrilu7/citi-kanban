import Vue from 'vue'
import Router from 'vue-router'
import Backlog from '@/components/Backlog'
import KanbanBoard from '@/components/KanbanBoard'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/backlog',
      component: Backlog
    },
    {
      path: '/board',
      component: KanbanBoard
    },
    {
      path: '*',
      redirect: '/backlog'
    }
  ]
})
