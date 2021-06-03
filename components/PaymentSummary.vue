<template>
  <v-card class="mt-14" flat width="320">
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
          <p class="font-weight-bold" style="color: #d9b735">
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
          v-model="couponCode"
          label="Coupon Code"
          dense
          hide-details
          outlined
        />
      </v-col>
      <v-divider />
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-col class="px-0">
          <v-select
            v-model="paymentType"
            label="Payment type"
            :rules="[notEmptyField]"
            :items="paymentTypes"
            item-text="name"
            item-value="name"
            dense
            hide-details
            outlined
          />
        </v-col>
      </v-form>
      <v-layout
        v-if="paymentType === 'House use'"
        justify-end
      >
        <span class="_pink--text font-weight-bold">House use balance : ฿2,657</span>
      </v-layout>
      <v-col class="px-0">
        <span class="font-weight-bold black--text">Company Ref.</span>
        <span>(No required)</span>
        <v-text-field
          v-model="companyRef"
          dense
          hide-details
          outlined
        />
      </v-col>
      <v-btn
        block
        color="#000000"
        class="_text-transform white--text font-weight-bold"
        @click="confirm"
      >
        Confirm
      </v-btn>
    </v-card-text>
    <modal-payment
      :modal-payment="modalPayment"
      @confirm="nextPage"
      @close="close"
    />
    <modal-house-use
      :modal-house-use="modalHouseUse"
      @close="closeModal"
    />
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      modalPayment: false,
      modalHouseUse: false,
      paymentType: '',
      couponCode: '',
      companyRef: '',
      paymentTypes: [
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
    },
    confirm () {
      if (this.$refs.form.validate()) {
        switch (this.paymentType) {
          case 'QR code': this.modalPayment = true
            break
          case 'Billing': this.$router.push('complete')
            break
          case 'House use': this.modalHouseUse = true
            break
        }
      }
    },
    nextPage () {
      this.modalPayment = false
      this.$router.push('complete')
    },
    close () {
      this.modalPayment = false
    },
    closeModal () {
      this.modalHouseUse = false
    }
  }
}
</script>

<style>
.v-text-field--outlined.v-input--dense .v-label {
  font-size: small;
}
</style>
