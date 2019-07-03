<template>
  <div class="info-form">
    <Form ref="formValidate" :model="formValidate" :label-width="80" :rules="ruleValidate">
      <FormItem label="手机号" prop="phone">
          <i-input v-model="formValidate.phone" clearable size="large"  placeholder="请输入手机号"></i-input>
      </FormItem>
      <FormItem label="验证码" prop="checkNum">
<<<<<<< HEAD
          <i-input v-model="formValidate.checkNum" size="large"  placeholder="请输入验证码">
=======
          <i-input v-model="formValidate.code" size="large"  placeholder="请输入验证码">
>>>>>>> gouqun1
            <Button slot="append" @click="getcheckNum">获取验证码</Button>
          </i-input>
      </FormItem>
      <Button type="error" size="large" long @click="handleSubmit('formValidate')">验证手机号</Button>
    </Form>
  </div>
</template>

<script>
import store from '@/vuex/store';
<<<<<<< HEAD
import { mapMutations } from 'vuex';
=======
import { mapMutations, mapActions } from 'vuex';
>>>>>>> gouqun1
export default {
  name: 'CheckPhone',
  data () {
    return {
      formValidate: {
        phone: '',
<<<<<<< HEAD
        checkNum: ''
=======
        code: ''
>>>>>>> gouqun1
      },
      ruleValidate: {
        phone: [
          { required: true, message: '手机号不能为空', trigger: 'blur' },
          { type: 'string', pattern: /^1[3|4|5|7|8][0-9]{9}$/, message: '手机号格式出错', trigger: 'blur' }
        ],
<<<<<<< HEAD
        checkNum: [
          { required: true, message: '必须填写验证码', trigger: 'blur' },
          { type: 'string', min: 4, max: 4, message: '验证码长度错误', trigger: 'blur' }
=======
        code: [
          { required: true, message: '必须填写验证码', trigger: 'blur' },
          { type: 'string', min: 4, max: 6, message: '验证码长度错误', trigger: 'blur' }
>>>>>>> gouqun1
        ]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_SIGN_UP_SETP']),
<<<<<<< HEAD
    getcheckNum () {
      if (this.formValidate.phone.length === 11) {
        this.$Message.success({
          content: '验证码为: 1234',
          duration: 6,
          closable: true
=======
    ...mapActions(['send', 'sendcode']),
    getcheckNum () {
      const father = this;
      if (this.formValidate.phone.length === 11) {
        this.send(father.formValidate).then(result => {
          if (result) {
            this.$Message.success('短信已发送');
          } else {
            this.$Message.error('发送失败');
          }
>>>>>>> gouqun1
        });
      } else {
        this.$Message.error({
          content: '请输入正确的手机号',
          duration: 6,
          closable: true
        });
      }
    },
    handleSubmit (name) { // 提交验证
<<<<<<< HEAD
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });
          this.SET_SIGN_UP_SETP(1);
=======
      const father = this;
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.sendcode(father.formValidate).then(result => {
            if (result) {
              this.$router.push({ path: '/SignUp/inputInfo', query: { phone: this.formValidate.phone } });
              this.SET_SIGN_UP_SETP(1);
            } else {
              this.$Message.error('请重新发送');
            }
          });
>>>>>>> gouqun1
        } else {
          this.$Message.error({
            content: '请填写正确的信息',
            duration: 6,
            closable: true
          });
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
