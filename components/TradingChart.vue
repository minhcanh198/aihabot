<template>
  <client-only>
    <trading-vue :data='this.$data'
                 :width='width'
                 :height='chartHeight'
                 ref='tradingVueRef'>
    </trading-vue>
  </client-only>
</template>

<script>

export default {
  name: 'TradingChart',
  props: ['width', 'chartHeight'],
  data() {
    return {
      ohlcv: [
        [1551128400000, 33, 37.1, 14, 14, 196],
        [1551132000000, 13.7, 30, 6.6, 30, 206],
        [1551135600000, 29.9, 33, 21.3, 21.8, 74],
        [1551139200000, 21.7, 25.9, 18, 24, 140],
        [1551142800000, 24.1, 24.1, 24, 24.1, 29]
      ]
    }
  },
  watch: {
    chartHeight(value, oldValue) {
      console.log('value')
      console.log(value)
    }
  }
}
</script>

<style scoped>

</style>
