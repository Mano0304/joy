<template>
  <v-card width="400">
    <v-card-title class="justify-center">
      <span class="font-weight-bold fs-22">Our service</span>
    </v-card-title>
    <v-card-text
      class="pb-0"
    >
      <v-card
        v-for="service in formData.serviceList"
        :key="service.index"
        min-height="80"
        :style="!service.status && 'opacity: 0.3;'"
        :class="notSelect && 'border-error'"
        class="border-black elevation-0 mb-3"
        @click="selectService(service)"
      >
        <v-layout>
          <v-col cols="3">
            <v-img :src="service.icon" />
          </v-col>
          <v-layout align-center>
            <v-col>
              <span class="font-weight-bold fs-18">{{ service.title }}</span><br>
              <span class="fs-14">
                {{ service.subTitle }}
              </span>
            </v-col>
          </v-layout>
          <v-col cols="1" class="pt-0">
            <p-check
              v-model="service.status"
              class="p-icon p-round p-plain p-jelly"
              color="warning"
            >
              <i
                slot="extra"
                class="icon mdi mdi-check"
              />
            </p-check>
          </v-col>
        </v-layout>
      </v-card>
    </v-card-text>
    <v-divider />
    <v-card-text class="pt-5">
      <v-btn
        block
        dark
        class="_text-transform"
        @click="confirm"
      >
        Next
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      notSelect: false,
      formData: {
        serviceList: [],
        serviceItems: []
      }
    }
  },
  computed: {
    ...mapState('service', ['serviceList'])
  },
  async created () {
    await this.getServiceList()
    this.formData.serviceList = JSON.parse(JSON.stringify(this.serviceList))
  },
  methods: {
    ...mapActions({
      getServiceList: 'service/getServiceList',
      setServiceList: 'service/setServiceList'
    }),
    selectService (service) {
      this.notSelect = false
      if (service.status) {
        const index = this.formData.serviceItems.findIndex(x => x.id === service.id)
        service.status = false
        this.formData.serviceItems.splice(index, 1)
      } else {
        service.status = true
        this.formData.serviceItems.push(service)
      }
    },
    async confirm () {
      if (this.formData.serviceItems.length > 0) {
        this.notSelect = false
        await this.setServiceList(this.formData.serviceItems)
        this.formData.serviceList = JSON.parse(JSON.stringify(this.serviceList))
        this.formData.serviceItems = []
        this.$emit('closeModal')
        this.$router.push('create')
      } else {
        this.notSelect = true
      }
    }
  }
}
</script>
