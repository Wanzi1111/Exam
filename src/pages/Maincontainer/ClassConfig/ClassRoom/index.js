import React, { Component } from 'react'
import { Table,Button,Form, Input, Modal} from 'antd';
import { connect} from "dva"
@connect(
    state=>{
        return state
    }
)
 class ClassRoom extends Component {
    componentDidMount(){
        this.props.dispatch({
            type:"classbox/GET_CLASS_ROOM"
        })
    }
    state={
      room_text:"",
        columns:[
            {
              title: '教师号',
              dataIndex: 'room_text',
              key: 'room_id',
            },
            {
              title: '操作',
              key: 'action',
              render: (text,item,record) => (
                <span>            
                  <a onClick={()=>this.remove(item.room_id)}>删除</a>
                </span>
              ),
            },
          ]
    }
    render() {
        const {ClassroomManagement,modelDialog}=this.props.classbox
        const {columns,room_text}=this.state
        return (
         <div>  
            <h1>教室管理</h1>       
           <Button type="primary" onClick={()=>this.showalert()}>添加教室</Button>  
           <Table columns={columns} dataSource={ClassroomManagement} rowKey={item=>item.room_id} />
           <Modal
                    title={modelDialog&&modelDialog.title}
                    visible={modelDialog&&modelDialog.visible}
                    onOk={() => this.subclass()}
                    onCancel={this.Cancel}
                >
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="教室号："
                            name="教室名"
                            rules={[{ required: true, message: '请输入教室名必填项!' }]}
                        >
                            <Input placeholder="请输入教室名" value={room_text}  onChange={(e) => this.setState({ room_text: e.target.value })} />
                        </Form.Item>
                    </Form>
                </Modal>
         </div>     
        )
    }
        // 添加教室
        showalert=()=>{
          this.props.dispatch({
            type:"classbox/OPEN_DEAILOG",
            payload:{
              visible: true,
              title:"添加教室"
            }
          })
        }
    // 删除教室
    remove=(room_id)=>{
      this.props.dispatch({
        type:"classbox/DELETE_ROOM",
        payload:{
          room_id:room_id
        }
      })
    }
        // 关闭弹框
    Cancel=()=>{
        this.props.dispatch({
        type:"classbox/OPEN_DEAILOG",
        payload:{
        visible:false
         }
       })
      }
      // 提交添加教室信息
      subclass=()=>{
        const {room_text}=this.state
        this.props.dispatch({
          type:"classbox/ADD_ROOM",
          payload:{
            room_text
           }
         })
         this.Cancel()
      }
}
export default connect()(ClassRoom)
