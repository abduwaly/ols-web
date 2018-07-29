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
  .form-message{
    color: red;
    padding-left: 60px;
  }
</style>
<template>
  <div class="page-content">
    <div class="login-header">
      <p class="header-title">思沃学院</p>
    </div>
    <el-form class="login-form" :model="signInForm" :rules="rules" ref="signInForm" label-width="120px">
      <h2 class="center">Sign In</h2>
      <el-form-item prop="userName">
        <el-col :span="24" class="el-col">
          <el-input v-model="signInForm.userName" placeholder="Username"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item prop="password">
        <el-col :span="24" class="el-col">
          <el-input type="password" v-model="signInForm.password" placeholder="Password"></el-input>
        </el-col>
      </el-form-item>
      <p>
        <label class="form-message">{{signInForm.message}}</label>
      </p>
      <el-form-item>
        <el-col :span="24" class="el-col">
          <el-button class="login-button" type="primary" @click="submitForm('signInForm')">Sign In</el-button>
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
  import api from '@/api/index';
  import router from '@/router/index';

  export default {
    data() {
      return {
        signInForm: {
          userName: '',
          password: '',
          message: ''
        },
        rules: {
          userName: [
            {required: false, message: '请输入用户名', trigger: ['blur', 'change']},
          ],
          password: [
            {required: false, message: '请输入密码', trigger: ['blur', 'change']}
          ]
        }
      }
    },
    methods: {
      submitForm(signInForm) {
        this.$refs[signInForm].validate((valid) => {
          if (valid) {
            let data = {
              'username': this.signInForm.userName,
              'password': this.signInForm.password,
            };
            api.signIn(data).then(response => {
              console.log(response);
              if(response.data.code === '0'){
                router.push({name:'StudyCard'})
              }else{
                this.signInForm.message = response.data.message;
              }
            })
          } else {
            return false;
          }
        })
      }
    }

  }
</script>
