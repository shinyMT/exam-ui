// 访问数据的API接口地址
var baseApi = "http://127.0.0.1:11011"

// --------------用户通用------------
 // 登陆
 var apiLogin = baseApi + "/login"

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
 var apiSetTime = baseApi + "/set/time"
 
 // 生成试卷
 var apiGenerate = baseApi + "/generate"