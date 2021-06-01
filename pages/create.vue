<template>
  <div>
    <v-container>
      <v-layout>
        <v-col class="pa-0" cols="9">
          <status-bar :status-booking="true" />
          <v-layout justify-center>
            <div v-if="!limousineList.length">
              <v-icon size="70">
                mdi-emoticon-sad-outline
              </v-icon><br>
              <span
                class="font-weight-bold"
                color="#d3d3d3"
              >
                No result
              </span>
            </div>
          </v-layout>
          <limousine
            v-for="(limousine, index) in limousineList"
            :key="`create-${limousine.key}`"
            class="mb-10"
            :service-details="{...limousine, index: index + 1}"
            @deleteService="deleteService"
          />
          <v-layout
            justify-center
            class="mb-15 mt-5"
          >
            <v-btn
              v-if="limousineList.length"
              depressed
              width="450"
              color="#000000"
              class="_text-transform font-weight-bold white--text"
              @click="nextPage"
            >
              Next
            </v-btn>
          </v-layout>
        </v-col>
        <div class="_recommend-card">
          <service-recommend-card />
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('service', ['limousineList', 'airportList', 'rentList'])
  },
  async created () {
    await this.refreshPage()
  },
  methods: {
    ...mapActions({
      deleteServiceItem: 'service/deleteServiceItem'
    }),
    refreshPage () {
      if (!this.limousineList.length && !this.airportList.length && !this.rentList.length) { this.$router.replace('/') }
    },
    nextPage () {
      this.$bus.$emit('changeLimousine')
    },
    async deleteService (idx) {
      await this.deleteServiceItem(idx)
    }
  }
}
</script>

<style>
._recommend-card {
  position: fixed;
  width: 280px;
  right: 12%;
}
</style>
