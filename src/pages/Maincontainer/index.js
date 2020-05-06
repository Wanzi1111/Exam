import React, { Component } from 'react'
import style from "./style.module.scss"
import { renderRoutes } from "react-router-config"//路由插件
import { Menu, Dropdown, Layout,Message} from 'antd';
import classNames from "classnames"
import Cookie from "js-cookie"
import {history} from "@/App"
import { connect } from "dva"
import MenuSlide from "./Menu/index.js";//侧边菜单组件拆分
const { Header, Content, Sider } = Layout;

@connect(
  state => {
    return state
  }
)
class Main extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'userbox/GET_USER_INFO'
    })
  }
  state={
    menu:(
      <Menu >
        <Menu.Item>
            个人中心
        </Menu.Item>
        <Menu.Item>
            我的班级
        </Menu.Item>
        <Menu.Item>
            设置
        </Menu.Item>
        <Menu.Item onClick={this.callback}>
            退出登录
        </Menu.Item>
      </Menu>
    )
  }
  // 点击退出登录
  callback(){
    Cookie.remove("usertoken")
    Message.info("退出成功")
    history.replace("/login")
  }
  render() {
    const { userViewsData,userData } = this.props.userbox
    // console.log(this.props)
    const {menu}=this.state
    return (
      <Layout className={classNames(style["main_box"])}>
        <Header className={classNames(style["head"])}>
              <Dropdown overlay={menu}>
               <h1 >北京八维研修学院 <span className={classNames(style["text_name"])}>{userData.user_name}</span> </h1>              
              </Dropdown>
        </Header>
           <Layout>
          <Sider width={200} className="site-layout-background">
            <MenuSlide userViewsData={userViewsData} />
          </Sider>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              {
                renderRoutes(this.props.route.routes)
              }
            </Content>
          </Layout>

        </Layout>
    )
  }
}
export default Main



