import request from "@/utils/request"
// 获取已经分配教室的班级的接口
export const classGroup=()=>request.get("/manger/grade");
// 获取教室接口
export const roomGroup=()=>request.get("/manger/room");
// 已经分班学生接口
export const studentGroup=()=>request.get("/manger/student");
// 添加班级接口
export const classAdd=(data)=>request.post("/manger/grade",data)
// 删除教室接口
export const deleteRoom=(room_text)=>request.delete("/manger/room/delete",room_text)
// 删除班级接口  
export const deleteGrade=(grade_id)=>request.delete("/manger/grade/delete",grade_id)
// 删除学生接口
export const deleteStudent=(params)=>request.delete("/manger/student/:id=>student_id",params)
// 更新班级接口
export const updataClass=(data)=>request.put("/manger/grade/update",data)
//添加教室接口
export const AddRoom=(data)=>request.post("/manger/room",data)










