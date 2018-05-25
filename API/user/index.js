import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import md5 from 'md5'
import config from '../config'
import schema from '../_mongoose/Schema/user'

const User = mongoose.model(schema.name, schema.value)

export const register = async(ctx, next) => {
  let { username, password, email, name } = ctx.request.body
  password = md5(password)
  try {
    if (await User.findOne({ username }).exec()) {
      return (ctx.body = {
        success: false,
        err: {
          message: 'Username Already Exits'
        }
      })
    } else {
    // try无法捕获Promise中的异常 要在promise catch中捕获 这里用await会更好 具体参考:https://segmentfault.com/q/1010000014905440
    // create中若有异常则直接抛出
      let data = await User.create({
        role: 'normalUser',
        username,
        email,
        password,
        name
      })
      return (ctx.body = {
        success: true,
        data
      })
    }
  } catch (e) {
    return (ctx.body = {
      success: false,
      err: e
    })
  }
}
export const login = async(ctx, next) => {
  let { username, password } = ctx.request.body
  password = md5(password)
  try {
    let user = await User.findOne({ username, password }).exec()
    if (user) {
      let secret = config.jwt.secret
      let token = jwt.sign({ username: user.username, id: user._id }, secret)
      // cookies模块集成在koa中  https://github.com/pillarjs/cookies
      ctx.cookies.set('token', token)
      ctx.body = {
        success: true,
        token
      }
    } else {
      ctx.body = {
        success: false,
        err: {
          message: '用户名密码错误'
        }
      }
    }
  } catch (e) {
    ctx.body = {
      success: false,
      err: e
    }
  }
}
export const logout = async(ctx, next) => {
  try {
    ctx.cookies.set('token', null)
    ctx.body = {
      success: true,
      data: null
    }
  } catch (e) {
    ctx.body = {
      success: false,
      data: e
    }
  }
}
export const validateToken = async (ctx, next) => {
  let { token, username } = ctx.request.body
  if (!token) {
    ctx.body = {
      success: false,
      err: {
        statusCode: 401,
        message: 'Identity verification failed'
      }
    }
    return
  }
  let user = await User.findOne({_id: jwt.verify(token, config.jwt.secret).id}).exec()
  if (!user) {
    ctx.body = {
      success: false,
      err: {
        statusCode: 404,
        message: 'Page Not Found'
      }
    }
  } else if (user.username !== username) {
    ctx.body = {
      success: false,
      err: {
        statusCode: 401,
        message: 'Identity verification failed'
      }
    }
  } else {
    ctx.body = {
      success: true,
      user: user
    }
  }
}
