// import React from 'react';
import dynamic from '@/utils/dynamic.js';
import app from "@/App"
const maindata=[{
    path: "/main/classlist",
    title:"班级管理",
    gropid:"class_group",
    viewid:"main-grade",
    component: dynamic({ component: () => import("../pages/Maincontainer/ClassConfig/ClassList") }),//班级管理
    app,
    models: () => [
      import("@/modules/class/index.js")
    ]
  }, {
    path: "/main/classroom",
    gropid:"class_group",
    title:"教室管理",
    viewid: "main-room",
    component: dynamic({ component: () => import("../pages/Maincontainer/ClassConfig/ClassRoom") }),//教室管理
    app,
    models: () => []
  }, {
    path: "/main/studentlist",
    gropid:"class_group",
    title:"学生管理",
    viewid: "main-student",
    component: dynamic({ component: () => import("../pages/Maincontainer/ClassConfig/StudentList") }),//学生管理
    app,
    models: () => []
  }, {
    path: "/main/examadd",
    gropid:"exam_group",
    title:"考试添加",
    viewid: "main-addExam",
    component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/ExamAdd") }),//考试添加
    app,
    models: () => []
  }, 
  // {
  //   path: "/main/createexam",
  //   gropid:"exam_group",
  //   title:"创建试卷",
  //   viewid: "main-examEdit",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/CreateExam") }),//创建试卷
  //   app,
  //   models: () => []
  // },
  {
    path: "/main/examlist",
    gropid:"exam_group",
    title:"考试列表",
    viewid: "main-examList",
    component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/ExamList") }),//考试列表
    app,
    models: () => []
  },
  // {
  //   path: "/main/examdetail",
  //   gropid:"exam_group",
  //   title:"试卷详情",
  //   viewid: "main-examDetail",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/ExamDetail") }),//试卷详情
  //   app,
  //   models: () => []
  // },
  //  {
  //   path: "/main/exammarkr",
  //   gropid:"exam_group",
  //   title:"阅卷",
  //   viewid: "main-examinationPapers",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/ExamMatker") }),//阅卷
  //   app,
  //   models: () => []
  // }, {
  //   path: "/main/examclassover",
  //   gropid:"exam_group",
  //   title:"批卷班级",
  //   viewid: "main-examPaperClassList",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/ExamClassOver") }),//批卷班级
  //   app,
  //   models: () => []
  // },  {
  //   path: "/main/exammate",
  //   gropid:"exam_group",
  //   title:"待批试卷",
  //   viewid: "main-examPaperClassmate",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/ExamConfig/Exammete") }),//待批试卷
  //   app,
  //   models: () => []
  // },  
  {
    path: "/main/testadd",
    gropid:"test_group",
    title:"试题添加",
    viewid: "main-addQuestions",
    component: dynamic({ component: () => import("../pages/Maincontainer/TestConfig/TestAdd") }),//试题添加
    app,
    models: () => []
  },
   {
    path: "/main/testlook",
    gropid:"test_group",
    title:"查看试题",
    viewid: "main-watchQuestions",
    component: dynamic({ component: () => import("../pages/Maincontainer/TestConfig/TestLook") }),//查看试题
    app,
    models: () => []
  }, 
  {
    path: "/main/testtype",
    gropid:"test_group",
    title:"试题分类",
    viewid: "main-questionsType",
    component: dynamic({ component: () => import("../pages/Maincontainer/TestConfig/TestType") }),//试题分类
    app,
    models: () => []
  },
  // {
  //   path: "/main/testdetail",
  //   gropid:"test_group",
  //   title:"试题详情",
  //   viewid: "main-questionsDetail",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/TestConfig/TestDetail") }),//试题详情
  //   app,
  //   models: () => []
  // },
   {
    path: "/main/edittest",
    gropid:"test_group",
    title:"试题编辑",
    isMenu:false,
    viewid: "main-editQuestions",
    component: dynamic({ component: () => import("../pages/Maincontainer/TestConfig/EditTest") }),//试题编辑
    app,
    models: () => []
  },{
    path: "/main/useradd",
    gropid:"user_group",
    title:"用户添加",
    viewid: "main-addUser",
    component: dynamic({ component: () => import("../pages/Maincontainer/UserConfig/UserAdd") }),//用户添加
    app,
    models: () => []
  }, {
    path: "/main/usershow",
    gropid:"user_group",
    title:"用户展示",
    viewid: "main-showUser",
    component: dynamic({ component: () => import("../pages/Maincontainer/UserConfig/UserShow") }),//用户展示
    app,
    models: () => []
  }, 
  // {
  //   path: "/main/menuadd",
  //   gropid:"menu_group",
  //   title:"菜单添加",
  //   viewid: "main-menu",
  //   component: dynamic({ component: () => import("../pages/Maincontainer/MenuConfig/MenuAdd") }),//菜单添加
  //   app,
  //   models: () => []
  // }
]

  export default maindata