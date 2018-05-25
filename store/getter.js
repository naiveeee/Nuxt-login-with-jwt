import config from '../API/config'
export default {
  baseUrl() {
    return `http://localhost:${config.app.port}/${config.app.routerBaseApi}`
  },
  routerBaseApi() {
    return config.app.routerBaseApi
  }
}
