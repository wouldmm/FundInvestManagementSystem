<template>
  <div>
    <div class="login_box">

      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" label-width="80px" class="login_form">
         <h1 align="center" style="color:black">用户登录</h1>

        <el-form-item>
          <img src="../../../public/static/img/用户名.png" alt=" " class="icon1">
        </el-form-item>

        <el-form-item>
          <img src="../../../public/static/img/密码.png" alt=" " class="icon2">
        </el-form-item>

        <el-form-item prop="username">
        <span class="svg-container">
        </span>
          <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
        </el-form-item>

        <el-form-item prop="password">
        <span class="svg-container">
        </span>
          <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
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
          <el-button type="primary" @click.native.prevent="handleLogin">登录</el-button>
          <el-button type="info" @click="resetLoginform">重置</el-button>
        </el-form-item>
        <!-- `checked` 为 true 或 false -->
        <el-form-item class="checkbox">
          <el-checkbox v-model="checked">记住密码</el-checkbox>
        </el-form-item>

        <el-form-item>
          <img src="../../../public/static/img/logo.png" alt=" " class="logo" width="35%" height="35%">
        </el-form-item>
      </el-form>
    </div>
    
  <!-- <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

      <div class="title-container">
        <h3 class="title">金融信息基金管理系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          ref="username"
          v-model="loginForm.username"
          placeholder="账号"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginForm.password"
          :type="passwordType"
          placeholder="密码"
          name="password"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
        <span class="show-pwd" @click="showPwd">
          <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登陆</el-button>

      <div class="tips">
        <span style="margin-right:20px;">username: admin</span>
        <span> password: any</span>
      </div> 

    </el-form>
  </div> --> 
  
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value.length < 4) {
        callback(new Error('密码长度小于4位!'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', message: '请输入账户' },
        { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword, message: '请输入密码' },
        { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }]
      },
      loading: false,
      passwordType: 'password',
      redirect: undefined,
      verification_code:'',
      checked:true,
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm).then(() => {
            this.$router.push({ path: this.redirect || '/' })
            this.loading = false
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetLoginform() {
            this.$refs.loginformRef.resetFields();
    },
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */
/* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */


$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
// .login-container {
//   .el-input {
//     display: inline-block;
//     height: 47px;
//     width: 85%;

//     input {
//       background: transparent;
//       border: 0px;
//       -webkit-appearance: none;
//       border-radius: 0px;
//       padding: 12px 5px 12px 15px;
//       color: $light_gray;
//       height: 47px;
//       caret-color: $cursor;

//       &:-webkit-autofill {
//         box-shadow: 0 0 0px 1000px $bg inset !important;
//         -webkit-text-fill-color: $cursor !important;
//       }
//     }
//   }

//   .el-form-item {
//     border: 1px solid rgba(255, 255, 255, 0.1);
//     background: rgba(0, 0, 0, 0.1);
//     border-radius: 5px;
//     color: #454545;
//   }
// }
// </style>

<style lang="scss" scoped>

$dark_gray:#889aa4;
$light_gray:#eee;
.login_box {
  width: 1200px;
  height: 800px;
  background-image:url('../../../public/static/img/Web 1920 – 4.png');
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

.el-input{
  width: 300px;
  left: -20px;

}
.btns{
    display: flex;
    justify-content: flex-end;
}

.icon1{
  position: absolute;
  left: -100px;
  top: 30px;
  width: 40px;
  height: 40px;
}

.icon2{
  position: absolute;
  left: -100px;
  top: 65px;
  width: 40px;
  height: 40px;
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
  width: 40%;
  height: 40px;
  margin-left: 10px;
  vertical-align: middle;
  border-radius: 3px;
}


/* .login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
} */
</style>
