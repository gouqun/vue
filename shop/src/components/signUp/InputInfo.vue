<template>
  <div class="info-form">
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" >
        <FormItem label="用户名" prop="login_name">
            <i-input v-model="formValidate.login_name" clearable size="large" placeholder="请输入你的姓名"></i-input>
        </FormItem>
        <FormItem label="邮箱" prop="customer_email">
            <i-input v-model="formValidate.customer_email" clearable size="large" placeholder="请输入你的邮箱"></i-input>
        </FormItem>
        <FormItem label="密码" prop="password">
            <i-input type="password" v-model="formValidate.password" clearable size="large" placeholder="请输入你的密码"></i-input>
        </FormItem>
        <FormItem label="确认密码" prop="req_password">
            <i-input type="password" v-model="formValidate.req_password" clearable size="large" placeholder="请再次输入你的密码"></i-input>
        </FormItem>
        <Button type="error" size="large" long @click="handleSubmit('formValidate')">注册</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
import { mapMutations, mapActions } from 'vuex';
export default {
  name: 'InputInfo',
  data () {
    const validatePassCheck = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.formValidate.password) {
        callback(new Error('两次输入的密码不一样'));
      } else {
        callback();
      }
    };
    let patter = /^[a-zA-Z]+$/;
    let isNumber = (rule, value, callback) => {
      if (!patter.test(value)) {
        return callback(new Error('请输入英文'));
      } else {
        callback();
      }
    };
    return {
      formValidate: {
        name: '',
        customer_email: '',
        password: '',
        req_password: ''
      },
      ruleValidate: {
        login_name: [
          { required: true, message: '用户名不能为空', trigger: 'blur' },
          { validator: isNumber, trigger: 'blur' }
        ],
        customer_email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' },
          { type: 'email', message: '邮箱格式错误', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码长度不能小于6', trigger: 'blur' }
        ],
        req_password: [
          { validator: validatePassCheck, trigger: 'blur' }
        ]
      }
    };
  },
  mounted: function () {
    this.formValidate.phone = this.$route.query.phone;
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
    ...mapActions(['addSignUpUser']),
    handleSubmit (name) {
      // const father = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          // this.$Message.success('注册成功');
          const userinfo = {
            login_name: this.formValidate.login_name,
            password: this.formValidate.password,
            customer_email: this.formValidate.customer_email,
            mobile_phone: this.$route.query.phone
          };
          this.addSignUpUser(userinfo).then(result => {
            if (result) {
              this.$router.push({ path: '/SignUp/signUpDone' });
              this.SET_SIGN_UP_SETP(2);
            } else {
              this.$Message.error(this.$store.state.error);
            }
          });
        } else {
          this.$Message.error('注册失败');
        }
      });
    }
  },
  store
};
</script>

<style scoped>
.info-form {
  width: 90% !important;
}
</style>
