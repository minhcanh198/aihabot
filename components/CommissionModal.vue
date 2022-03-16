<template>
  <div
    class='modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto'
    id='commissionModal' tabindex='-1' aria-labelledby='commissionModalTitle' aria-modal='true'
    role='dialog'>
    <div class='modal-dialog modal-dialog-centered relative w-auto pointer-events-none'>
      <div
        class='modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-xl outline-none text-center'>
        <div
          class='flex flex-shrink-0 items-center justify-between px-4 py-1 border-b border-gray-200 rounded-t-md bg-sbluea'>
          <div class='px-3'></div>
          <div class='text-xl font-medium leading-normal text-gray-800 text-center'
               id='exampleModalScrollableLabel'>
            POPUP COMMISSION
          </div>
          <button type='button'
                  class='btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline'
                  data-bs-dismiss='modal' aria-label='Close'></button>
        </div>
        <div class='modal-body relative p-4'>
          <div class='grid grid-cols-2 gap-2 text-gray-100'>
            <div class='m-3'>
              <div
                class='flex flex-col items-center bg-blue-500 p-2 rounded-xl cursor-pointer hover:bg-blue-600 shadow-lg'>
                <div>Active bot</div>
                <div>Commission</div>
                <div class='mt-4 font-bold text-yellowa'>100$</div>
              </div>
            </div>
            <div class='m-3'>
              <div
                class='flex flex-col items-center bg-blue-500 p-2 rounded-xl cursor-pointer hover:bg-blue-600 shadow-lg'>
                <div>Profit Bot</div>
                <div>Commission</div>
                <div class='mt-4 font-bold text-yellowa'>100$</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='modal-footer flex flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md'>
          <button type='button'
                  class='shadow-lg inline-block px-6 py-2 mr-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-blue-700 hover:shadow-xl focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1'>
            Confirm
          </button>
          <button type='button'
                  class='shadow-lg mr-3 inline-block px-6 py-2 bg-gray-700 text-white font-medium text-xs leading-tight uppercase rounded hover:bg-gray-600 hover:shadow-xl focus:bg-gray-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-500 active:shadow-lg transition duration-150 ease-in-out'
                  data-bs-dismiss='modal'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommissionModal'
}
</script>

<style scoped>

</style>
