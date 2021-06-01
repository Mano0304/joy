<template>
  <v-card class="mt-14" flat>
    <v-card-text>
      <p class="font-weight-bold fs-16 black--text">
        Payment summary
      </p>
      <v-col class="px-0 pt-0">
        <v-layout justify-space-between class="fs-12">
          <v-col class="pa-0" cols="7">
            <span>Limousine one way trip, Leo beer x4</span>
          </v-col>
          <span class="font-weight-bold black--text">฿3,678</span>
        </v-layout>
      </v-col>
      <v-col class="px-0 pt-0">
        <v-layout justify-space-between class="fs-12">
          <p>Discount</p>
          <p class="font-weight-bold" style="color: #d9b735;">
            -฿1,678
          </p>
        </v-layout>
      </v-col>
      <v-col class="px-0 pt-0">
        <v-layout justify-space-between class="fs-12">
          <span class="font-weight-bold black--text">Total Payment</span>
          <span class="font-weight-bold black--text">฿ 2,678</span>
        </v-layout>
        <v-layout justify-end>
          <span class="fs-10">All prices include VAT</span>
        </v-layout>
      </v-col>
      <v-divider />
      <v-col class="px-0">
        <v-text-field
          label="Coupon Code"
          dense
          hide-details
          outlined
        />
      </v-col>
      <v-divider />
      <v-col class="px-0">
        <v-select
          label="Payment type"
          :rules="[notEmptyField]"
          :items="paymentType"
          item-text="name"
          item-value="name"
          dense
          hide-details
          outlined
        />
      </v-col>
      <v-col class="px-0">
        <span class="font-weight-bold black--text">Company Ref.</span>
        <span>(No required)</span>
        <v-text-field
          dense
          hide-details
          outlined
        />
      </v-col>
      <v-btn
        block
        color="#000000"
        class="_text-transform white--text font-weight-bold"
      >
        Confirm
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      paymentType: [
        {
          id: '1',
          name: 'QR code'
        },
        {
          id: '2',
          name: 'Billing'
        },
        {
          id: '3',
          name: 'House use'
        }
      ]
    }
  },
  methods: {
    notEmptyField (v) {
      return !!v || 'Please enter information'
    }
  }
}
</script>

<style>
.v-text-field--outlined.v-input--dense .v-label {
  font-size: small;
}
</style>
