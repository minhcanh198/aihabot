<template>
  <div class='m-3 text-gray-200 rounded-2xl h-full shadow-xl relative'>
    <div class='absolute top-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>
    <div class='p-4'>
      <div class='flex justify-center'>
        <div class='flex flex-col items-center'>
          <div class='text-2xl'>20</div>
          <div class='font-bold'>Members</div>
        </div>
      </div>
      <div>Your wallet</div>
      <div class='flex flex-wrap'>
        <input type='text' class='focus:outline-none rounded-l-lg w-4/5'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-white focus:outline-none hover:bg-blue-700 text-sm w-1/5'>
          Copy
        </button>
      </div>
      <div class='mt-3'>Link</div>
      <div class='flex flex-wrap'>
        <input type='text' class='focus:outline-none rounded-l-lg w-4/5'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-white focus:outline-none hover:bg-blue-700  text-sm w-1/5'>
          Copy
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MemberCard'
}
</script>

<style scoped>

</style>
