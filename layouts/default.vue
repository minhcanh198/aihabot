<template>
  <div class='flex flex-row min-h-screen bg-gray-200 text-gray-800'>
    <sidebar></sidebar>
    <div class='flex flex-col w-full'>
      <aihabot-header></aihabot-header>
      <nuxt></nuxt>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'
import Header from '~/components/Header'

export default {
  components: {
    Sidebar: Sidebar,
    AihabotHeader: Header
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
  Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
