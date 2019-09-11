<template>
  <div class="login-container">
    <el-card class="login-card">
      <h3 class="login-card-title">系统登录</h3>
      <el-form :model="form" ref="form" :rules="rules" size="medium" @keydown.enter.native="submitLogin">
        <el-form-item prop="userName">
          <el-input v-model.trim="form.userName" size="medium" autofocus>
            <i slot="prefix" class="el-icon-user login-icon"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input type="password" v-model.trim="form.password" size="medium">
            <i slot="prefix" class="el-icon-lock login-icon"></i>
          </el-input>
        </el-form-item>
         <el-form-item>
           <el-button type="primary" size="medium" :loading="loading" class="login-btn" @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="login-tips">账号：admin &emsp;密码：123456</p>
    </el-card>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [{ required: true, message: '用户名不能为空' }],
        password: [{ required: true, message: '密码不能为空' }]
      },
      loading: false
    }
  },
  methods: {
    submitLogin () {
      this.$refs.form.validate(async valid => {
        if (valid) {
          const { userName, password } = this.form
          if (userName === 'admin' && password === '123456') {
            this.loading = true
            setTimeout(() => {
              this.$router.push('/index')
            }, 1200)
          } else {
            this.$notify.error({
              title: '提示',
              message: '账号或密码有误，请重新输入！',
              position: 'bottom-right'
            })
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  position: relative;

  .login-card {
    width: 480px;
    position: absolute;
    left: 50%;
    margin-left: -240px;
    margin-top: 280px;

    .login-card-title {
      font-size: 24px;
      font-weight: 500;
      text-align: center;
      padding: 20px 0;
    }
    .el-form {
      padding: 0 15px 10px 15px;
      .el-form-item {
        .login-icon {
          font-size: 18px;
          padding-left: 5px;
        }
      }
      .login-btn {
        width: 100%;
      }
    }
  }

  .login-tips {
    padding: 0 15px;
    color: #999;
    text-align: center;
  }
}
</style>
