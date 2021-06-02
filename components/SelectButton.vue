<template>
  <v-layout class="pa-1 tab-button">
    <v-btn
      rounded
      small
      :depressed="typeLimousine !== 'Transfer'"
      :class="typeLimousine !== 'Transfer' && 'shades--text text--black select-button'"
      width="160"
      :color="typeLimousine === 'Transfer' ? 'white' : ''"
      class="_text-transform font-weight-bold blue--text"
      @click="selectType('Transfer')"
    >
      Transfer
    </v-btn>
    <v-btn
      rounded
      small
      :depressed="typeLimousine !== 'Charter'"
      :class="typeLimousine !== 'Charter' && 'shades--text text--black select-button'"
      width="160"
      :color="typeLimousine === 'Charter' ? 'white' : ''"
      class="_text-transform font-weight-bold blue--text"
      @click="selectType('Charter')"
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
