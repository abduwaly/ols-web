<template>

  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="signup">
    <div class="signup-header">
      <h1>思沃学院</h1>
    </div>
    <el-form-item label="用户名：" prop="userName">
      <el-col :span="12">
        <el-input v-model="ruleForm.userName" placeholder="必须是1-10个英文字符，不能有空格"></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="密码：" prop="password">
      <el-col :span="12">
        <el-input type="password" v-model="ruleForm.password" placeholder="必须是大于8个的数字，不能有空格"></el-input>
      </el-col>
    </el-form-item>

    <el-form-item>
      <el-col :span="12">
        <el-button type="primary" @click="submitForm('ruleForm')" class="signup-button">注册</el-button>
      </el-col>
    </el-form-item>
    <el-form-item class="signup-login">
      <el-col >
        <span>已注册？</span>
        <router-link to="/">登陆</router-link>
      </el-col>
    </el-form-item>
  </el-form>
</template>

<script>
  import api from '@/api'

  export default {
    data() {
      var validateUser = (rule, value, cb) => {
        var pattern = '/^[a-zA-Z]{1,10}$/g';
        if (value === '') {
          cb(new Error('请输入用户名'))
        } else if (!pattern.test(value)) {
          cb(new Error())
        } else {
          cb()
        }
      }
      var validatePwd = (rule, value, cb) => {
        var pattern = '/^[0-9]{9,}$/g';
        if (!pattern.test(value)) {
          cb(new Error())
        }else{
          cb();
        }
      }
      return {
        ruleForm: {
          userName: '',
          password: '',
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
      submitForm(formName) {
        api.login();
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
</style>
