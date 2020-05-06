import {classGroup,roomGroup,studentGroup,classAdd,deleteGrade,deleteRoom,updataClass,AddRoom,deleteStudent} from "@/services/class"
import {Message} from 'antd';
const classList={
    allregistry:true,
    namespace:"classbox",
    state:{ 
    ClassManagement:[],
    modelDialog:{
        visible:false,
        title:"添加班级",
        grade_name:"",
        subject_text:"",
        room_text:"",
        grade_id:""
    },
    ClassroomManagement:[],
    StudentManagement:[]
    },
    reducers:{
        // 设置班级列表数据
        SET_CLASS_LIST(state,{payload}){
            return {
                ...state,
                ClassManagement:payload.ClassManagement
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
        // 设置班级列表数据
        SET_CLASS_ROOM(state,{payload}){
            return payload
        },
        // 设置学生列表数据
        SET_CLASS_STUENT(state,{payload}){
            return payload
        }
    },
    effects:{
        *GET_CLASS_LIST({payload},{call,put}){
            // 请求班级列表
            const {data:ClassManagement}=yield call(classGroup)
                yield put({
                    type:"SET_CLASS_LIST",
                    payload:{
                        ClassManagement
                    }
                })
        },
        *GET_CLASS_ROOM({payload},{call,put}){
            // 请求教室列表
            const {data:ClassroomManagement}=yield call(roomGroup)
                yield put({
                    type:"SET_CLASS_ROOM",
                    payload:{
                        ClassroomManagement
                    }
                })
        },
        *GET_CLASS_STUENT({payload},{call,put}){
           //请求学生列表
            const {data:StudentManagement}=yield call(studentGroup);
                yield put({
                    type:"SET_CLASS_STUENT",
                    payload:{
                        StudentManagement
                    }
                })
        },
        // 添加班级
        *CLASS_ADD({payload},{call,put}){
            const res=yield call(classAdd,payload)
            if(res.code==1){
                yield  put({
                    type:"GET_CLASS_LIST"                
                })
                Message.info(res.msg)
            }
        },
        // 删除班级
        *DELETE_GRADE({payload},{call,put}){
            const res=yield call(deleteGrade,payload)
            if(res.code==1){
                yield  put({
                    type:"GET_CLASS_LIST"                
                })
                Message.info(res.msg)
                return
            }
        },
        // 更新班级
        *UPDATA_CLASS({payload},{call,put}){

            const res=yield call(updataClass,{...payload})
            console.log(res)
            if(res.code==1){
                yield  put({
                    type:"GET_CLASS_LIST"                
                })
                Message.info(res.msg)
                return
            }
        },
        // 删除教室
        *DELETE_ROOM({payload},{call,put}){
            const res=yield call(deleteRoom,payload)
            if(res.code==1){
                yield  put({
                    type:"GET_CLASS_ROOM"                
                })
                Message.info(res.msg)
            }
        },
        // 添加教室
        *ADD_ROOM({payload},{call,put}){
            const res=yield call(AddRoom,payload)
            if(res.code==1){
                yield  put({
                    type:"GET_CLASS_ROOM"                
                })
                Message.info(res.msg)
            }
        },
        // 删除学生
        *DELETE_STUDENT({payload},{call,put}){
            const res=yield call(deleteStudent,payload)
                yield  put({
                    type:"GET_CLASS_STUENT"                
                })
                Message.info(res.msg)
        }
    }
}
export default classList