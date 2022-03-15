<template>
  <div class='flex flex-col flex-growoverflow-y-auto'>
    <div class='px-3 py-2 text-gray-200'>Wallet</div>
    <div class='grid grid-cols-1 md:grid-cols-3 gap-6 p-3 text-gray-200'>
      <wallet-balance></wallet-balance>
      <wallet-deposit></wallet-deposit>
      <wallet-withdraw></wallet-withdraw>
    </div>
    <div class='px-3 my-4 text-gray-200'>History</div>
    <div class='w-full mb-4'>
      <member-list-table></member-list-table>
    </div>
  </div>
</template>

<script>
import MemberCard from '~/components/MemberCard'
import MemberPartner from '~/components/MemberPartner'
import MemberListTable from '~/components/MemberListTable'
import WalletBalance from '~/components/WalletBalance'
import WalletDeposit from '~/components/WalletDeposit'
import WalletWithdraw from '~/components/WalletWithdraw'

export default {
  name: 'member',
  components: {
    MemberCard: MemberCard,
    MemberPartner: MemberPartner,
    MemberListTable: MemberListTable,
    WalletBalance: WalletBalance,
    WalletDeposit: WalletDeposit,
    WalletWithdraw: WalletWithdraw
  }
}
</script>

<style scoped>

</style>
