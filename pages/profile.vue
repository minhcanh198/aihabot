<template>
  <div class='flex flex-col flex-grow bg-blue-900 overflow-y-auto'>
    <div class='px-3 py-2 text-gray-200'>Profile</div>
    <div class='flex flex-wrap text-gray-200'>
      <div class='md:w-1/3 w-full'>
        <div class='m-6'>
          <ProfilePanel></ProfilePanel>
        </div>
      </div>
      <div class='md:w-2/3 w-full'>
        <div class='m-6'>
          <ProfileEmailUpdation v-if='currentTab == tabs.updateEmail'></ProfileEmailUpdation>
          <ProfileConnectBinance v-if='currentTab == tabs.connectBinance'></ProfileConnectBinance>
          <ProfileConnectTelegram v-if='currentTab == tabs.connectTelegram'></ProfileConnectTelegram>
          <ProfileAuthenticator v-if='currentTab == tabs.authenticator'></ProfileAuthenticator>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfilePanel from '~/components/ProfilePanel'
import { mapState } from 'vuex'
import ProfileEmailUpdation from '~/components/ProfileEmailUpdation'
import ProfileConnectBinance from '~/components/ProfileConnectBinance'
import ProfileConnectTelegram from '~/components/ProfileConnectTelegram'
import ProfileAuthenticator from '~/components/ProfileAuthenticator'

export default {
  name: 'profile',
  components: {
    ProfilePanel: ProfilePanel,
    ProfileEmailUpdation: ProfileEmailUpdation,
    ProfileConnectBinance: ProfileConnectBinance,
    ProfileConnectTelegram: ProfileConnectTelegram,
    ProfileAuthenticator: ProfileAuthenticator
  },
  computed: {
    ...mapState('profile', ['tabs', 'currentTab'])
  },
  mounted() {
    console.log(this.tabs)
  }
}
</script>

<style scoped>

</style>
