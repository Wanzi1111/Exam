import React, { Component } from 'react'
import { Select ,Tag ,Button,Input,Modal,Form} from 'antd';
import ReactMarkdown from "@/components/EditorMark";///引入react编辑器
import { connect } from "dva"

const { Option } = Select;
@connect(
    state => {
        return state
    }
)
 class TestAdd extends Component {
    state={
        questions_stem:"",
        exam_id:"",
        subject_id:"",
        questions_type_id:""
    }
    componentDidMount() {
        this.getexamType()
        this.getquesttion()
        this.getsubject()
    }
    // //获取所有的课程
    getsubject = () => {
        return this.props.dispatch({
            type: "exambox/GET_ALL_SUBJECT"
        })
    }
    // //获取所有考试类型
    getexamType = () => {
        return this.props.dispatch({
            type: "textbox/GET_ALL_TYPE"
        })
    }
    // //获取所有试题类型
    getquesttion = () => {
        return this.props.dispatch({
            type: "textbox/GET_TEXT_TYPE"
        })
    }
    // 选择考试类型
    Changetype = (value) => {
        this.setState({
            exam_id: value.key
        })
    }
    // 选择课程类型
    Changesubject=(value)=>{
        this.setState({
            subject_id: value.key
        })      
    }
    // 选择试题类型
    Changetitle=(value)=>{
        this.setState({
            questions_type_id: value.key
        })      
    }
    Changeanswer=(value)=>{
        this.setState({
            questions_answer:value
        })
    }
    Changetitles=(value)=>{
        this.setState({
            title:value
        })
    }
    // 添加试题
    addtext=()=>{
        const user_id=sessionStorage.getItem("user_id")
        const {questions_type_id,questions_stem,subject_id,exam_id,questions_answer,title}=this.state
        this.props.dispatch({
            type: "textbox/ADD_TEXT",
            payload:{
                questions_type_id,questions_stem,subject_id,exam_id,user_id,questions_answer,title
            }
        })  
    }
    render() {
        const {questions_stem}=this.state
        const {alltype,texttype}=this.props.textbox
        const { allsubject } = this.props.exambox
        return (
            <div>        
                <h1>添加试题</h1>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                    >
                      <p>题目信息</p>

                        <Form.Item
                            label="题干："
                            name="题干"
                            rules={[{ required: true, message: '请输入题干必填项!' }]}
                        >
                            <Input placeholder="请输入题目标题，不超过20个字" value={questions_stem}  onChange={(e) => this.setState({ questions_stem: e.target.value })} />
                        </Form.Item>
                        <p>试题的标题</p>
                        <ReactMarkdown mdValue={this.Changeanswer}/>

                        <Form.Item
                            label="选择考试类型："
                            name="选择考试类型"
                            rules={[{ required: true, message: '选择考试类型必选项!' }]}
                        >
                            <Select  style={{ width: 120 }} onChange={this.Changetype} labelInValue defaultValue={{ key: '周考一' }}>
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
                            <Select  style={{ width: 120 }} onChange={this.Changesubject} labelInValue defaultValue={{ key: 'javaScript上' }}>
                                {
                                    allsubject && allsubject.map((item) => {
                                        return <Option value={item.subject_id} key={item.subject_id}>{item.subject_text}</Option>
                                    })
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="请选择题目类型："
                            name="请选择题目类型"
                            rules={[{ required: true, message: '请选择课程类型必选项!' }]}
                        >
                            <Select  style={{ width: 120 }} onChange={this.Changetitle} labelInValue defaultValue={{ key: '简答题' }}>
                                {
                                    texttype && texttype.map((item) => {
                                        return <Option value={item.questions_type_id} key={item.questions_type_id}>{item.questions_type_text}</Option>
                                    })
                                }
                            </Select>
                    </Form.Item>
                    </Form>
                    <p>	题目答案</p>
                    <ReactMarkdown mdValue={this.Changetitles}/>
                    
             
                <Button type="primary" onClick={this.addtext}>添加试题</Button>


            </div>
        )
    }
}
export default connect()(TestAdd)
