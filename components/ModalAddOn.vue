<template>
  <v-dialog
    :value="modalAddOn"
    width="500"
    persistent
  >
    <v-card>
      <v-card-title>
        <v-layout justify-center>
          <span class="font-weight-bold">
            Add on
          </span>
        </v-layout>
      </v-card-title>
      <v-divider />
      <v-card-text class="pl-3">
        <div v-for="(addOn, index) in addOnItems" :key="index">
          <v-layout justify-space-between>
            <v-layout align-center>
              <div class="my-3">
                <v-img :src="addOn.AAIMGUrl" width="60" />
              </div>
              <v-col cols="4">
                <span class="fs-12">
                  {{ addOn.AACaption }}
                </span>
              </v-col>
              <v-col>
                <span class="font-weight-bold black--text">
                  ฿{{ addOn.AAUnitPrice }}
                </span>
              </v-col>
              <v-col cols="4">
                <v-layout justify-space-between>
                  <v-btn
                    x-small
                    depressed
                    class="blue--text"
                    color="#ffffff"
                    style="border: 1px solid blue"
                    @click="onMinus(index)"
                  >
                    <v-icon x-small>
                      mdi-minus
                    </v-icon>
                  </v-btn>
                  <span class="font-weight-bold blue--text">{{ addOn.quantity }}</span>
                  <v-btn
                    x-small
                    depressed
                    class="blue--text"
                    color="#ffffff"
                    style="border: 1px solid blue"
                    @click="onPlus(index)"
                  >
                    <v-icon x-small>
                      mdi-plus
                    </v-icon>
                  </v-btn>
                </v-layout>
              </v-col>
              <v-col>
                <span class="font-weight-bold">{{ addOn.AAUnitCount }}</span>
              </v-col>
            </v-layout>
          </v-layout>
          <v-divider />
        </div>
      </v-card-text>
      <v-divider />
      <v-card-actions class="py-5 pr-6">
        <v-layout justify-end>
          <v-btn
            width="130"
            depressed
            color="#ffffff"
            class="border-black _text-transform mr-3 font-weight-bold"
            @click="closeModal"
          >
            Cancel
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
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props: {
    modalAddOn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      addOnItems: []
    }
  },
  computed: {
    ...mapState('addOn', ['addOnList'])
  },
  async created () {
    await this.getAddOnList()
    this.addOnItems = JSON.parse(JSON.stringify(this.addOnList))
  },
  methods: {
    ...mapActions({
      getAddOnList: 'addOn/getAddOnList'
    }),
    closeModal () {
      this.$emit('closeModal')
    },
    confirm () {
      this.$emit('confirm', this.addOnItems)
    },
    onPlus (i) {
      this.addOnItems[i].quantity += 1
    },
    onMinus (i) {
      if (this.addOnItems[i].quantity > 0) {
        this.addOnItems[i].quantity -= 1
      }
    }
  }
}
</script>

<style>

</style>
