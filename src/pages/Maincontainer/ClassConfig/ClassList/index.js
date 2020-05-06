import React, { Component } from 'react'
import { Table,Button} from 'antd';
import { connect} from "dva"
import Methodbtn from "./method.js"
import Alert from "@/components/Alert/index.js"
@connect(
    state=>{
        return state.classbox
    }
)
class ClassList extends Component {

    state={
        columns:[
            {
              title: '班级名',
              dataIndex: 'grade_name',
              key: 'grade_id',
            },
            {
              title: '课程名',
              dataIndex: 'subject_text',
              key: 'subject_id',
            },
            {
              title: '教室号',
              dataIndex: 'room_text',
              key: 'room_id',
            },
            {
              title: '操作',
              key: 'action',
              render: (text,item, record) => (
                <Methodbtn row={item}/>
              ),
            },
          ]
    }
    render() {
        const {ClassManagement}=this.props
        const {columns}=this.state
        return (
         <div>  
            <h1>班级管理</h1>       
           <Button type="primary" onClick={()=>this.showalert()}>添加班级</Button>            
           <Table columns={columns} dataSource={ClassManagement} rowKey={item=>item.room_id} />
           <Alert  {...this.props}/>
         </div>     
        )
    }
    componentDidMount(){
       this.getclass()
     }
    //  获取所有班级
     getclass=()=>{
      this.props.dispatch({
        type:"classbox/GET_CLASS_LIST"
    })
     }
    // 添加班级
    showalert=()=>{
      this.props.dispatch({
        type:"classbox/OPEN_DEAILOG",
        payload:{
          visible: true,
          title:"添加班级"
        }

      })
    }
}
export default ClassList
