import {getsubject,getExam,createExam} from "@/services/exam"
import {Message} from 'antd';
const examList={
    allregistry:true,
    namespace:"exambox",
    state:{ 
    allsubject:[],
    allexamlist:[]
    },
    reducers:{
        // 设置所有课程数据
        SET_ALL_SUBJECT(state,{payload}){
            return payload
        },
        // 设置所有的考试列表
        SET_ALL_EXAM(state,{payload}){
            return payload
        }
    },
    effects:{
        // 请求请求所有课程
        *GET_ALL_SUBJECT({payload},{call,put}){
        // 请求所有课程
            const {data:allsubject}=yield call(getsubject);
            yield put({
                type:"SET_ALL_SUBJECT",
                payload:{
                    allsubject
                }
            })
        },
        // 请求所有的考试列表
        *GET_EXAM_LIST({payload},{call,put}){
            const {exam:allexamlist}=yield call(getExam)
            console.log(allexamlist)
            yield put({
                type:"SET_ALL_EXAM",
                payload:{
                    allexamlist
                }
            })
        },
        // 创建试卷
        *CREATE_EXAM({payload},{call,put}){
            const res=yield call(createExam,payload)
            Message.info(res.msg)
        },        
    }
}
export default examList