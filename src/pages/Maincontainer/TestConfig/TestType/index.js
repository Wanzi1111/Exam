import React, { Component } from 'react'
import { Table,Button,Form, Input, Modal} from 'antd';
import { connect} from "dva"
@connect(
    state=>{
        return state
    }
)
 class TestType extends Component {
    state={
      text:"",
      sort:Math.random(0,100)*100,
        columns:[
            {
              title: '类型ID',
              dataIndex: 'questions_type_id',
              key: 'questions_type_id',
            },
            {
              title: '类型名称',
              dataIndex: 'questions_type_text',
              key: 'questions_type_id',
            },
            {
              title: '操作',
              key: 'action',
              render: (text,item, record) => (
                <span>       
                  <a onClick={()=>this.remove(item)}>删除</a>
                </span>
              ),
            },
          ]
    }
    render() {
        const {texttype,modelDialog}=this.props.textbox
        const {columns,text}=this.state
        return (
            <div>
                <h1>试题分类</h1>
           <Button type="primary" onClick={()=>this.showalert()}>+添加类型</Button>  

           <Table columns={columns} dataSource={texttype} rowKey={item=>item.questions_type_id} />
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
                            label="请输入类型名称："
                            name="请输入类型名称"
                            rules={[{ required: true, message: '请输入类型名称必填项!' }]}
                        >
                            <Input placeholder="请输入类型名称" value={text}  onChange={(e) => this.setState({ text: e.target.value })} />
                        </Form.Item>
                    </Form>
                </Modal>

            </div>
        )
    }
    componentDidMount(){
        this.gettexttype()
      }
     //  获取所有班级
     gettexttype=()=>{
       this.props.dispatch({
         type:"textbox/GET_TEXT_TYPE"
     })
      }
    // 创建新类型
    showalert=()=>{
        this.props.dispatch({
        type:"textbox/OPEN_DEAILOG",
        payload:{
        visible: true,
        title:"创建新类型"
         }
      })
    }
    // 关闭弹框
    Cancel=()=>{
      this.props.dispatch({
      type:"textbox/OPEN_DEAILOG",
      payload:{
      visible:false
       }
     })
    }
    //提交分类
    subclass=()=>{
      const {text,sort}=this.state
      this.props.dispatch({
        type:"textbox/ADD_TEXT_TYPE",
        payload:{
          text,sort
         }
       })
       this.Cancel()
    }
    // 删除指定分类
    remove=(item)=>{
      this.props.dispatch({
        type:"textbox/DELETE_TYPE",
        payload:{
          id:item.questions_type_id
         }
       })
    }
      
}
export default connect()(TestType)