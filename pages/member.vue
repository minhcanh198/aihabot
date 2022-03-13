<template>
  <div class='flex flex-col flex-grow'>
    <div class='px-3 py-5 bg-blue-100'>Member</div>
    <div class='flex flex-wrap p-3 flex-grow items-center'>
      <div class='md:w-2/3 w-full text-center bg-red-200'>
        left
      </div>
      <div class='md:w-1/3 w-full  text-center bg-indigo-500'><strong>right</strong></div>
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
