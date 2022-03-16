export const state = () => ({
  isShow: true
})

export const mutations = {
  changeStatus(state, isShow) {
    state.isShow = isShow
  }
}
