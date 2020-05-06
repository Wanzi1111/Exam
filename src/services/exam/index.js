import request from "@/utils/request"
// 获取所有课程
export const getsubject=()=>request.get("/exam/subject")
// 获取所有的考试类型
export const getallType=()=>request.get("/exam/examType");
// 获取试卷列表接口
export const getExam=()=>request.get("/exam/exam");
// 创建试卷
export const createExam=(data)=>request.post("/exam/exam",data);
