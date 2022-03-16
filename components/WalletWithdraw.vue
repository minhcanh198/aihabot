<template>
  <div class='m-3'>
    <div class='flex flex-col items-center p-3 rounded-2xl shadow-xl relative'>
      <div class='absolute top-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>

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
