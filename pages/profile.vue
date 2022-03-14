<template>
  <div class='flex flex-col flex-grow bg-blue-900 overflow-y-auto'>
    <div class='px-3 py-2 text-gray-200'>Profile</div>
    <div class='flex flex-wrap text-gray-200'>
      <div class='md:w-1/3 w-full'>
        <div class='m-3'>
          <ProfilePanel></ProfilePanel>
        </div>
      </div>
      <div class='md:w-2/3 w-full'>huhu</div>
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
import ProfilePanel from '~/components/ProfilePanel'

export default {
  name: 'member',
  components: {
    MemberCard: MemberCard,
    MemberPartner: MemberPartner,
    MemberListTable: MemberListTable,
    WalletBalance: WalletBalance,
    WalletDeposit: WalletDeposit,
    WalletWithdraw: WalletWithdraw,
    ProfilePanel: ProfilePanel
  }
}
</script>

<style scoped>

</style>
