require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = {
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
};

/***/ },
/* 2 */
/***/ function(module, exports) {

var roles = ['normalUser', 'departmentAdmin', 'superAdmin'];
module.exports = {
  name: 'user',
  value: {
    role: {
      type: String,
      default: 'normalUser',
      validate: [function (val) {
        return !!roles.find(function (_val) {
          return _val === val;
        });
      }, 'unknown role']
    },
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  }
};

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("md5");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__(12);



// Create koa router
var router = new __WEBPACK_IMPORTED_MODULE_0_koa_router___default.a();
var routerBaseApi = __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].app.routerBaseApi;
// init mongodb connection&&schema
__webpack_require__(11);

router.post('/' + routerBaseApi + '/login', __WEBPACK_IMPORTED_MODULE_2__user__["a" /* login */]).post('/' + routerBaseApi + '/logout', __WEBPACK_IMPORTED_MODULE_2__user__["b" /* logout */]).post('/' + routerBaseApi + '/register', __WEBPACK_IMPORTED_MODULE_2__user__["c" /* register */]).post('/' + routerBaseApi + '/validateToken', __WEBPACK_IMPORTED_MODULE_2__user__["d" /* validateToken */]);
/* harmony default export */ exports["a"] = router;

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Plugins
  */
  plugins: [],
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },

    loader: [{
      test: /\.less$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    }]
  }
};

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = require("koa-static");

/***/ },
/* 10 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schema_user__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Schema_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Schema_user__);


/* eslint-disabled */
var init = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee() {
    var User;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //  initialize model
            User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model(__WEBPACK_IMPORTED_MODULE_4__Schema_user___default.a.name);
            // 先链接数据库然后再查找 不然会一直await
            // connect db

            __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(mongoUrl).then(function () {
              return console.log('database connect successed');
            }, function () {
              return console.warn('database connect failed');
            });
            //  initialize superAdmin
            _context.next = 4;
            return User.findOne({ role: 'superAdmin' }).exec();

          case 4:
            if (_context.sent) {
              _context.next = 7;
              break;
            }

            _context.next = 7;
            return User.create({
              role: 'superAdmin',
              username: '404450662',
              email: '404450662@qq.com',
              password: __WEBPACK_IMPORTED_MODULE_2_md5___default()('gaozhao..'),
              name: 'superAdmin'
            });

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function init() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }






var mongoUrl = 'mongodb://' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.host + ':' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.port + '/' + __WEBPACK_IMPORTED_MODULE_3__config__["a" /* default */].mongodb.database;
init();

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_md5__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mongoose_Schema_user__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mongoose_Schema_user___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mongoose_Schema_user__);
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return validateToken; });


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }







var User = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.model(__WEBPACK_IMPORTED_MODULE_5__mongoose_Schema_user___default.a.name, __WEBPACK_IMPORTED_MODULE_5__mongoose_Schema_user___default.a.value);

