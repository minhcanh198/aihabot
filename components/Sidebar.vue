<template>
  <div class='z-10'>
    <div v-show='isShow'
         class='w-64 shadow h-full flex-col justify-between flex md:relative absolute'>
      <div class='px-8 h-full relative'>
        <div class='h-full w-full absolute right-0 md:opacity-75 opacity-100 bg-bluea -z-10'></div>
        <div class='text-gray-500 hover:text-gray-100 cursor-pointer absolute -right-30 top-30 md:hidden'
             @click='toggleSidebar'>
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
        <div class='mt-12 w-full flex items-center'>
          <Logo></Logo>
        </div>
        <div class='flex mt-3 text-gray-100 justify-center'>
          <div>ID:</div>
          <div class='text-reda ml-2'>123123</div>
        </div>
        <div class='flex justify-between text-gray-100 items-center mt-3'>
          <div>Connect API:</div>
          <div class='form-check form-switch'>
            <input
              class='form-check-input appearance-none w-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
              type='checkbox' role='switch' checked>
          </div>
        </div>
        <div class='flex justify-between text-gray-100 items-center mt-3'>
          <div>Bot Status:</div>
          <div class='form-check form-switch'>
            <input
              class='form-check-input appearance-none w-10 rounded-full float-left h-5 align-top bg-white bg-no-repeat bg-contain bg-gray-300 focus:outline-none cursor-pointer shadow-sm'
              type='checkbox' role='switch'>
          </div>
        </div>
        <div class='h-1 border-gray-200 border-b mt-6'></div>
        <ul class='mt-6'>
          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'>
            <NuxtLink to='/' class='flex-grow flex justify-between'>
              <div class='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-puzzle' width='18'
                     height='18'
                     viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round'
                     stroke-linejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z'></path>
                  <path
                    d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1'></path>
                </svg>
                <span class='text-sm ml-2'>Dashboard</span>
              </div>
              <div class='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>8</div>
            </NuxtLink>
          </li>
          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'>
            <NuxtLink to='/member' class='flex-grow flex justify-between'>
              <div class='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-puzzle' width='18'
                     height='18'
                     viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round'
                     stroke-linejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z'></path>
                  <path
                    d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1'></path>
                </svg>
                <span class='text-sm ml-2'>Member</span>
              </div>
              <div class='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>8</div>
            </NuxtLink>
          </li>
          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'>
            <NuxtLink to='/wallet' class='flex-grow flex justify-between'>
              <div class='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-puzzle' width='18'
                     height='18'
                     viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round'
                     stroke-linejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z'></path>
                  <path
                    d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1'></path>
                </svg>
                <span class='text-sm ml-2'>Wallet</span>
              </div>
              <div class='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>8</div>
            </NuxtLink>
          </li>

          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'>
            <NuxtLink to='/bot-history' class='flex-grow flex justify-between'>
              <div class='flex items-center'>
                <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-code' width='20' height='20'
                     viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round'
                     stroke-linejoin='round'>
                  <path stroke='none' d='M0 0h24v24H0z'></path>
                  <polyline points='7 8 3 12 7 16'></polyline>
                  <polyline points='17 8 21 12 17 16'></polyline>
                  <line x1='14' y1='4' x2='10' y2='20'></line>
                </svg>
                <span class='text-sm ml-2'>Bot History</span>
              </div>
              <div class='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>8</div>
            </NuxtLink>
          </li>

          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center mb-6'>
            <div class='flex items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-puzzle' width='18' height='18'
                   viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none' stroke-linecap='round'
                   stroke-linejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z'></path>
                <path
                  d='M4 7h3a1 1 0 0 0 1 -1v-1a2 2 0 0 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h1a2 2 0 0 1 0 4h-1a1 1 0 0 0 -1 1v3a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-1a2 2 0 0 0 -4 0v1a1 1 0 0 1 -1 1h-3a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h1a2 2 0 0 0 0 -4h-1a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1'></path>
              </svg>
              <span class='text-sm ml-2'>Profit History</span>
            </div>
            <div class='py-1 px-3 bg-gray-700 rounded text-gray-500 flex items-center justify-center text-xs'>25</div>
          </li>
          <li class='flex w-full justify-between text-gray-600 hover:text-gray-500 cursor-pointer items-center'>
            <div class='flex items-center'>
              <svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-settings' width='18'
                   height='18' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' fill='none'
                   stroke-linecap='round' stroke-linejoin='round'>
                <path stroke='none' d='M0 0h24v24H0z' />
                <path
                  d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                <circle cx='12' cy='12' r='3' />
              </svg>
              <span class='text-sm ml-2'>Support</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Sidebar',
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
.-right-30 {
  right: -30px;
}

.top-30 {
  top: 30px;
}
</style>
