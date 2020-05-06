import React from 'react'
import classNames from "classnames"
import {render} from "react-dom"
import style from "./style.module.scss"
export function Loading(){
        return <div className={classNames(style.loading_big)}>
        <div className={classNames(style.loading_box)}>
        
        </div>
        </div>
}
function showLoading(){
    const smalloading=document.createElement("div")
    document.body.appendChild(smalloading)
    render(<Loading/>,smalloading)
    return ()=>{
        document.body.removeChild(smalloading)
    }
}
export default showLoading
