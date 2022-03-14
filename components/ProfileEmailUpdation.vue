<template>
  <div class='bg-indigo-900 shadow-xl rounded-xl p-5'>
    <div class='flex justify-center font-bold'>UPDATE EMAIL</div>
    <div class='my-4'>
      <div class='mb-2'>Email</div>
      <input type='text' class='w-full focus:outline-none p-2 rounded-lg text-gray-800 mb-2'
             placeholder='Enter your email'>
      <div class='mb-2'>Password</div>
      <input type='text' class='w-full focus:outline-none p-2 rounded-lg text-gray-800 mb-2'
             placeholder='Enter your new password'>
      <div class='mb-2'>Repeat Password</div>
      <input type='text' class='w-full focus:outline-none p-2 rounded-lg text-gray-800 mb-2'
             placeholder='Enter your password'>
    </div>
    <div class='flex justify-center'>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-1/5 focus:outline-none hover:bg-blue-700 mb-2'>
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileEmailUpdation'
}
</script>

<style scoped>

</style>
