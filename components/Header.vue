<template>
  <div class='flex justify-between p-3 sticky top-0 items-center z-20'>
    <div class='h-full w-full absolute right-0 opacity-75 bg-bluea -z-10 top-0'></div>
    <div class='text-gray-500 hover:text-gray-100 cursor-pointer' @click='toggleSidebar'>
      <svg xmlns='http://www.w3.org/2000/svg' version='1.0' width='25' height='25'
           viewBox='0 0 512.000000 512.000000' preserveAspectRatio='xMidYMid meet'>

        <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' stroke='none' fill='#f9fafb'>
          <path
            d='M366 4465 c-256 -65 -415 -323 -351 -570 24 -89 72 -170 137 -231 96 -88 187 -124 315 -125 96 0 147 12 227 54 245 130 321 444 163 679 -104 155 -313 238 -491 193z' />
          <path
            d='M1665 4468 c-114 -22 -241 -108 -303 -205 -55 -86 -74 -164 -70 -278 3 -91 7 -107 40 -178 73 -152 206 -247 378 -267 56 -7 591 -10 1555 -8 l1470 3 59 23 c88 33 135 64 193 124 58 62 96 132 118 215 65 248 -98 507 -356 568 -56 13 -257 15 -1549 14 -894 -1 -1505 -5 -1535 -11z' />
          <path
            d='M353 3015 c-84 -23 -153 -63 -213 -124 -186 -189 -187 -474 0 -661 150 -150 362 -182 553 -83 113 60 208 182 237 306 12 55 12 160 -1 216 -28 123 -137 259 -249 313 -102 48 -224 60 -327 33z' />
          <path
            d='M1638 3015 c-111 -30 -230 -119 -285 -212 -84 -144 -84 -342 0 -486 34 -57 132 -148 191 -177 108 -52 40 -50 1656 -50 1647 0 1561 -3 1674 58 74 39 157 126 195 203 132 269 -15 588 -306 664 -50 13 -259 15 -1568 14 -1200 -1 -1520 -3 -1557 -14z' />
          <path
            d='M410 1579 c-182 -19 -345 -165 -395 -354 -68 -261 112 -529 386 -575 279 -47 539 177 539 465 0 284 -239 493 -530 464z' />
          <path
            d='M1691 1579 c-151 -19 -290 -123 -359 -266 -36 -76 -37 -81 -37 -193 0 -96 4 -125 23 -177 46 -119 164 -232 292 -278 54 -20 89 -20 1550 -23 1081 -2 1514 0 1563 9 269 45 449 315 382 574 -50 190 -207 330 -398 355 -89 12 -2926 11 -3016 -1z' />
        </g>
      </svg>
    </div>
    <div class='flex'>
      <div class='px-3 text-gray-500 hover:text-gray-100'>
        Balance: <span class='text-yellowa'>900,000</span>
      </div>
      <div class='flex justify-center'>
        <div>
          <div class='relative h-full'>
            <button
              class='
                rounded-3xl
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
                whitespace-nowrap'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Harry Kane
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
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
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
          w-full
        '
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <nuxt-link to='/profile'>
                  <div
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
                  >Profile
                  </div
                  >
                </nuxt-link>

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
                >Logout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapState('sidebar', ['isShow'])
  },
  methods: {
    toggleSidebar() {
      this.$store.commit('sidebar/changeStatus', !this.isShow)
    }
  }
}
</script>

<style scoped>

</style>
