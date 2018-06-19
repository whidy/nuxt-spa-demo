<template>
  <section class="container">
    <div class="demo-wrap">
      <app-logo/>
      <h1 class="title">
        nuxt-spa-demo
      </h1>
      <h2 class="subtitle">
        Examples of subtitle
      </h2>
      <div class="content">
        <p>All exmaples start here</p>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.demo-wrap {
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 28px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 20px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
.content {
  
}
</style>