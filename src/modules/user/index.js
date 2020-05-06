import {Message} from 'antd';
import {getlogin,userInfo,userViewInfo,showUser,showPepol,Adduser} from "@/services/user"
import Cookie from "js-cookie"
import showLoading from "@/components/Loading"
import {history} from "@/App"
const user={
    allregistry:true,
    namespace:"userbox",
    state:{
        token:"",
        userData:{},//用户信息
        userViewsData:[],//用户视图权限
        showUserdata:[],//展示用户
        showpepledata:[], //展示身份数据
        
    },
    reducers:{//同步操作
        SET_TOKEN(state,{payload}){
            return {
                ...state,
                token:payload.token
            };
        },
        SET_USERINFO(state,{payload:{userData,userViewsData}}){
            return {
                ...state,
                userData,
                userViewsData
            }
        },
        // 设置展示用户信息
        SET_SHOW_USER(state,{payload}){
            return {
                ...state,
                showUserdata:payload.showUserdata
            }
        },
        // 设置身份数据
        SET_SHOW_PEPLE(state,{payload}){
            return {
                ...state,
                showpepledata:payload.showpepledata
            }   
        }
        
    },
    effects:{//异步操作 只能是genrateor函数
        *LOGIN({payload},{call,put}){
            // 显示loading
            let removeoading=showLoading()
            const res=yield call(getlogin,payload)
            // 隐藏loading
            removeoading()
            Cookie.set("usertoken",res.token,{expires:1})
            if(res.code===1){
                Message.info(res.msg)
            }else{
                Message.error(res.msg)
            }
            yield put({
                type:"SET_TOKEN",
                payload:{
                    token:res.token
                }
            })
        },
        *GET_USER_INFO(o,{call,put}){
            try {
                const userData=yield call(userInfo)
                sessionStorage.setItem("user_id",JSON.stringify(userData.data.user_id))
                const userViewData=yield call(userViewInfo,userData.data.user_id)
                // 存储用户权限信息
                sessionStorage.setItem("userViewsData",JSON.stringify(userViewData.data))
                yield put({
                type:"SET_USERINFO",
                payload:{
                    userData:userData.data,
                    userViewsData:userViewData.data       
                }
            })   
            } catch (error) {
                Message.error("登录状态过期，请重新登录")
                Cookie.remove("usertoken")
                history.replace("/login")
            }
        },
        // 展示用户身份
        *GET_SHOW_USER({payload},{call,put}){
            const {data:showUserdata}=yield call(showUser);
            yield put({
                type:"SET_SHOW_USER",
                payload:{
                    showUserdata
                }
            })
        },
        // 展示身份数据
        *SHOW_PROPLE({payload},{call,put}){
            const {data:showpepledata}=yield call(showPepol);
            yield put({
                type:"SET_SHOW_PEPLE",
                payload:{
                    showpepledata
                }
            })
        },
        // 添加用户
        *ADD_USER({payload},{call,put}){
            console.log(payload)
            const res=yield call(Adduser,{payload});
            console.log(res)
        }
    }
}

export default user