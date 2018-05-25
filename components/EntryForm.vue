<template>
    <form>
        <slot></slot>
    </form>
</template>
<script>
export default {
  methods: {
    validate() {
      return this.$slots.default.every(item => {
        const vm = item.componentInstance
        if (/^vue.*entry-input$/.test(item.tag) && vm.validateAction) {
          vm.validateAction(vm.value)
          return vm.validateObject ? vm.validateObject.flag : false
        }
        return true
      })
    }
  }
}
</script>
<style>

</style>
