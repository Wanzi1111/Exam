import React from "react"
import Cotainer from "../pages/cotainer.js";
import Cookie from "js-cookie"
import Maincontainer from "@/pages/Maincontainer"//首页
import dynamic from 'dva/dynamic';
import { Redirect } from "dva/router"
import Maindata from "./main.children";
import app from "@/App"
const isLogin = () => {
  return Cookie.get("usertoken") && Cookie.get("usertoken").split(".").length === 3;
}
const isLoginComponent = (Com) => {
  if (isLogin()) {
    return <Com />
  }
  return <Redirect to="/login" ></Redirect>
}
const routes = [
  {
    component: Cotainer,
    routes: [
      {
        path: "/login",
        title:"登陆系统",
        component: dynamic({ component: () => import("@/pages/Login") }),
        app,
        models: () => [],
      },
      {
        path: "/main",
        render: (props) => isLoginComponent(() => <Maincontainer {...props} />),
        routes:[...Maindata]
      }, {
        path: "/",
        render: () => isLoginComponent(() => <Redirect to="/main" ></Redirect>)
      }, {
        path: "*",
        component: () => <div>页面找不到啦！</div>
      }
    ]
  }
]
export default routes