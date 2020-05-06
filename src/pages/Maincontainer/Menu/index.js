import React, { Component } from 'react'
import {Menu} from 'antd';
import getviewsdata,{getOpenKeys} from "@/routes/route.utils.js"
import {withRouter} from 'dva/router'
const { SubMenu } = Menu;
@withRouter
 class MenuSlide extends Component {
    clickViews=({key})=>{
        // console.log(key)
        this.props.history.push(key)
    }
    render() {
        const {userViewsData,location}=this.props
        // 获取动态侧边栏数据
        const menuConfig=getviewsdata(userViewsData)
        const getOpenKey = getOpenKeys(location.pathname);
        return (
            <Menu
            mode="inline"
            theme="dark"
            onClick={this.clickViews}
            defaultOpenKeys={getOpenKey}
            onOpenChange={this.close}
            defaultSelectedKeys={location.pathname}
          >
          {
              menuConfig.map((val)=>{
                  return (
                    <SubMenu
                    key={val.groupid}
                    title={
                      <span>
                        {val.groupName}
                      </span>
                    }
                  >
                  {
                      val.children.map((item)=>{
                          return <Menu.Item key={item.path}>{item.title}</Menu.Item>
                      })
                    
                  }
                  </SubMenu>
                  )

              })
          }
          </Menu>
        )
    }
}
export default MenuSlide