import React, { Component } from 'react'
import { connect } from "dva"
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
@connect(
    state=>{
        return state
    }
)
class Login extends Component {
    state={
        user_name:"",
        user_pwd:""
    }
    render() {
        const {user_name,user_pwd}=this.state
        return (
            <div className="login_box">
                <div className="user_box">
                    <Form
                        className="form_box"
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                     >


                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your Username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" value={user_name} onChange={(e)=>this.setState({user_name:e.target.value})}/>
                        </Form.Item>



                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="请输入用户密码"
                                value={user_pwd}
                                onChange={(e)=>this.setState({user_pwd:e.target.value})}
                            />
                        </Form.Item>


                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                忘记密码
                           </a>
                        </Form.Item>


                        <Button type="primary" block className="login_submit" onClick={this.login}>
                            登陆
                    </Button>

                    </Form>
                </div>

            </div>
        )
    }
// 登录事件
    login = async() => {
        const {user_name,user_pwd}=this.state
      await  this.props.dispatch({
            type: "userbox/LOGIN",
            payload: {
                user_name,
                user_pwd
            }
        })
        this.props.history.push("/main")

    }
}
export default Login
