import React, { Component } from 'react'
import { Table,Button} from 'antd';
import { connect} from "dva"
@connect(
    state=>{
        return state
    }
)
 class UserShow extends Component {
    state={
        columns:[
            {
              title: '用户数据',
              dataIndex: 'user_name',
              key: 'user_name',
            },
            {
              title: '密码',
              dataIndex: 'user_pwd',
              key: 'user_pwd',
            },
            {
              title: '身份',
              dataIndex: 'identity_text',
              key: 'identity_text',
            }
          ]
    }
    componentDidMount(){
        this.props.dispatch({
            type:"userbox/GET_SHOW_USER"
        })
    }
    render() {
        const {showUserdata}=this.props.userbox
        console.log(this.props.userbox)
        const {columns,visible}=this.state
        return (
            <div>
                用户展示
           <Table columns={columns} dataSource={showUserdata} rowKey={item=>item.user_id} />

            </div>
        )
    }
}
export default connect()(UserShow)
