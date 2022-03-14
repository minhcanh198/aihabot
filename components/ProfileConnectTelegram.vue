<template>
  <div class='bg-indigo-900 shadow-xl rounded-xl p-5'>
    <div class='flex justify-center font-bold'>CONNECT TELEGRAM</div>

    <div class='my-4'>
      <div class='text-sm'>Step 1: Enter your phone number</div>
      <div class='text-sm'>Step 2: Select the telegram icon</div>
      <div class='text-sm'>Step 3: Confirm your phone number with telegram bot</div>
      <div class='text-sm'>Step 4: Select Save button to connect your telegram</div>
    </div>
    <div class='flex'>
      <div class='w-1/3'>
        <div class='m-3'>
          <div class='font-bold'>Country</div>
          <select data-v-f89e151c='' aria-label='Default select example' class='form-select appearance-none
    block
    px-3
    py-2
    w-full
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding bg-no-repeat
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    mt-3
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'>
            <option data-v-f89e151c='' selected='selected'>America</option>
            <option data-v-f89e151c='' value='1'>One</option>
            <option data-v-f89e151c='' value='2'>Two</option>
            <option data-v-f89e151c='' value='3'>Three</option>
          </select>
        </div>
      </div>
      <div class='w-2/3'>
        <div class='m-3'>
          <div class='font-bold'>Your Number</div>
          <div class='flex mt-3'>
            <input type='text' class='w-4/6 focus:outline-none p-2 rounded-l-lg text-gray-800 mb-2'
                   placeholder='Enter secret key'>
            <button type='button'
                    class='border-r-2 border-blue-700 p-2 bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
              Paste
            </button>
            <button type='button'
                    class='p-2 rounded-r-lg bg-blue-600 text-gray-200 w-1/6 focus:outline-none hover:bg-blue-700 mb-2'>
              <div class='flex items-center justify-center'>
                <img
                  src='data:image/png;base64,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'
                  alt='icon tele'
                  class='rounded-lg w-6 h-6 object-center object-cover text-center'>
              </div>
            </button>
          </div>
        </div>

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
  name: 'ProfileConnectTelegram'
}
</script>

<style scoped>

</style>
