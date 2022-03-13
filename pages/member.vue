<template>
  <div class='flex flex-col flex-grow'>
    <div class='px-3 py-5 bg-blue-100'>Member</div>
    <div class='flex flex-wrap p-3 flex-grow items-center h-full overflow-y-auto'>
      <div class='md:w-2/3 w-full text-center bg-red-200 h-full'>
        left
      </div>
      <div class='md:w-1/3 w-full  text-center bg-indigo-500 h-full'><strong>right</strong></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'member'
}
</script>

<style scoped>

</style>
