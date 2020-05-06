import React, { Component } from 'react'
import { connect } from "dva"
import { Select ,Tag ,Button} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Option } = Select;
class index extends Component {
    state = {
        curindex: null,
        flag: true
    }
    componentDidMount() {
        this.getexamType()
        this.getquesttion()
        this.getsubject()
        this.getquest()
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
    // //获取所有试题
    getquest = () => {
        return this.props.dispatch({
            type: "textbox/GET_ALL_TEXT"
        })
    }
    // //考试类型
    // handleChange = ({ value }) => {
    //     // console.log(value);
    //     this.getConList({ exam_id: value })
    // }
    // //题目类型
    // Changetm = ({ value }) => {
    //     this.getConList({ questions_type_id: value })
    // }
    // //编辑
    // edlFn(v) {
    //     window.localStorage.exam = JSON.stringify(v)
    //     this.props.history.push("/home/testedil")
    // }
    // //根据条件进行获取数据
    // getConList = (options) => {
    //     this.props.dispatch({
    //         type: "test/GET_CONQUEST",
    //         payload: options
    //     })
    // }
    // //点击课程类型
    clickFn(v, i) {
        // this.setState({
        //     curindex: i,
        //     flag: false
        // })
        // this.getConList({ subject_id: v.subject_id })
    }
    // //获取全部数据
    // AllFn = () => {
    //     this.setState({
    //         curindex: null,
    //         flag: true
    //     })
    //     this.getquesttion()
    // }
    render() {
        const { alltype ,texttype,AllquestList} = this.props.textbox
        const { allsubject, allexamlist } = this.props.exambox
        return (
            <div className="test_look">
                <nav>
                    课程类型：
                    <span className={this.state.flag ? "active" : null} onClick={this.AllFn}>All</span>
                    {
                        allsubject ? allsubject.map((v, i) => {
                            return <span key={v.subject_id} className={this.state.curindex === i ? "active" : "title"} onClick={() => this.clickFn(v, i)}>{v.subject_text}</span>
                        }) : null
                    }
                </nav>
                <div className="check">
                    <span>考试类型:</span>
                    <Select
                        labelInValue
                        defaultValue={{ key: '周考一' }}
                        style={{ width: 120 }}
                        onChange={this.handleChange}
                    >
                        {
                            alltype && alltype.map((item) => {
                                return <Option value={item.exam_id} key={item.exam_id}>{item.exam_name}</Option>
                            })
                        }
                    </Select>
                    <span>题目类型:</span>
                    <Select
                        labelInValue
                        defaultValue={{ key: '简答题' }}
                        style={{ width: 120 }}
                        onChange={this.Changetm}
                    >
                        {
                            texttype&&texttype.map((item, index) => {
                                return <Option key={index} value={item.questions_type_id}>{item.questions_type_text}</Option>
                            }) 
                        }
                    </Select>

                    <Button type="primary" icon={<SearchOutlined />}>
                        查询
                 </Button>
                 <div >
                 {
                        AllquestList ? AllquestList.map((v, i) => {
                            return (
                                <div key={i} className="listtext">
                                    <h4>{v.title} <span onClick={() => this.edlFn(v)}>编辑</span> </h4>
                                    <p><Tag color="blue">{v.questions_type_text}</Tag><Tag color="geekblue">{v.subject_text}</Tag><Tag color="orange">{v.exam_name}</Tag></p>
                                    <a>{v.user_name}发布</a>
                                </div>
                            )
                        }) : "没有数据"
                    }                     
                 </div>

                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return state
})(index)
