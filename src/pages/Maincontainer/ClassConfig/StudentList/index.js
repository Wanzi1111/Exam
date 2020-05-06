import React, { Component } from 'react'
import { Table, Input, Select, Button } from 'antd';
import style from "./style.module.scss"
import classNames from "classnames"
import { connect } from "dva"
const { Option } = Select;
@connect(
    state => {
        return state
    }
)
class StudentList extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: "classbox/GET_CLASS_STUENT"
        })
    }
    state = {
        columns: [
            {
                title: '姓名',
                dataIndex: 'student_name',
                key: 'student_id',
            },
            {
                title: '学号',
                dataIndex: 'subject_text',
                key: 'subject_id',
            },
            {
                title: '班级',
                dataIndex: 'grade_name',
                key: 'grade_id',
            },
            {
                title: '课程名',
                dataIndex: 'subject_text',
                key: 'subject_id',
            },
            {
                title: '教室',
                dataIndex: 'room_text',
                key: 'room_id',
            },
            {
                title: '密码',
                dataIndex: 'student_pwd',
                key: 'student_pwd',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, item,record) => (
                    <span>
                        <a onClick={()=>this.remove(item)}>删除</a>
                    </span>
                ),
            },
        ]
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    remove=(item)=>{
        this.props.dispatch({
            type:"classbox/DELETE_STUDENT",
            payload:{
                id:item.student_id
            }
        })
    }
    render() {
        const { classbox } = this.props
        const { StudentManagement } = classbox
        const { columns } = this.state
        // console.log(this.props)
        return (
            <div>
                <h1>学生管理</h1>
                <div className={classNames(style["head"])}>
                    <Input placeholder="输入学生姓名" className={classNames(style["ipt"])}/>
                    <Select defaultValue="请选择教室号" style={{ width: 120 }} onChange={this.handleChange} className={classNames(style["seleroom"])}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Select defaultValue="班级名" style={{ width: 120 }} onChange={this.handleChange} className={classNames(style["seleclass"])}>
                        <Option value="jack">Jack</Option>
                        <Option value="lucy">Lucy</Option>
                        <Option value="Yiminghe">yiminghe</Option>
                    </Select>
                    <Button type="primary" className={classNames(style["btn"])}>搜索</Button>  
                    <Button type="primary" className={classNames(style["btn"])}>重置</Button>  
                </div>
                <Table columns={columns} dataSource={StudentManagement} rowKey={item => item.room_id} />
            </div>
        )
    }
}
export default connect()(StudentList)
