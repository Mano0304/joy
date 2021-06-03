<template>
  <v-dialog
    :value="modalHouseUse"
    width="430"
    persistent
  >
    <v-card>
      <v-card-text class="py-10">
        <v-layout justify-center>
          <v-icon size="65" color="#f51c57">
            mdi-alert-circle
          </v-icon>
        </v-layout>
        <v-layout justify-center class="mt-10">
          <span class="font-weight-bold black--text fs-22">House use balance</span>
        </v-layout>
        <v-layout justify-center class="mt-2">
          <span class="font-weight-bold black--text fs-22">is not enough for this item.</span>
        </v-layout>
        <v-layout justify-center class="mt-15">
          <v-btn
            class="_text-transform"
            depressed
            large
            outlined
            @click="close"
          >
            <span class="font-weight-bold">Close this window</span>
          </v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalHouseUse: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
