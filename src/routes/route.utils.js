// menu.config  所有的组
import menuConfig from "@/config/menu.config"
// route.utils 所有的路由
import allroutes from "./main.children"

export const getOpenKeys = function(pathname){
    const res = allroutes.find(item=>item.path === pathname);
    return res ? [res.gropid] : [''];
}

//userViewsData  当前用户有的视图权限列表 通过接口
export default function(userViewsData){
    if(!userViewsData.length){
        return []
    }
  
   const views=allroutes.filter(item=>{
        return userViewsData.find(val=>val.view_id===item.viewid)
    })
       //拥有的groupid
       const newDArr = [...new Set(views.map(item=>item.gropid))];

       return newDArr.map(item=>{
        const menuConfigItem = menuConfig.find(val=>val.id === item);
           return {
               groupid:item,
               groupName:menuConfigItem.groupName,
               groupIcon:menuConfigItem.groupIcon,
               children:views.filter(val=>{
                   return (val.gropid === item && val.isMenu !== false)
               })
           }
       });


}

