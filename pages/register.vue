<template>
  <div class='flex flex-wrap'>
    <div class='md:w-2/3 w-full'></div>
    <div class='md:w-1/3 w-full p-5 flex flex-col justify-between min-h-screen relative'>
      <div class='absolute top-0 right-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>
      <div class='mt-12 w-full flex items-center mb-5 justify-center'>
        <Logo></Logo>
      </div>
      <div class='text-center text-gray-100 text-3xl font-bold'>REGISTER</div>
      <p class='text-center my-4 px-10'>Please connect to your tronlink wallet to register</p>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'>
        Connect Tronlink Wallet
      </button>
      <div>
        <div class='mt-3'>Your sponsor wallet</div>
        <input type='text'
               class='mt-4 rounded-lg h-10 text-gray-900 px-2 w-full focus:outline-none py-1'
               placeholder='Enter your wallet'>
      </div>
      <div class='flex flex-col mt-4 items-center'>
        <p>Click Login button if you already have account</p>
        <NuxtLink to='/login'>
          <button type='button'
                  class='self-center p-2 rounded-lg bg-blue-600 text-gray-200 w-40 focus:outline-none hover:bg-blue-700 my-5'>
            Login
          </button>
        </NuxtLink>
      </div>
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
