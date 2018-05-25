import Router from 'koa-router'
import config from './config'
import * as userApi from './user'
// Create koa router
const router = new Router()
const routerBaseApi = config.app.routerBaseApi
// init mongodb connection&&schema
require('./_mongoose')

router
  .post(`/${routerBaseApi}/login`, userApi.login)
  .post(`/${routerBaseApi}/logout`, userApi.logout)
  .post(`/${routerBaseApi}/register`, userApi.register)
  .post(`/${routerBaseApi}/validateToken`, userApi.validateToken)
export default router
