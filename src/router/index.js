import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";
import Welcome from "../views/Welcome";
import Users from "../views/users/Users";
import Rights from "../views/power/Rights";
import Roles from "../views/power/Roles";
import Cate from "../views/goods/Cate";
import Params from "../views/goods/Params";
import List from "../views/goods/List";
import Add from "../views/goods/Add";
import Order from "../views/order/Order";
import Report from "../views/report/Report";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    redirect: "/welcome",
    children: [
      {
        path: "/welcome",
        component: Welcome,
      },
      {
        path: "/users",
        component: Users,
      },
      {
        path: "/rights",
        component: Rights,
      },
      {
        path: "/roles",
        component: Roles,
      },
      {
        path: "/categories",
        component: Cate,
      },
      {
        path: "/params",
        component: Params,
      },
      {
        path: "/goods",
        component: List,
      },
      {
        path: "/goods/add",
        component: Add,
      },
      {
        path: "/orders",
        component: Order,
      },
      {
        path: "/reports",
        component: Report,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});
// 路由守卫控制访问限权
router.beforeEach((to, from, next) => {
  if (to.path === "/login") {
    return next();
  }
  const token = sessionStorage.getItem("token");
  if (!token) {
    return next("/login");
  }
  next();
});
export default router;
