// 访问数据的API接口地址
var baseApi = "http://127.0.0.1:11013"

// --------------用户通用------------
 // 登陆
 var apiLogin = baseApi + "/login"
 
 // 修改用户信息
 var apiChangeInfo = baseApi + "/change"

// ---------------教师---------------
 // 添加试题
 var apiAddSubject = baseApi + "/add/subject"
 
 // 查看题库中的所有题目
 var apiShowSubjects = baseApi + "/all"
 
 // 删除试题
 var apiDelSubject = baseApi + "/del/subject"
 
 // 修改试题
 var apiUpdateSubject = baseApi + "/update/subject"
 
 // 设置考试起止时间
 // var apiSetTime = baseApi + "/set/time"
 
 // 生成试卷
 var apiGenerate = baseApi + "/generate"
 
 // 获取学生试卷
 var apiGetStudentPaper = baseApi + "/get/stu/paper"
 
 // 给学生试卷打分
 var apiSetMark = baseApi + "/set/mark"
 
 // 查看所有学生成绩
 var apiGetAllMark = baseApi + "/all/mark"
 
 // 修改学生成绩
 var apiUpdateMark = baseApi + "/update/mark"
 
// ----------------学生---------------
 // 获取所有试卷
 var apiGetAllPaper = baseApi + "/all/paper"
 
 // 判断是否已经提交过试卷
 var apiCheckStatus = baseApi + "/check/commit"
 
 // 获取试卷
 var apiGetPaper = baseApi + "/get/paper"
 
 // 获取考试时间
 var apiGetTime = baseApi + "/get/time"
 
 // 提交试卷信息
 var apiCommit = baseApi + "/commit"
 
 // 查询成绩
 var apiGetSelfMark = baseApi + "/search/mark"