var register = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var _ctx$request$body, username, password, email, name, data;

    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password, email = _ctx$request$body.email, name = _ctx$request$body.name;

            password = __WEBPACK_IMPORTED_MODULE_3_md5___default()(password);
            _context.prev = 2;
            _context.next = 5;
            return User.findOne({ username: username }).exec();

          case 5:
            if (!_context.sent) {
              _context.next = 9;
              break;
            }

            return _context.abrupt('return', ctx.body = {
              success: false,
              err: {
                message: 'Username Already Exits'
              }
            });

          case 9:
            _context.next = 11;
            return User.create({
              role: 'normalUser',
              username: username,
              email: email,
              password: password,
              name: name
            });

          case 11:
            data = _context.sent;
            return _context.abrupt('return', ctx.body = {
              success: true,
              data: data
            });

          case 13:
            _context.next = 18;
            break;

          case 15:
            _context.prev = 15;
            _context.t0 = _context['catch'](2);
            return _context.abrupt('return', ctx.body = {
              success: false,
              err: _context.t0
            });

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this, [[2, 15]]);
  }));

  return function register(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var login = function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2(ctx, next) {
    var _ctx$request$body2, username, password, user, secret, token;

    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _ctx$request$body2 = ctx.request.body, username = _ctx$request$body2.username, password = _ctx$request$body2.password;

            password = __WEBPACK_IMPORTED_MODULE_3_md5___default()(password);
            _context2.prev = 2;
            _context2.next = 5;
            return User.findOne({ username: username, password: password }).exec();

          case 5:
            user = _context2.sent;

            if (user) {
              secret = __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].jwt.secret;
              token = __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.sign({ username: user.username, id: user._id }, secret);
              // cookies模块集成在koa中  https://github.com/pillarjs/cookies

              ctx.cookies.set('token', token);
              ctx.body = {
                success: true,
                token: token
              };
            } else {
              ctx.body = {
                success: false,
                err: {
                  message: '用户名密码错误'
                }
              };
            }
            _context2.next = 12;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2['catch'](2);

            ctx.body = {
              success: false,
              err: _context2.t0
            };

          case 12:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this, [[2, 9]]);
  }));

  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var logout = function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee3(ctx, next) {
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            try {
              ctx.cookies.set('token', null);
              ctx.body = {
                success: true,
                data: null
              };
            } catch (e) {
              ctx.body = {
                success: false,
                data: e
              };
            }

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function logout(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var validateToken = function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee4(ctx, next) {
    var _ctx$request$body3, token, username, user;

    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _ctx$request$body3 = ctx.request.body, token = _ctx$request$body3.token, username = _ctx$request$body3.username;

            if (token) {
              _context4.next = 4;
              break;
            }

            ctx.body = {
              success: false,
              err: {
                statusCode: 401,
                message: 'Identity verification failed'
              }
            };
            return _context4.abrupt('return');

          case 4:
            _context4.next = 6;
            return User.findOne({ _id: __WEBPACK_IMPORTED_MODULE_2_jsonwebtoken___default.a.verify(token, __WEBPACK_IMPORTED_MODULE_4__config__["a" /* default */].jwt.secret).id }).exec();

          case 6:
            user = _context4.sent;

            if (!user) {
              ctx.body = {
                success: false,
                err: {
                  statusCode: 404,
                  message: 'Page Not Found'
                }
              };
            } else if (user.username !== username) {
              ctx.body = {
                success: false,
                err: {
                  statusCode: 401,
                  message: 'Identity verification failed'
                }
              };
            } else {
              ctx.body = {
                success: true,
                user: user
              };
            }

          case 8:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, _this);
  }));

  return function validateToken(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ },
/* 13 */
/***/ function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ },
/* 14 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 15 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__API__ = __webpack_require__(5);


var start = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
    var _this = this;

    var app, host, port, config, nuxt, builder;
    return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 3000;
            //  bodyParser: 解析post请求的主体内容 放在ctx.request.body中

            app.use(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default()());
            //  KoaStatic: 解析静态文件
            app.use(__WEBPACK_IMPORTED_MODULE_3_koa_static___default()('.'));
            //  挂载api
            app.use(__WEBPACK_IMPORTED_MODULE_5__API__["a" /* default */].routes());

            // Import and Set Nuxt.js options
            config = __webpack_require__(6);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Nuxt"](config);

            // Build in development

            if (!config.dev) {
              _context2.next = 13;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_2_nuxt__["Builder"](nuxt);
            _context2.next = 13;
            return builder.build();

          case 13:

            app.use(function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
                return __WEBPACK_IMPORTED_MODULE_0_C_Users_Nucky_Desktop_nuxt_koa_node_modules_babel_runtime_6_26_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return next();

                      case 2:
                        ctx.status = 200; // koa defaults to 404 when it sees that status is unset
                        return _context.abrupt('return', new Promise(function (resolve, reject) {
                          ctx.res.on('close', resolve);
                          ctx.res.on('finish', resolve);
                          nuxt.render(ctx.req, ctx.res, function (promise) {
                            // nuxt.render passes a rejected promise into callback on error.
                            promise.then(resolve).catch(reject);
                          });
                        }));

                      case 4:
                      case 'end':
                        return _context.stop();
                    }
                  }
                }, _callee, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());

            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 16:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function start() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








start();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map