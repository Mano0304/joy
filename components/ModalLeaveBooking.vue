<template>
  <v-dialog
    :value="modalLeave"
    max-width="330"
    persistent
  >
    <v-card class="pt-10 pb-5">
      <v-layout justify-center>
        <v-icon color="#f51c57" size="65">
          mdi-alert-circle
        </v-icon>
      </v-layout>
      <v-layout justify-center class="mt-5">
        <span class="font-weight-bold black--text">Would you like to leave</span>
      </v-layout>
      <v-layout justify-center>
        <span class="font-weight-bold black--text">this booking?</span>
      </v-layout>
      <v-layout justify-center class="mt-15">
        <v-btn
          width="130"
          depressed
          outlined
          class="_border-card _text-transform mr-3 font-weight-bold"
          @click="closeModal"
        >
          No, Thank
        </v-btn>
        <v-btn
          width="130"
          depressed
          color="#000000"
          class="_text-transform white--text font-weight-bold"
          @click="confirm"
        >
          Confirm
        </v-btn>
      </v-layout>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalLeave: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    closeModal () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
