<template>
  <div class='bg-indigo-900 shadow-xl rounded-xl p-3'>
    <div class='flex justify-center'>
      <img
        src='https://teky.edu.vn/blog/wp-content/uploads/2021/07/thong-tin-ve-cong-nghe-blockchain.jpg'
        alt='avatar'
        class='object-center object-cover rounded-full w-20 h-20'
      >
    </div>
    <div class='m-3'>
      <div>ID: <span class='text-orange-400'>34567</span></div>
      <div>Wallet: <span class='text-orange-400'>ỉuhgsigefrygshgskigdf</span></div>
      <div>Email: <span class='text-orange-400'>mail@mail.com</span></div>
    </div>
    <div class='my-4'>
      <button type='button'
              class='p-2 rounded-lg bg-gray-400 text-blue-500 w-full focus:outline-none hover:bg-gray-300 mb-2'>
        Connect API key Binance
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-gray-400 text-blue-500 w-full focus:outline-none hover:bg-gray-300 mb-2'>
        Connect telegram
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-gray-400 text-blue-500 w-full focus:outline-none hover:bg-gray-300'>
        Active 2FA
      </button>
    </div>
    <div class='mb-2'>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'>
        UPDATE EMAIL
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'>
        CONNECT BINANCE API-KEY
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700'>
        TWO-FACTOR AUTHENTICATOR
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfilePanel'
}
</script>

<style scoped>

</style>
