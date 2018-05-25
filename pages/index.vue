<template>
  <div class="entry-container">
    <div class="entry-header">
      <p>Welcome to XXXXX</p>
    </div>
    <div :class="['login-body', 'rotate', isLogin ? 'active' : null]">
      <entry-form ref="login" id="login">
        <entry-input v-model="usernameLogin" :validate="validators.usernameValidator" :placeholder="'请输入用户名'" ></entry-input>
        <entry-input v-model="passwordLogin" :validate="validators.passwordValidator" :placeholder="'请输入密码'" :type="'password'"></entry-input>
        <div class="submit-button-container">
          <button class="submit-button" @click="login">登陆</button>
          <span class="submit-prompt">{{loginPromptText}}</span>
        </div>
        <span class="toggle" @click="isLogin = !isLogin">注册</span>
      </entry-form>
    </div>
    <div :class="['register-body', 'rotate', !isLogin ? 'active' : null]">
      <entry-form ref="register" id="register">
        <entry-input v-model="usernameRegister" :validate="validators.usernameValidator" :placeholder="'请输入用户名'" ></entry-input>
        <entry-input v-model="passwordRegister" :validate="validators.passwordValidator" :placeholder="'请输入密码'" :type="'password'"></entry-input>
        <entry-input v-model="passwordRegisterConfirm" :validate="validators.passwordConfirmValidator" :placeholder="'请确认密码'" :type="'password'"></entry-input>
        <entry-input v-model="emailRegister" :validate="validators.emailValidator" :placeholder="'请输入邮箱'"></entry-input>
        <entry-input v-model="nameRegister" :validate="validators.nameValidator" :placeholder="'请输入您的真实姓名'"></entry-input>
        <div class="submit-button-container">
          <button class="submit-button" @click="register">注册</button>
          <span class="submit-prompt">{{registerPromptText}}</span>
        </div>
        <span class="toggle" @click="togglePanel">go back</span>
      </entry-form>
    </div>
    <div style="clear: both"></div>
  </div>
</template>
<script>
import Input from '~/components/EntryInput.vue'
import Form from '~/components/EntryForm.vue'
import Swal from '~/plugins/alert.js'
export default {
  components: {
    'entry-input': Input,
    'entry-form': Form
  },
  layout: 'entry',
  data() {
    return {
      loginPromptText: '',
      registerPromptText: '',
      isLogin: true,
      usernameLogin: '',
      passwordLogin: '',
      usernameRegister: '',
      passwordRegister: '',
      passwordRegisterConfirm: '',
      emailRegister: '',
      nameRegister: '',
      validators: {}
    }
  },
  created() {
    //  created钩子里设置校验器 方便获取this
    this.$set(this.validators, 'passwordConfirmValidator', function (value) {
      if (this.passwordRegister !== value) {
        return {
          flag: false,
          message: '两次密码输入不同'
        }
      }
      if (value.length < 6) {
        return {
          flag: false,
          message: '密码不能少于六位'
        }
      }
      return {
        flag: true,
        message: '密码校验正确'
      }
    }.bind(this))
    this.$set(this.validators, 'usernameValidator', function (value) {
      if (!value.length) {
        return {
          flag: false,
          message: '用户名不能为空'
        }
      }
      return {
        flag: true,
        message: '用户名格式正确'
      }
    })
    this.$set(this.validators, 'passwordValidator', function (value) {
      if (value.length < 6) {
        return {
          flag: false,
          message: '密码不能少于六位'
        }
      }
      return {
        flag: true,
        message: '密码格式正确'
      }
    })
    this.$set(this.validators, 'emailValidator', function (value) {
      if (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)) {
        return {
          flag: true,
          message: '邮箱格式正确'
        }
      }
      return {
        flag: false,
        message: '请输入正确的邮箱'
      }
    })
    this.$set(this.validators, 'nameValidator', function (value) {
      if (!value.length) {
        return {
          flag: false,
          message: '姓名不能为空'
        }
      }
      return {
        flag: true,
        message: '姓名格式正确'
      }
    })
  },
  methods: {
    togglePanel() {
      this.isLogin = !this.isLogin
    },
    login() {
      event.preventDefault()
      if (this.$refs.login.validate()) {
        this.$store.dispatch('LOGIN', {
          username: this.usernameLogin,
          password: this.passwordLogin
        }).then(resp => {
          let { data } = resp
          if (data.success) {
            Swal({title: '登陆成功', confirmButtonText: '前往主页', cancelButtonText: '留在登陆页'}).then(result => {
              this.$store.commit('SET_TOKEN', data.token)
              if (result.value) {
                location.href = `${location.protocol}//${location.host}/user/${this.usernameLogin}`
              }
            })
          } else {
            Swal({title: '登陆失败', type: 'warning', text: data.err.message})
          }
        })
      }
    },
    register() {
      event.preventDefault()
      if (this.$refs.register.validate()) {
        this.$store.dispatch('REGISTER', {
          username: this.usernameRegister,
          password: this.passwordRegister,
          email: this.emailRegister,
          name: this.nameRegister
        }).then(resp => {
          let { data } = resp
          console.log(data)
          if (data.success) {
            Swal({title: '注册成功', text: `您的账号是${data.data.username}`, type: 'success'}).then(() => location.reload())
          } else {
            Swal({title: '注册失败', text: data.err.message, type: 'warning'})
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.entry-container{
  position: relative;
  color: white;
  .entry-header{
    font-size: 2.5em;
    font-weight: 200;
    transition-duration: 1s;
  }
  .rotate{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 60vh;
    transition: all .8s ease-in-out;
    -webkit-backface-visibility: hidden;
    .toggle{
      float: right;
      margin-top: 1.5em;
      cursor: pointer;
    }
  }
  .rotate:not(.active){
    transform: translateX(-50%) rotateY(180deg);
  }
  .login-body,.register-body{
    .submit-button-container{
      margin-top: 2.5em;
      position: relative;
      .submit-button{
          background-color: white;
          border: 0;
          height: 2em;
          padding: 0.2em 0.4em;
          color: #53e3a6;
          border-radius: 0.2em;
          width: 50%;
          font-size: 1.2em;
          cursor: pointer;
          transition-duration: 0.25s;
      }
      .submit-prompt{
        position: absolute;
      }
      .submit-button:hover{
        background-color: #f5f7f9;
      }
    }
  }
}
</style>
