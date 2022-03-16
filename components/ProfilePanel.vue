<template>
  <div class='shadow-xl rounded-xl p-3 relative'>
    <div class='absolute top-0 right-0 h-full rounded-2xl w-full bg-bluea opacity-50 -z-10'></div>

    <div class='flex justify-center'>
      <img
        src='https://teky.edu.vn/blog/wp-content/uploads/2021/07/thong-tin-ve-cong-nghe-blockchain.jpg'
        alt='avatar'
        class='object-center object-cover rounded-full w-20 h-20'
      >
    </div>
    <div class='m-3'>
      <div>ID: <span class='text-yellowa'>34567</span></div>
      <div>Wallet: <span class='text-yellowa'>yydjrjdtuksrgfhjfgh</span></div>
      <div>Email: <span class='text-yellowa'>mail@mail.com</span></div>
    </div>
    <div class='my-4'>
      <button type='button'
              class='p-2 rounded-lg text-reda border border-reda w-full focus:outline-none hover:bg-gray-700 mb-2'>
        Connect API key Binance
      </button>
      <button type='button'
              class='p-2 rounded-lg text-greena w-full focus:outline-none hover:bg-gray-700 mb-2 border border-greena '>
        Connect telegram
      </button>
      <button type='button'
              class='p-2 rounded-lg text-greena w-full focus:outline-none hover:bg-gray-700 mb-2 border border-greena '>
        Active 2FA
      </button>
    </div>
    <div class='mb-2'>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'
              @click='selectTab(tabs.updateEmail)'>
        UPDATE EMAIL
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'
              @click='selectTab(tabs.connectBinance)'>
        CONNECT BINANCE API-KEY
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700 mb-2'
              @click='selectTab(tabs.connectTelegram)'>
        CONNECT TELEGRAM
      </button>
      <button type='button'
              class='p-2 rounded-lg bg-blue-600 text-gray-200 w-full focus:outline-none hover:bg-blue-700'
              @click='selectTab(tabs.authenticator)'>
        TWO-FACTOR AUTHENTICATOR
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProfilePanel',
  computed: {
    ...mapState('profile', ['tabs'])
  },
  methods: {
    selectTab(tab) {
      console.log(tab)
      this.$store.commit('profile/changeCurrentTab', tab)
    }
  }
}
</script>

<style scoped>

</style>
