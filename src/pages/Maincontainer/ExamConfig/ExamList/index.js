import React, { Component } from 'react'
import { Table,Button} from 'antd';
import {connect} from "dva"
@connect(
    state=>{
        return state
    }
)
 class ExamList extends Component {
    componentDidMount(){
        this.props.dispatch({
            type:"exambox/GET_EXAM_LIST"
        })
    }
    state={
        columns:[
            {
              title: '试卷信息',
              dataIndex: 'title',
            },
            {
              title: '班级',
              dataIndex:'grade_name',
              key: 'grade_id',
            },
            {
              title: '创建人',
              dataIndex: '',
              key: '',
            },
            {
                title: '开始时间',
                dataIndex: 'start_time',
                key: 'room_id',
            },            {
                title: '结束时间',
                dataIndex: 'end_time',
                key: 'room_id',
            },
            {
              title: '操作',
              key: 'action',
              render: (text,item, record) => (
                <span>
                  <a>详情</a>             
                </span>
              ),
            },
          ]
    }
    render() {
        const {allexamlist}=this.props.exambox
        const {columns,visible}=this.state
        return (
            <div>
                试卷列表
           <Table columns={columns} dataSource={allexamlist} rowKey={item=>item.room_id} />

            </div>
        )
    }
}
export default connect()(ExamList)
