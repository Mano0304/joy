<template>
  <v-layout class="pa-1 tab-button">
    <v-btn
      rounded
      small
      :depressed="typeLimousine !== 'transfer'"
      :class="typeLimousine !== 'transfer' && 'shades--text text--black select-button'"
      width="160"
      :color="typeLimousine === 'transfer' ? 'white' : ''"
      class="_text-transform font-weight-bold blue--text"
      @click="selectType('transfer')"
    >
      Transfer
    </v-btn>
    <v-btn
      rounded
      small
      :depressed="typeLimousine !== 'charter'"
      :class="typeLimousine !== 'charter' && 'shades--text text--black select-button'"
      width="160"
      :color="typeLimousine === 'charter' ? 'white' : ''"
      class="_text-transform font-weight-bold blue--text"
      @click="selectType('charter')"
    >
      Charter
    </v-btn>
  </v-layout>
</template>

<script>
export default {
  props: {
    typeLimousine: {
      type: String,
      default: ''
    }
  },
  methods: {
    selectType (type) {
      this.$emit('selectType', type)
    }
  }
}
</script>

<style>
.tab-button {
    background-color: #f4f4f4;
    border-radius: 27px;
    width: fit-content;
}
.select-button {
    opacity: 0.5;
}
</style>
