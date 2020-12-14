<template>
  <div>

    <div class="login_box">

      <el-form ref="loginformRef" :model="loginform" :rules="loginrules" label-width="80px" class="login_form">
         <h1 align="center" style="color:black">用户登录</h1>

        <el-form-item>
          <img src="../assets/用户名.png" alt=" " class="icon1">
        </el-form-item>

        <el-form-item>
          <img src="../assets/密码.png" alt=" " class="icon2">
        </el-form-item>

        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginform.username" placeholder="请输入用户名"></el-input>
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="loginform.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <!-- 验证码 -->
        <el-form-item>
          <el-input v-model="verification_code" class="code" placeholder="验证码" ></el-input>
          <a>
            <img />
          </a>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="loginValidate">登录</el-button>
          <el-button type="info" @click="resetLoginform">重置</el-button>
        </el-form-item>
        <!-- `checked` 为 true 或 false -->
        <el-form-item class="checkbox">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-form-item>

        <el-form-item>
          <img src="../assets/logo.png" alt=" " class="logo">
        </el-form-item>
      </el-form>
    </div>
    
  </div>
   
</template>

<script>

export default {
    data(){
        return{
            //登录表单的数据绑定对象
            loginform:{
                username:'',
                password:''
            },
            token:'',
            //表单的验证规则对象
            loginrules:{
                //验证用户名是否合法
                username:[
                     { required: true, message: '请输入用户名', trigger: 'blur' },
                     { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
                ],
                //验证密码是否合法
                password:[
                     { required: true, message: '请输入密码', trigger: 'blur' },
                     { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }                   
                ]
            },
            checked:true,
            verification_code:''
        };
    },
    methods: {
        resetLoginform() {
            this.$refs.loginformRef.resetFields();
        },
        loginValidate(){
          this.$refs.loginformRef.validate((valid)=>{
            if (!valid) return;
              //this.$http.post('api-token-auth/',this.loginform)
              this.$http.post('api-jwt-auth/',this.loginform)
                       .then(res => {
                          this.$message.success("登录成功！");
                          window.sessionStorage.setItem("token",res.data.token);
                          this.$router.push("/home");
                          console.log(res);
                        })
                        .catch(error => {
                          return this.$message.error("登录失败！");
                        })
          })
        }
    }
};
</script>

<style scoped>
.login_box {
  width: 1200px;
  height: 800px;
  background-image:url('../assets/Web 1920 – 4.png');
  background-size:1200px 800px;
  /* background-color: rgb(73, 230, 120); */
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.login_form {
  position: absolute;
  top:250px;
  right:200px;
  bottom: 0; 
  width: 30%;
  padding: 0 10px;
  box-sizing: border-box;
}

.btns{
    display: flex;
    justify-content: flex-end;
}

.icon1{
  position: absolute;
  left: -130px;
  top: 35px;
  width: 50px;
  height: 50px;
}

.icon2{
  position: absolute;
  left: -130px;
  top: 85px;
  width: 50px;
  height: 50px;
}

.logo{
  position:absolute;
  left:-550px;
  bottom:100px;
  width: 400px;
  height: 250px;
}

.checkbox{
  position:absolute;
  left:10px;
  top:275px;
}

.code {
  width: 50%;
}

img {
  /* style="width: 100px; height: 30px; margin-left:5px;vertical-align: middle;" */
  display: line-inline;
  width: 45%;
  height: 40px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}

</style>