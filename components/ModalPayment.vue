<template>
  <v-dialog
    :value="modalPayment"
    width="500"
    persistent
  >
    <v-card>
      <v-layout justify-end>
        <v-icon class="mt-1 mr-1" size="30" @click="close">
          mdi-close
        </v-icon>
      </v-layout>
      <v-card-title class="pt-0">
        <v-col cols="12">
          <v-layout justify-center>
            <div>
              <v-img width="100" :src="require('../static/logoBlack/Logo.png')" />
            </div>
          </v-layout>
        </v-col>
        <v-col cols="12">
          <v-layout justify-center>
            <span class="font-weight-bold fs-24">
              Purchase by PromptPay QR
            </span>
          </v-layout>
        </v-col>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <v-layout justify-center class="mt-5">
          <v-icon class="mr-2">
            mdi-cellphone-screenshot
          </v-icon>
          <span class="fs-18">Open your mobile banking application</span>
        </v-layout>
        <v-layout justify-center>
          <span class="fs-18">and scan QR Code</span>
        </v-layout>
        <v-layout justify-center class="mt-5">
          <span class="_pink--text font-weight-bold fs-16">*QR code will expire in :</span>
          <span class="_pink--text font-weight-bold fs-16">&nbsp;09:59</span>
        </v-layout>
        <v-layout justify-center class="my-5">
          <div>
            <v-img :src="require('../static/lineOA/LineOA.png')" />
          </div>
        </v-layout>
        <div class="py-3" style="background-color: #f4f4f4;">
          <v-layout justify-center>
            <p class="font-weight-bold fs-18">
              Total Payment
            </p>
          </v-layout>
          <v-layout justify-center>
            <span class="font-weight-bold fs-18">฿2,678</span>
          </v-layout>
          <v-layout justify-center class="mt-1">
            <span class="fs-14">All prices include VAT</span>
          </v-layout>
        </div>
        <v-layout justify-center class="mt-3">
          <span class="font-weight-bold fs-16 black--text">When successful payment, the system will send an e-slip.</span>
        </v-layout>
        <v-layout justify-center>
          <span class="font-weight-bold fs-16 black--text">Automatically enter the email you specify.</span>
        </v-layout>
        <v-layout justify-center class="my-5">
          <v-btn
            class="_text-transform white--text"
            large
            color="#1f86fd"
            rounded
            depressed
            @click="confirm"
          >
            <v-icon class="mr-1">
              mdi-download
            </v-icon>
            <span class="font-weight-bold">Download QR code</span>
          </v-btn>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    modalPayment: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    confirm () {
      this.$emit('confirm')
    },
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>
._pink--text {
    color: #f51c57;
}
</style>
