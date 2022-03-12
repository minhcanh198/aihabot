import Vue from 'vue'
import TradingVue from 'trading-vue-js'
import ChartOverlays from 'tvjs-overlays'
import ChartExtensions from 'tvjs-xp'

Vue.use(TradingVue)

export default ({ app }, inject) => {
  inject('chartExtensions', ChartExtensions)
  inject('chartOverlays', ChartOverlays)
}
