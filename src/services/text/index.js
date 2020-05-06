import request from "@/utils/request"
// 获取所有的试题类型
export const getTextType=()=>request.get("/exam/getQuestionsType")
// 添加试题类型
export const AddtextType=(params)=>request.get("/exam/insertQuestionsType",params);
// 删除指定的试题类型
export const DeleteType=(data)=>request.post("/exam/delQuestionsType",data);
// 获取所有的试题
export const getAllText=()=>request.get("/exam/questions/new");
// 添加试题接口
export const AddText=(data)=>request.post("/exam/questions",data);





