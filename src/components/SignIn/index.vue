<style scoped>
  .page-content{
    width: 500px;
    margin: 0 auto;
  }
  .header-title{
    font-size: 50px;
    text-align: center;
    padding: 25px 0;
    margin: 30px 0;
    border-bottom: #ccc .5px solid;
  }
  .login-form{
    margin-top: 20px;
  }
  .el-col{
    transform: translateX(-60px);
  }
  .login-button{
    width: 100%;
    background-color: #0178bb;
    border-color: #0178bb;
  }
  .center{
    text-align: center;
  }
</style>
<template>
  <div class="page-content">
    <div class="login-header">
      <p class="header-title">思沃学院</p>
    </div>
    <el-form class="login-form" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px">
      <h2 class="center">Sign In</h2>
      <el-form-item prop="userName">
        <el-col :span="24" class="el-col">
          <el-input v-model="ruleForm.userName" placeholder="Username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="password">
        <el-col :span="24" class="el-col">
          <el-input type="password" v-model="ruleForm.password" placeholder="Password"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="24" class="el-col">
          <el-button class="login-button" type="primary" @click="submitForm('ruleForm')">Sign In</el-button>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="24" class="el-col">
           新用户？ <router-link to="/signup">注册</router-link>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import api from '@/api'

  export default {
    data() {
      return {
        ruleForm: {
          userName: '',
          password: '',
          capture: '',
        },
        rules: {
          userName: [
            {required: true, message: '请输入用户名', trigger: ['blur', 'change']},
          ],
          password: [
            {required: true, message: '请输入密码', trigger: ['blur', 'change']}
          ]
        }
      }
    },
    methods: {
      submitForm(formName) {
        api.login();
      }
    }
  }
</script>
