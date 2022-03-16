<template>
  <div class=' shadow-xl rounded-xl p-5 relative'>
    <div class='absolute right-0 top-0 rounded-xl h-full w-full bg-bluea opacity-50 -z-10'></div>
    <div class='flex justify-center font-bold py-2 bg-slightbluea w-full'>TWO-FACTOR AUTHENTICATOR</div>
    <div class='flex justify-center my-4'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png'
        alt='qr code'
        class='object-cover object-center bg-gray-300 w-32 h-32 rounded-xl border'>

    </div>
    <div class='my-4'>
      <div class='mb-2'>Authenticator Secret Code</div>
      <div class='flex'>
        <input type='text' class='w-5/6 focus:outline-none p-2 rounded-l-lg text-gray-800 mb-2'
               placeholder='Enter Secret Code'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
          Copy
        </button>
      </div>
      <div class='mb-2'>Enter the verification code provided by your authentication app</div>
      <div class='flex'>
        <input type='text' class='w-5/6 focus:outline-none p-2 rounded-l-lg text-gray-800 mb-2'
               placeholder='Enter code here'>
        <button type='button'
                class='p-2 rounded-r-lg bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
          Copy
        </button>
      </div>
    </div>
    <div class='flex justify-center'>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-1/5 focus:outline-none hover:bg-blue-700 mb-2'>
        Enable
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileAuthenticator'
}
</script>

<style scoped>

</style>
