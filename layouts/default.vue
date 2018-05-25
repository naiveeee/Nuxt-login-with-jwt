<template>
  <main>
    <my-nav></my-nav>
    <nuxt/>
    <my-footer></my-footer>
  </main>
</template> 

<script>
import Nav from '~/components/Nav.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    'my-nav': Nav,
    'my-footer': Footer
  }
}
</script>

<style>
</style>
