<template>
  <div class='flex flex-col flex-growoverflow-y-auto'>
    <div class='px-3 py-2 text-gray-200'>Bot History</div>
    <div class='grid grid-cols-1 md:grid-cols-3 gap-6 py-8 px-24 text-gray-200'>
      <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
        <div class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
        <div
          class='w-1/4 bottom-0 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
        <div
          class='w-1/4 bottom-0 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>
        <div class='text-white'>
          Total Profit
        </div>
        <div class='text-yellowa font-bold'>
          100,00$
        </div>
      </div>
      <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
        <div class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
        <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
        <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>
        <div class='text-white'>
          Today Profit
        </div>
        <div class='text-yellowa font-bold'>
          100,00$
        </div>
      </div>
      <div class='p-2 rounded-lg flex flex-col items-center shadow-xl relative'>
        <div class='w-full h-full -z-10 bg-blue-500 absolute top-0 opacity-50 rounded-lg '></div>
        <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-girl'></div>
        <div class='w-1/2 right-0 h-full -z-10 absolute top-0 opacity-50 rounded-lg background-circle-boy'></div>
        <div class='text-white'>
          Trading Bot Fee
        </div>
        <div class='text-yellowa font-bold'>
          100,00$
        </div>
      </div>
    </div>
    <div class='flex mx-6 mt-6 items-center justify-between text-gray-200'>
      <div class='flex'>
        <button type='button'
                class='p-2 rounded-lg  text-white focus:outline-none hover:bg-blue-700 my-3'
                :class="[selectedTab == tabs.order ? 'bg-blue-600' : 'bg-gray-600']"
                @click='selectTab(tabs.order)'
        >
          Open Order
        </button>
        <button type='button'
                class='ml-4 p-2 rounded-lg text-white focus:outline-none hover:bg-blue-700 my-3'
                :class="[selectedTab == tabs.history ? 'bg-blue-600' : 'bg-gray-600']"

                @click='selectTab(tabs.history)'
        >
          History
        </button>
        <button type='button'
                class='ml-4 p-2 rounded-lg text-white focus:outline-none hover:bg-blue-700 my-3'
                :class="[selectedTab == tabs.profit ? 'bg-blue-600' : 'bg-gray-600']"

                @click='selectTab(tabs.profit)'
        >
          Daily Profit
        </button>
      </div>
      <div class='flex'>
        <div>Total Order: <span class='text-yellowa'>19,344</span></div>
        <div class='ml-4'>Total Value: <span class='text-yellowa'>87,748$</span></div>
        <div class='ml-4'>Total Profit: <span class='text-greena'>5,000$</span></div>
      </div>
    </div>
    <div class='w-full mb-4'>
      <OrderTable v-show='selectedTab == tabs.order'></OrderTable>
      <HistoryTable v-show='selectedTab == tabs.history'></HistoryTable>
      <ProfitChart v-show='selectedTab == tabs.profit'></ProfitChart>
    </div>
  </div>
</template>

<script>

export default {
  name: 'bot-history',
  components: {},
  data() {
    return {
      tabs: {
        order: 'order',
        history: 'history',
        profit: 'profit'
      },
      selectedTab: 'order'
    }
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style scoped>

</style>
