<template>
  <div class='flex flex-wrap'>
    <div class='md:w-2/3 w-full'></div>
    <div class='md:w-1/3 w-full p-5 flex flex-col justify-between min-h-screen relative'>
      <div class='absolute top-0 right-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>
      <div class='mt-12 w-full flex items-center mb-5 justify-center'>
        <Logo></Logo>
      </div>
      <div class='text-center text-gray-100 text-3xl font-bold'>LOGIN</div>
      <p class='text-center my-4'>Please choose a login method</p>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'>
        Login By Tronlink Wallet
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'>
        Login By Email
      </button>
      <div>
        <div class='mt-3'>Email</div>
        <input type='text'
               class='mt-2 rounded-lg h-10 text-gray-900 px-2 w-full focus:outline-none py-1'
               placeholder='Enter your email'>
        <div class='mt-3'>Password</div>
        <input type='text'
               class='mt-2 rounded-lg h-10 text-gray-900 px-2 w-full focus:outline-none py-1'
               placeholder='Enter your password'>
      </div>
      <NuxtLink to='/' class='flex w-full justify-center'>
        <button type='button'
                class='self-center p-2 rounded-lg bg-blue-600 text-gray-200 w-1/3 focus:outline-none hover:bg-blue-700 my-3'>
          Login
        </button>
      </NuxtLink>
      <NuxtLink to='/register' class='flex w-full justify-center'>
        <button type='button'
                class='self-center p-2 rounded-lg bg-greena text-gray-200 w-1/2 focus:outline-none hover:bg-green-500 my-3'>
          Register
        </button>
      </NuxtLink>

    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  layout: 'auth'
}
</script>

<style scoped>

</style>
