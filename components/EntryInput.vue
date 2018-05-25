<template>
    <div class="entry-input-wrap">
        <div class="entry-input-body">
            <input @input="inputHandler" @focus="focusHandler" :value="value" :class="['entry-input' ,!validateObject ? null : validateObject.flag ? 'success' : 'error']" :type="type" :placeholder="placeholder"/>
        </div>
        <div class="entry-input-options">
            
        </div>
        <div :class="['entry-input-prompt',!validateObject ? null : validateObject.flag ? 'success' : 'error']">
            {{!validateObject ? null : validateObject.message}}
        </div>
    </div>
</template>
<script>
export default {
  // 可以自己定义 v-model 具体用法
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    validate: {
      type: Function,
      default: () => ''
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      validateObject: null
    }
  },
  methods: {
    validateAction(value) {
      this.validateObject = this.validate(value)
    },
    focusHandler() {
      this.validateAction(event.target.value)
    },
    inputHandler() {
      //  向父组件传值
      let value = event.target.value
      this.$emit('input', value)
      //  校验
      this.validateAction(event.target.value)
    }
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
      width: 11em;
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
    .entry-input.success{
      border: 1px solid greenyellow;
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
      width: 15em;
      color: #53e3a6;
    }
  }
  .entry-input-prompt {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    top: 2.8em;
  }
  .entry-input-prompt.error{
    color: red;
  }
  .entry-input-prompt.success{
    color: greenyellow;
  }
}
</style>
