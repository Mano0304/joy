<template>
  <v-dialog
    :value="value"
    persistent
    width="1000"
  >
    <v-card>
      <v-card-title>
        <v-layout justify-center>
          <span class="font-weight-bold black--text">Service Class</span>
        </v-layout>
        <v-btn icon @click="closeModal">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider />
      <v-card-text>
        <div v-for="(serviceClass, index) in serviceClassList" :key="index">
          <v-layout align-center>
            <div>
              <v-img :src="serviceClass.image" width="300" />
            </div>
            <v-col>
              <span class="font-weight-bold">{{ serviceClass.carType }}</span><br>
              <span class="font-weight-bold black--text">{{ serviceClass.details }}</span>
              <v-col cols="9" style="background-color: #f5f5f5; border-radius: 5px;">
                <v-layout>
                  <v-icon>mdi-car</v-icon>
                  <v-col class="pa-0 pl-2">
                    <span>Car type</span><br>
                    <span
                      class="font-weight-bold"
                      style="color: #d9b735;"
                    >{{ serviceClass.carType }}</span>
                  </v-col>
                  <v-icon>mdi-seat</v-icon>
                  <v-col class="pa-0 pl-2">
                    <span>Seating</span><br>
                    <span
                      class="font-weight-bold"
                      style="color: #d9b735;"
                    >{{ serviceClass.seating }}</span>
                  </v-col>
                  <v-icon>mdi-bag-carry-on</v-icon>
                  <v-col class="pa-0 pl-2">
                    <span>Luggage</span><br>
                    <span
                      class="font-weight-bold"
                      style="color: #d9b735;"
                    >{{ serviceClass.luggage }}</span>
                  </v-col>
                </v-layout>
              </v-col>
              <v-col>
                <v-layout justify-space-between>
                  <div>
                    <span class="font-weight-bold black--text">฿{{ serviceClass.price }}</span><br>
                    <span>All prices include VAT</span>
                  </div>
                  <v-btn
                    width="140"
                    class="font-weight-bold white--text _text-transform"
                    color="#000000"
                    @click="selectServiceClass(serviceClass)"
                  >
                    Select
                  </v-btn>
                </v-layout>
              </v-col>
            </v-col>
          </v-layout>
          <v-divider />
        </div>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState('serviceClass', ['serviceClassList'])
  },
  async created () {
    await this.getServiceClassList()
  },
  methods: {
    ...mapActions({
      getServiceClassList: 'serviceClass/getServiceClassList'
    }),
    closeModal () {
      this.$emit('closeModal')
    },
    selectServiceClass (serviceClass) {
      this.$emit('onSelect', serviceClass)
    }
  }
}
</script>

<style>

</style>
