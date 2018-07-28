<template  >
  <div class="signup">
    <div class="signup-header">
      <h1>思沃学院</h1>
    </div>
    <el-form :model="signupForm" :rules="rules" ref="signupForm" label-width="120px">
      <el-form-item label="用户名：" prop="userName">
        <el-col :span="12">
          <el-input v-model="signupForm.userName" placeholder="必须是1-10个英文字符，不能有空格"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="密码：" prop="password">
        <el-col :span="12">
          <el-input type="password" v-model="signupForm.password" placeholder="必须是大于8个的数字，不能有空格"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item  prop="message" >
        <el-col :span="12">
          <label v-model="signupForm.message" class="signup-message">{{signupForm.message}}</label>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-button type="primary" @click="submitForm('signupForm')" class="signup-button">注册</el-button>
        </el-col>
      </el-form-item>
      <el-form-item class="signup-login">
        <el-col >
          <span>已注册？</span>
          <router-link to="/">登陆</router-link>
        </el-col>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import api from '@/api/';
  import router from '@/router/index';
  import Axios from 'axios';

  export default {
    data() {
      var validateUser = (rule, value, cb) => {
        var pattern = /^[a-zA-Z]{1,10}$/g;
        if (value === '') {
          cb(new Error('请输入用户名'))
        } else if (!pattern.test(value)) {
          cb(new Error())
        } else {
          cb()
        }
      }
      var validatePwd = (rule, value, cb) => {
        var pattern = /^[0-9]{9,}$/g;
        if (!pattern.test(value)) {
          cb(new Error())
        }else{
          cb();
        }
      }
      return {
        title: '',
        signupForm: {
          userName: '',
          password: '',
          message: ''
        },
        rules: {
          userName: [
            {validator: validateUser ,message: '必须是1-10个英文字符，不能有空格', trigger: 'blur'},
          ],
          password: [
            { validator: validatePwd, message: '必须是大于8个的数字，不能有空格', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm(signupForm) {
        this.$refs[signupForm].validate((valid) => {
          if (valid) {
            let data = {
              'name': this.signupForm.userName,
              'password': this.signupForm.password,
            }
            Axios({
              method: 'post',
              url: '/api/users',
              data: data,
              config: { headers: {'Content-Type': 'multipart/form-data' }}
            })
              .then(res => {
                if ('username' in res.data) {
                  router.push({name: 'Login'})
                } else if ('message' in res.data) {
                  this.signupForm.message=res.data.message;
                }
              })
              .catch(err => {
                console.log("wwww" + err)
              })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style scoped>
  .signup{
    width: 50%;
    margin-left: 25%;
    text-align: center;
  }

  .signup .signup-header{
    border-bottom: gainsboro solid 1px;
    margin-bottom: 20px;
  }

  .signup .signup-button{
    width:100%;
    background-color: dodgerblue;
  }

  .signup .signup-login{
    text-align: left;
  }

  .signup .signup-message{
    color: red;
  }
</style>
