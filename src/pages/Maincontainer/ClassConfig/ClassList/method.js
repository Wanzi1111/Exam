import React, { Component } from 'react'
import {connect} from "dva"
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;
function showConfirm(onOk,onCancel=function(){}){
    confirm({
      title: '确定要删除吗?',
      icon: <ExclamationCircleOutlined />,
      content: '不能后悔哟！',
      onOk:onOk,
      onCancel:onCancel
    });
  }
@connect(
    state => {
        return state
    }
)
class Methodbtn extends Component {
    // 删除班级接口
    delHandler=()=>{   
        const {row:{grade_id}}=this.props
        showConfirm(()=>{
            this.props.dispatch({
                type:"classbox/DELETE_GRADE",
                payload:{
                  grade_id
                } 
              })   
        })  
    }
    // 修改班级
    editclass=()=>{
        const {row:{grade_name,subject_text,room_text,grade_id}}=this.props
        this.props.dispatch({
          type:"classbox/OPEN_DEAILOG",
          payload:{
            visible: true,
            title:"修改班级",
            grade_name,
            subject_text,
            room_text,
            grade_id
          }
        })
      }
    render() {
        return (
            <span>
            <a onClick={this.editclass}>修改|</a>             
            <a onClick={this.delHandler}>删除</a>
          </span>
        )
    }
}
export default Methodbtn
