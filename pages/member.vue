<template>
  <div class='flex flex-col flex-grow bg-blue-900 overflow-y-auto'>
    <div class='px-3 py-2 text-gray-200'>Member</div>
    <div class='flex flex-wrap p-3 '>
      <div class='md:w-2/5 w-full'>
        <member-card></member-card>
      </div>
      <div class='md:w-3/5 w-full md:mt-0 mt-3'>
        <member-partner></member-partner>
      </div>
    </div>
    <div class='px-3 my-4 text-gray-200'>Member List</div>
    <div class='w-full mb-4'>
      <member-list-table></member-list-table>
    </div>
  </div>
</template>

<script>
import MemberCard from '~/components/MemberCard'
import MemberPartner from '~/components/MemberPartner'
import MemberListTable from '~/components/MemberListTable'

export default {
  name: 'member',
  components: {
    MemberCard: MemberCard,
    MemberPartner: MemberPartner,
    MemberListTable: MemberListTable
  }
}
</script>

<style scoped>

</style>
