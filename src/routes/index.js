import React from "react"
import {Router} from "dva/router"
// import Routerview from "./router"//路由显示
import routerConfig from "./router.config";//路由表配置
import {renderRoutes} from "react-router-config"//路由插件
export default({history})=>{
    return <Router history={history} > 
       {
           renderRoutes(routerConfig)        
        }
    </Router>
}
