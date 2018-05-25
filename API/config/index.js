export default {
  jwt: {
    secret: 'nuxt-login'
  },
  mongodb: {
    host: '127.0.0.1',
    database: 'nuxt-login',
    port: 27017,
    username: '',
    password: ''
  },
  app: {
    host: '127.0.0.1',
    port: 3000,
    routerBaseApi: 'api'
  }
}
