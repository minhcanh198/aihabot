<template>
  <div class='m-3'>
    <div class='flex flex-col items-center p-3 rounded-2xl shadow-xl relative'>
      <div class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
      <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
      <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>
      <div>Total Withdraw</div>
      <div class='font-bold text-lg my-2'>19,000$</div>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-white w-2/3 focus:outline-none hover:bg-blue-700'>
        WITHDRAW
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WalletWithdraw'
}
</script>

<style scoped>

</style>
