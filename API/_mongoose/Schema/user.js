const roles = ['normalUser', 'departmentAdmin', 'superAdmin']
module.exports = {
  name: 'user',
  value: {
    role: {
      type: String,
      default: 'normalUser',
      validate: [val => !!roles.find(_val => _val === val), 'unknown role']
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
}
