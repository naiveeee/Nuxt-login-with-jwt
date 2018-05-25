<template>
    <h1 class="error">{{error.message}}</h1>
</template>
<script>
export default {
  props: ['error']
}
</script>
<style>
    .error{
        text-align: center;
    }
</style>
