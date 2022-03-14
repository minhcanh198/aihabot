<template>
  <div class='m-3 text-gray-200 bg-indigo-900 rounded-2xl h-full shadow-xl'>
    <div class='p-4'>
      <div class='flex justify-center'>
        <div class='flex flex-col items-center'>
          <div class='text-2xl'>20</div>
          <div class='font-bold'>Members</div>
        </div>
      </div>
      <div>Your wallet</div>
      <div class='flex flex-wrap'>
        <input type='text' class='focus:outline-none rounded-l-lg w-2/3'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-white focus:outline-none hover:bg-blue-700 text-sm'>
          Copy
        </button>
      </div>
      <div class='mt-3'>Link</div>
      <div class='flex flex-wrap'>
        <input type='text' class='focus:outline-none rounded-l-lg w-2/3'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-white focus:outline-none hover:bg-blue-700  text-sm'>
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
