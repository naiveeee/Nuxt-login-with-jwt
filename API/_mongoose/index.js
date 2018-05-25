import mongoose from 'mongoose'
import md5 from 'md5'
import config from '../config'
import userSchema from './Schema/user'

const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
/* eslint-disabled */
async function init() {
  //  initialize model
  const User = mongoose.model(userSchema.name)
  // 先链接数据库然后再查找 不然会一直await
  // connect db
  mongoose.connect(mongoUrl)
  .then(() => console.log('database connect successed'), () => console.warn('database connect failed'))
  //  initialize superAdmin
  if (!await User.findOne({ role: 'superAdmin' }).exec()) {
    await User.create({
      role: 'superAdmin',
      username: '404450662',
      email: '404450662@qq.com',
      password: md5('gaozhao..'),
      name: 'superAdmin'
    })
  }
}
init()
