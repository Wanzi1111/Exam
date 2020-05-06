import React, { Component } from 'react'
import { Form, Input, Modal, Select } from 'antd';
import { connect } from "dva"
const { Option } = Select;
@connect(
    state => {
        return state
    }
)

class Alert extends Component {
    state = {
        visible: false,
        room_id: "",
        grade_name: "",
        subject_id: ""
    };
    //  选择教室
    Changeroom = (value) => {
        //  console.log(value)
        this.setState({
            room_id: value
        })
    }
    // 选择课程
    Changesubject = (value) => {
        this.setState({
            subject_id: value
        })
    }
    // 添加班级
    subclass() {
        const { grade_name, room_id, subject_id} = this.state
        const {modelDialog} = this.props.classbox
        if(modelDialog&&modelDialog.grade_name){
            this.props.dispatch({
                type: "classbox/UPDATA_CLASS",
                payload: {
                    grade_id:modelDialog&&modelDialog.grade_id,
                    grade_name, room_id, subject_id
                }
            })
        }else{
            this.props.dispatch({
                type: "classbox/CLASS_ADD",
                payload: {
                    grade_name, room_id, subject_id
                }
            })
        }
        this.Cancel()
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
    componentDidMount() {
        this.getroom()
        this.getsubject()
    }
    getroom = () => {
        this.props.dispatch({
            type: "classbox/GET_CLASS_ROOM",
        })
    }
    getsubject = () => {
        this.props.dispatch({
            type: "exambox/GET_ALL_SUBJECT",
        })
    }
    render() {
        const { ClassroomManagement,modelDialog} = this.props.classbox
        const { allsubject } = this.props.exambox
        const { grade_name } = this.state
        return (
            <div>
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
                            label="班级名："
                            name="班级名"
                            rules={[{ required: true, message: '请输入班级名必填项!' }]}
                        >
                            <Input placeholder="请输入班级名" value={grade_name} defaultValue={modelDialog&&modelDialog.grade_name} onChange={(e) => this.setState({ grade_name: e.target.value })} />
                        </Form.Item>

                        <Form.Item
                            label="教室号："
                            name="教室号"
                            rules={[{ required: true, message: '请选择教室号名必选项!' }]}
                        >
                            <Select placeholder="请选择教室号" style={{ width: 120 }} onChange={this.Changeroom} defaultValue={modelDialog&&modelDialog.room_text}>
                                {
                                    ClassroomManagement && ClassroomManagement.map((item) => {
                                        return <Option value={item.room_id} key={item.room_id}>{item.room_text}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="课程名："
                            name="课程名"
                            rules={[{ required: true, message: '请选择课程名必选项!' }]}
                        >
                            <Select placeholder="请选择课程名" style={{ width: 120 }} onChange={this.Changesubject} defaultValue={modelDialog&&modelDialog.subject_text}>
                                {
                                    allsubject && allsubject.map((item) => {
                                        return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        )
    }
}
export default connect()(Alert)
