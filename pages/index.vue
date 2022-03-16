<template>
  <div class='flex flex-col flex-grow overflow-y-auto'>
    <div class='px-3 py-2 text-white'>Dashboard</div>
    <div class='flex flex-wrap p-3 flex-grow items-start'>
      <div class='md:w-2/3 w-full'>
        <div class='text-center flex flex-col relative mx-3' ref='container'>
          <div class='grid grid-cols-3 gap-4'>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
            <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
              <div
                class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
              <div
                class='w-1/4 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
              <div class='w-1/3 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>

              <div class='text-white'>
                Balance
              </div>
              <div class='text-yellow-500 font-bold'>
                100$
              </div>
            </div>
          </div>
          <div class='flex justify-start mt-5 z-10'>
            <div class='flex items-center'>
              <div class='dropdown relative h-full'>
                <button
                  class='
                rounded-lg
                h-full
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        '
                  type='button'
                  id='dropdownMenuButton1'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  BTCUSDT
                  <svg
                    aria-hidden='true'
                    focusable='false'
                    data-prefix='fas'
                    data-icon='caret-down'
                    class='w-2 ml-2'
                    role='img'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 320 512'
                  >
                    <path
                      fill='currentColor'
                      d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                    ></path>
                  </svg>
                </button>
                <ul
                  class='
                w-full
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        '
                  aria-labelledby='dropdownMenuButton1'
                >
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >ETHXXX</a
                    >
                  </li>
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >ETHXXX</a
                    >
                  </li>
                  <li>
                    <a
                      class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                      href='#'
                    >ETHXXX</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <button class='p-2 rounded-lg bg-blue-600 text-white ml-4 focus:outline-none hover:bg-blue-700'
                    type='button'>
              Active Bot
            </button>
            <button class='p-2 rounded-lg bg-blue-600 text-white ml-4 focus:outline-none hover:bg-blue-700'
                    type='button'>
              Commission
            </button>
          </div>
          <div class='flex-grow m-5 z-0'>
            <trading-chart :width=chartWidth :chart-height='chartHeight'></trading-chart>
          </div>
        </div>
      </div>
      <div class='md:w-1/3 w-full md:mt-0 mt-3'>
        <setting-bot></setting-bot>
      </div>
    </div>
  </div>
</template>

<script>
import TradingChart from '~/components/TradingChart'
import SettingBot from '~/components/SettingBot'

export default {
  components: {
    TradingChart: TradingChart,
    SettingBot: SettingBot
  },
  data() {
    return {
      chartHeight: 800,
      chartWidth: 0
    }
  },
  created() {
  },
  mounted() {
    window.addEventListener('resize', this.onResize)
    if (this.$refs.container && this.$refs.container.children && this.$refs.container.children.length == 3) {
      this.chartWidth = this.$refs.container.children[2].clientWidth
      this.chartHeight = this.chartWidth * 2 / 3
    }
  },
  methods: {
    onResize() {
      if (this.$refs.container && this.$refs.container.children && this.$refs.container.children.length == 3) {
        this.chartWidth = this.$refs.container.children[2].clientWidth
        this.chartHeight = this.chartWidth * 2 / 3
      }
    }
  }
}
</script>

<style>
.background-circle-boy {
  background-image: url("~assets/svg/circle.svg");
  background-repeat: no-repeat;
  background-position: 5px 40px;
}

.background-circle-girl {
  background-image: url("~assets/svg/circle.svg");
  background-repeat: no-repeat;
  background-position: 22px 20px;
}
</style>
