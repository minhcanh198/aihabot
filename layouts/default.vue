<template>
  <div class='flex flex-row min-h-screen bg-gray-200 text-gray-800'>
    <sidebar></sidebar>
    <div class='flex flex-col w-full'>
      <div class='flex justify-between border-b border-gray-400 p-3 bg-indigo-900'>
        <div class='text-gray-500 hover:text-gray-100'>Menu</div>
        <div class='flex'>
          <div class='px-3 text-gray-500 hover:text-gray-100'>
            Balance: <span class='text-yellow-300'>900,000</span>
          </div>
          <div class='text-gray-500 hover:text-gray-100'>
            Profile
          </div>
        </div>
      </div>
      <div class='px-3 py-5 bg-blue-100'>Title</div>
      <div class='flex flex-wrap p-3 flex-grow items-center'>
        <div class='md:w-2/3 w-full text-center bg-red-200 h-full'><strong>left</strong></div>
        <div class='md:w-1/3 w-full  text-center bg-indigo-500 h-full'><strong>right</strong></div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '~/components/Sidebar'

export default {
  components: {
    Sidebar: Sidebar
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
