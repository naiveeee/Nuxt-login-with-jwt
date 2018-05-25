<template>
    <div style="text-align: center;margin-top: 5em;">
      <p>{{`userId: ${userId}`}}</p>
      <p><a href="#" @click="logout">logout</a></p>
    </div>
</template>
<script>
import Swal from '~/plugins/alert'
import { getTokenFromCookie } from '~/utils'
import axios from 'axios'
export default {
  async asyncData({ req, error, params, store }) {
    let { data } = await axios.post(`${store.getters.baseUrl}/validateToken`, {
      username: params.username,
      token: getTokenFromCookie(req)
    })
    if (!data.success) {
      let { statusCode, message } = data.err
      error({
        statusCode,
        message
      })
    } else {
      let { user } = data
      return {userId: user._id}
    }
  },
  methods: {
    logout() {
      event.preventDefault()
      this.$store.dispatch('LOGOUT').then(resp => {
        let { data } = resp
        if (data.success) {
          location.href = `${location.protocol}//${location.host}`
        } else {
          Swal({title: '注销失败', type: 'warning', text: '请手动清除cookies'})
        }
      })
    }
  }
}
</script>
<style>

</style>
