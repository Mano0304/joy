<template>
  <div>
    <v-container>
      <v-layout>
        <v-col class="pa-0 pr-1" cols="9">
          <v-layout align-center>
            <status-bar :status-booking="false" />
            <v-btn
              rounded
              outlined
              color="#1f86fd"
              style="background-color: #ffffff;"
              class="_text-transform font-weight-bold"
              @click="editBooking"
            >
              <v-icon size="18" class="mr-1">
                mdi-pencil
              </v-icon>
              Edit
            </v-btn>
          </v-layout>
          <limousine-details
            v-for="limousine in limousineList"
            :key="limousine.key"
            :service-details="limousine"
            class="mb-10"
          />
        </v-col>
        <div>
          <payment-summary />
        </div>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('service', ['limousineList'])
  },
  methods: {
    editBooking () {
      this.$router.replace('create')
    }
  }
}
</script>

<style>

</style>
