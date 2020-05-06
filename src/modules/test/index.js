import {getTextType,AddtextType,DeleteType,getAllText,AddText} from "@/services/text"
import {getallType} from "@/services/exam"
import {Message} from 'antd'
const examList={
    allregistry:true,
    namespace:"textbox",
    state:{ 
    texttype:[],
    alltype:[],
    AllquestList:[],
    modelDialog:{
        visible:false,
        title:"创建新类型",
    },
    },
    reducers:{
        // 设置试题分类
        SET_TEXT_TYPE(state,{payload}){
            return {
                ...state,
                texttype:payload.texttype

            }
        },
        OPEN_DEAILOG(state,{payload}){
            return {
                ...state,
                modelDialog:{
                    ...state.modelDialog,
                    ...payload 
                }
            }
        },
        // 所有的考试类型
        SET_ALL_TYPE(state,{payload}){
            return payload
        },
        // 设置所有的考试列表
        SET_ALL_EXAM(state,{payload}){
            return payload
        },
        // 设置所有的试题类型
        SET_ALL_TEXT(state,{payload}){
            return payload
        }
    },
    effects:{
       // 请求所有课程
        *GET_TEXT_TYPE({payload},{call,put}){
            const {data:texttype}=yield call(getTextType);
            yield put({
                type:"SET_TEXT_TYPE",
                payload:{
                    texttype
                }
            })
        },
        // 添加试题分类
        *ADD_TEXT_TYPE({payload},{call,put}){
           const res=yield call(AddtextType,payload);
            yield put({
                type:"GET_TEXT_TYPE",
            })
        },
        // 删除指定的试题类型
        *DELETE_TYPE({payload},{call,put}){
           const res=yield call(DeleteType,payload);
            yield put({
                type:"GET_TEXT_TYPE",
            })
            Message.info(res.msg)
        },
        // // 获取所有的考试类型
        *GET_ALL_TYPE({payload},{call,put}){
            const {data:alltype}=yield call(getallType);
             yield put({
                 type:"SET_ALL_TYPE",
                 payload:{
                    alltype
                 }
             })
         },
         // 获取所有的试题类型
         *GET_ALL_TEXT({payload},{call,put}){
            const {data:AllquestList}=yield call(getAllText);
            yield put({
                type:"SET_ALL_TEXT",
                payload:{
                    AllquestList
                }
            })
         },
         // 添加试题接口
         *ADD_TEXT({payload},{call,put}){
            const res=yield call(AddText,payload);
            Message.info(res.msg)
         }

    }
}
export default examList