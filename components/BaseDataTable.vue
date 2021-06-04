<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="dataListNo"
      :page="page"
      :items-per-page="limit"
      :server-items-length="count"
      :loading="loadingData"
      :footer-props="footerProps"
      loading-text="Loading... Please wait"
      @update:options="changeOptions"
    />
  </div>
</template>

<script>
export default {
  props: {
    headers: {
      type: Array,
      default: () => ([])
    },
    dataList: {
      type: Array,
      default: () => ([])
    },
    footerProps: {
      type: Object,
      default: () => ({ itemsPerPageOptions: [5, 10, 15, 20] })
    },
    page: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 0
    },
    count: {
      type: Number,
      default: 0
    }
  },
  computed: {
    dataListNo () {
      return this.dataList.map(
        (items, index) => ({
          ...items,
          no: (this.page - 1) * this.limit + index + 1
        }))
    },
    loadingData () {
      return !this.dataList.length
    }
  },
  methods: {
    changeOptions (value) {
      this.$emit('changeOptions', value)
    }
  }
}
</script>

<style>

</style>
