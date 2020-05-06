import request from "@/utils/request"
// 登录接口
export const getlogin=(data)=>{
    return   request.post("/user/login",data)
}
// 获取用户信息 
export const userInfo = ()=> request.get('/user/userInfo');
// 获取身份权限
export const userViewInfo = (user_id)=> request.get('/user/new',{user_id});
// 展示用户身份
export const showUser = ()=> request.get('/user/user');
// 展示身份数据
export const showPepol = ()=> request.get('/user/identity');
// 添加用户
export const Adduser = ()=> request.post('/user');





