<template>
    <div class="entry-input-wrap">
        <div class="entry-input-body">
            <input :name="name" :class="['entry-input' ,!!errors.first(name) ? 'error' : null]" v-validate="validate" :type="type" :placeholder="placeholder"/>
        </div>
        <div class="entry-input-prompt">
            {{errors.first(name)}}
        </div>
    </div>
</template>
<script>
export default {
  props: {
    validate: {
      type: String,
      default: 'required'
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      promptText: '请输入用户名'
    }
  },
  methods: {
  }
}
</script>
<style lang="less" scoped>
.entry-input-wrap {
  margin-top: 2.5em;
  position: relative;
  .entry-input-body {
    position: relative;
    text-align: center;
    .entry-input {
      width: 60%;
      height: 1.5em;
      outline: none;
      border-radius: 0.2em;
      font-size: 1.2em;
      padding: 0.2em 0.4em;
      color: white;
      text-align: center;
      transition: width 0.2s ease;
      border: 1px solid rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.2);
    }
    .entry-input.error{
      border: 1px solid orange;
    }
    .entry-input::-webkit-input-placeholder {
        color: white;
        font-weight: 200;
    }
    .entry-input::-moz-placeholder {
        color: white;
        font-weight: 200;
    }
    .entry-input:focus {
      background-color: white;
      width: 75%;
      color: #53e3a6;
    }
  }
  .entry-input-prompt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    top: 2.8em;
    color: red;
  }
}
</style>
