import React, { Component } from 'react'
import style from "./style.module.scss"
import classNames from "classnames"
import { Table,Button,Form, Input, Select,DatePicker } from 'antd';
import {connect} from "dva"
const { Option } = Select;
const { RangePicker } = DatePicker;
@connect(
    state=>{
        return state
    }
)
class ExamAdd extends Component {
    state={
        title:"",
        exam_id:"",
        subject_id:"",
        number:0,
        start_time:0,
        end_time:0
    }
    componentDidMount(){
        this.getalltype()
        this.getsubject()

    }
    // 获取考试类型
    getalltype=()=>{
        this.props.dispatch({
            type:"textbox/GET_ALL_TYPE"
        })
    }
    // 获取学科
    getsubject = () => {
        this.props.dispatch({
            type: "exambox/GET_ALL_SUBJECT",
        })
    }
    //  选择考试类型
    Changetype = (value) => {
        this.setState({
            exam_id: value
        })
    }
    // 选择学科
    Changesubject = (value) => {
        this.setState({
            subject_id: value
        })
    }    
    // 选择开始日期结束日期
    clickTime=(date)=>{
        this.setState({
            start_time:date[0]._d.getTime(),	
            end_time:date[1]._d.getTime()
        })
    }
    // 创建试卷
    createexam=()=>{
        const {title,subject_id,exam_id,number,start_time,end_time}=this.state
        const a= parseInt(number)
        console.log(title,subject_id,exam_id,a,start_time,end_time)
        this.props.dispatch({
            type:"exambox/CREATE_EXAM",
            payload:{
                subject_id,
                exam_id,
                title,
                number:a,	
                start_time,	
                end_time
            }
        })
    }

    render() {
        const {title,number}=this.state
        const {alltype}=this.props.textbox
        const { allsubject } = this.props.exambox
        return (
            <div>
                <h1>添加考试</h1>
                <div>  
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="试卷名称:"
                            name="试卷名称"
                            rules={[{ required: true, message: '输入试卷名称必填项!' }]}
                        >
                            <Input  value={title} onChange={(e) => this.setState({ title: e.target.value })} className={classNames(style["ipt"])}/>
                        </Form.Item>

                        <Form.Item
                            label="选择考试类型："
                            name="选择考试类型"
                            rules={[{ required: true, message: '选择考试类型必选项!' }]}
                        >
                            <Select  style={{ width: 120 }} onChange={this.Changetype}>
                                {
                                    alltype && alltype.map((item) => {
                                        return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="选择选择课程类型："
                            name="选择选择课程类型"
                            rules={[{ required: true, message: '选择选择课程类型必选项!' }]}
                        >
                            <Select  style={{ width: 120 }} onChange={this.Changesubject}>
                                {
                                    allsubject && allsubject.map((item) => {
                                        return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="设置题量:"
                            name="设置题量"
                            rules={[{ required: true, message: '设置题量必填项!' }]}
                        >
                            <Input  value={number} onChange={(e) => this.setState({ number: e.target.value })} className={classNames(style["num"])}/>
                        </Form.Item>
                        <Form.Item
                            label="考试时间:"
                            name="考试时间"
                            rules={[{ required: true, message: '考试时间必填项!' }]}
                        >
                        <RangePicker onChange={this.clickTime}/>
 
                        </Form.Item>
                        <Button type="primary" onClick={this.createexam}>创建试卷</Button>
                    </Form>
               
                </div>

            </div>
        )
    }
}
export default connect()(ExamAdd)
