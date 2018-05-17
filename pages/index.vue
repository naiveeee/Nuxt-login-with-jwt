<template>
  <div class="login-container">
    <div class="login-header">
      <p>Welcome to XXXXX</p>
    </div>
    <div class="login-body">
      <form id="login">
        <entry-input :name="'username'" :placeholder="'请输入用户名'"></entry-input>
        <entry-input :validate="'required|min:6'" :name="'password'" :placeholder="'密码'" :type="'password'"></entry-input>
      </form>
    </div>
  </div>
</template>
<script>
import Input from '~/components/EntryInput.vue'
export default {
  components: {
    'entry-input': Input
  },
  layout: 'entry'
}
</script>

<style lang="less" scoped>
.login-container{
  color: white;
  .login-header{
    font-size: 2.5em;
    font-weight: 200;
    transition-duration: 1s;
  }
}
</style>
