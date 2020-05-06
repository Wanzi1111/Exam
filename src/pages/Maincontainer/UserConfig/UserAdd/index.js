import React, { Component } from 'react'
import { Button, Select,Input} from 'antd'
import { connect } from "dva"
const { Option } = Select;
@connect(
    state=>{
        return state
    }
)
class index extends Component {
    state={
        user_name:"",
        user_pwd:"",
        identity_id:0
    }
    viewChange = (value) => {
        console.log(value)
    }
    viewChanges = (value) => {
        console.log(value)
    }
    componentDidMount(){
       this.getuserID()
    }
    getuserID=()=>{
        this.props.dispatch({
            type:"userbox/SHOW_PROPLE"
        })
    }
    // 选择用户身份
    handleChange=(value)=>{
        this.setState({
            identity_id:value.key
        })
    }
    // 添加用户
    adduser=()=>{
        const {user_name,user_pwd,identity_id}=this.state
        this.props.dispatch({
            type:"userbox/ADD_USER",
            payload:{
                user_name,user_pwd,identity_id
            }
        })
    }
    render() {
        const {user_name,user_pwd}=this.state
        const { showpepledata } = this.props.userbox
        return (
            <div className="user">
                <div className="user_item">
                    <p> <span className="btnact">添加用户</span> <span>更新用户</span></p>
                    <p><Input type="text" placeholder="请输入用户名" value={user_name} onChange={(e)=>this.setState({user_name:e.target.value})}/></p>
                    <p> <Input type="text" placeholder="请输入密码" value={user_pwd} onChange={(e)=>this.setState({user_pwd:e.target.value})}/></p>
                        <Select
                                labelInValue
                                defaultValue={{ key: '请选择身份id' }}
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                {
                                    showpepledata && showpepledata.map((item, index) => {
                                        return <Option key={index} value={item.identity_id}>{item.identity_text}</Option>
                                    })
                                }
                        </Select>     
                    <p>
                        <Button type="primary" onClick={this.adduser}>确定</Button><button>重置</button>
                    </p>
                </div>
                <div className="user_item">
                    <p><span className="btnact">添加身份</span></p>
                    <p><Input type="text" placeholder="请输入身份名称" /></p>
                    <p>
                        <Button type="primary">确定</Button><button>重置</button>
                    </p>
                </div>
                <div className="user_item">
                    <p> <span>添加api接口权限</span></p>
                    <p><Input type="text" placeholder="请输入api接口权限名称" /></p>
                    <p> <Input type="text" placeholder="请输入api接口权限url" /></p>
                    <p><Input type="text" placeholder="请输入api接口权限方法" /></p>
                    <p>
                        <Button type="primary">确定</Button><button>重置</button>
                    </p>
                </div>
                <div className="user_item">
                    <p> <span className="btnact" className="btnact">添加视图接口权限</span></p>
                    {/* <Select
                        labelInValue
                        defaultValue={{ key: '请选择视图权限' }}
                        style={{ width: 120 }}
                        onChange={this.viewChanges}
                    >
                        {
                            viewData ? viewData.map((item, index) => {
                                return <Option key={index} value={item.user_id}>{item.view_authority_text}</Option>
                            }) : null
                        }
                    </Select> */}
                    <p>
                        <Button type="primary">确定</Button><button>重置</button>
                    </p>
                </div>
                <div className="user_item">
                    <p> <span className="btnact">给身份设置api接口权限</span></p>
                    <p>
                        {/* <Select
                                labelInValue
                                defaultValue={{ key: '请选择身份id' }}
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                {
                                    examList ? examList.map((item, index) => {
                                        return <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                                    }) : null
                                }
                        </Select> */}
                    </p>
                    <p>
                        {/* <Select
                                labelInValue
                                defaultValue={{ key: '请选择api接口' }}
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                {
                                    examList ? examList.map((item, index) => {
                                        return <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                                    }) : null
                                }
                        </Select> */}
                    </p>
                    <p>
                        <Button type="primary">确定</Button><button>重置</button>
                    </p>
                </div>
                <div className="user_item">
                    <p> <span className="btnact">给身份设置api接口权限</span></p>
                    <p>
                        {/* <Select
                                labelInValue
                                defaultValue={{ key: '请选择身份id' }}
                                style={{ width: 120 }}
                                onChange={this.handleChange}
                            >
                                {
                                    examList ? examList.map((item, index) => {
                                        return <Option key={index} value={item.exam_id}>{item.exam_name}</Option>
                                    }) : null
                                }
                        </Select> */}
                    </p>
                    {/* <Select
                        labelInValue
                        defaultValue={{ key: '周考一' }}
                        style={{ width: 120 }}
                        onChange={this.handleChange}
                    >
                        {
                            viewData ? viewData.map((item, index) => {
                                return <Option key={index} value={item.user_id}>{item.view_authority_text}</Option>
                            }) : null
                        }
                    </Select> */}
                    <p><Button type="primary">确定</Button><button>重置</button></p>
                </div>
            </div>
        )
    }
}
export default connect()(index)
