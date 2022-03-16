<template>
  <div
    class='mx-3 rounded-2xl border-2 border-gray-200 flex flex-col items-center justify-between shadow-xl relative xl:p-5'>
    <div class='absolute top-0 h-full w-full bg-bluea opacity-50 -z-10'></div>
    <div class='text-lg text-yellowa py-4 font-bold'>SETTING BOT</div>
    <div class='flex flex-col w-full'>
      <div class='text-white text-sm mx-3 my-5'>
        <div>
          Trading Currency Pair
        </div>
        <textarea rows='4' class='w-full rounded-lg mt-3'></textarea>
        <div class='mt-3'>Pairs Group</div>
        <div class='mb-3 w-1/2'>
          <div class='mr-2 mt-1'>
            <select class='form-select appearance-none
      block
      px-3
      w-full
      py-1.5
      text-base
      rounded-lg
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' aria-label='Default select example'>
              <option selected>Group 1</option>
              <option value='1'>One</option>
              <option value='2'>Two</option>
              <option value='3'>Three</option>
            </select>
          </div>
        </div>
        <div class='w-full flex mt-3'>
          <div class='w-1/2'>
            <div>Strategy</div>
            <div class='mr-2 mt-2'>
              <select class='form-select appearance-none
      block
      px-3
      w-full
      py-1.5
      rounded-lg
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' aria-label='Default select example'>
                <option selected>Strategy 1</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
              </select>
            </div>
          </div>
          <div class='w-1/2 flex flex-col'>
            <div class='ml-2'>Amount Investment</div>
            <div class='flex-grow ml-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='1,000,000'>
            </div>
          </div>
        </div>
        <div class='w-full flex mt-3 items-center'>
          <div class='w-1/2'>
            <div>Expand Orders</div>
            <div class='flex-grow mr-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='John'>
            </div>
          </div>
          <div class='w-1/2 flex flex-col'>
            <div class='ml-2 whitespace-nowrap overflow-hidden'>First order amount</div>
            <div class='flex-grow ml-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='90,000'>
            </div>
          </div>
        </div>

        <div class='w-full flex mt-3 items-center'>
          <div class='w-1/2'>
            <div>Profit target</div>
            <div class='flex-grow mr-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='20%'>
            </div>
          </div>
          <div class='w-1/2 flex flex-col'>
            <div class='ml-2 whitespace-nowrap overflow-hidden'>Rate Of Next Order</div>
            <div class='flex-grow ml-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='90%'>
            </div>
          </div>
        </div>
        <div class='w-full flex mt-3 items-center'>
          <div class='w-1/2'>
            <div>Trailing Stop</div>
            <div class='flex-grow mr-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='20%'>
            </div>
          </div>
          <div class='w-1/2 flex flex-col'>
            <div class='ml-2 whitespace-nowrap overflow-hidden'>Limit</div>
            <div class='flex-grow ml-2 my-2'>
              <input type='text' class='rounded-lg h-full text-gray-900 px-2 w-full focus:outline-none py-1'
                     value='90%'>
            </div>
          </div>
        </div>
        <div class='form-check mt-4'>
          <input
            class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
            type='radio' name='flexRadioDefault' id='flexRadioDefault2'>
          <label class='form-check-label inline-block text-white' for='flexRadioDefault2'>
            Alert when matching order
          </label>
        </div>

      </div>
    </div>
    <button type='button' class='p-2 rounded-lg bg-blue-600 text-white w-1/2 focus:outline-none hover:bg-blue-700 my-3'>
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'SettingBot'
}
</script>

<style scoped>

</style>
