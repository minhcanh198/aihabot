export const state = () => ({
  currentTab: 'update-email',
  tabs: {
    updateEmail: 'update-email',
    connectBinance: 'connect-binance',
    connectTelegram: 'connect-telegram',
    authenticator: 'authenticator'
  }
})

export const mutations = {
  changeCurrentTab(state, selectedTab) {
    state.currentTab = selectedTab
  }
}
