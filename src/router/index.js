import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
    path: "/",
    redirect: "/console"
  },
  {
    path: "/console",
    name: "Console",
    redirect: "/nodes",
    component: () => import("../views/Layout/index.vue"),
    children: [
      {
        path: "/nodes",
        name: "Nodes",
        component: () => import("../views/Console/nodes")
      },
      {
        path: "/recods",
        name: "Recodes",
        component: () => import("../views/Console/recods")
      },
      {
        path: "/deploy",
        name: "Deploy",
        component: () => import("../views/Console/deploy")
      }
    ]
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
