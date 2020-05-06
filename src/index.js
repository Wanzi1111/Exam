import React from 'react';
import "@/static/common.scss";//sass样式组件
import Router from "./routes/index"//根组件
import app from "./App"
import createLoading from "dva-loading";
import {registerModules} from "./utils/utiles.js"
// 挂载中间件
app.use(createLoading())

//注册全局模块
registerModules(app);

app.router(({history})=>{//挂载根路由
    return <Router history={history}></Router>
})
app.start("#root")


