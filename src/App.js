import React from "react";
import dva from "dva"
import {createBrowserHistory} from "history"//history插件

export const history=createBrowserHistory()
const app=dva({
    history
})
export default app