<template>
  <div class='shadow-xl rounded-xl p-5 relative'>
    <div class='absolute right-0 top-0 rounded-xl h-full w-full bg-bluea opacity-50 -z-10'></div>
    <div class='flex justify-center font-bold'>CONNECT BINANCE API-KEY</div>
    <div class='my-4'>
      <div class='mb-2'>Binance API key</div>
      <div class='flex'>
        <input type='text' class='w-5/6 focus:outline-none p-2 rounded-l-lg text-gray-800 mb-2'
               placeholder='Enter API key'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
          Copy
        </button>
      </div>
      <div class='mb-2'>Secret key</div>
      <div class='flex'>
        <input type='text' class='w-5/6 focus:outline-none p-2 rounded-l-lg text-gray-800 mb-2'
               placeholder='Enter secret key'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
          Copy
        </button>
      </div>
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
  name: 'ProfileConnectBinance'
}
</script>

<style scoped>

</style>
