<template>
  <v-layout align-center>
    <v-col cols="2" class="pl-0">
      <v-avatar color="black" size="32">
        <span class="white--text headline">1</span>
      </v-avatar>
      <span class="font-weight-bold black--text ml-3">Booking</span>
    </v-col>
    <v-col class="pl-0">
      <v-avatar :class="statusBooking && '_opacity-items'" color="black" size="32">
        <span class="white--text headline">2</span>
      </v-avatar>
      <span :class="statusBooking && '_opacity-items'" class="font-weight-bold black--text ml-3">Check the details, Payment</span>
    </v-col>
  </v-layout>
</template>

<script>
export default {
  props: {
    statusBooking: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>

</style>
