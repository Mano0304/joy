<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :close-on-click="false"
    transition="scale-transition"
    offset-y
    min-width="300"
  >
    <template #activator="{on}">
      <v-text-field
        :value="formatDate"
        :label="label"
        :rules="rules"
        readonly
        outlined
        dense
        hide-details
        v-on="on"
      />
    </template>
    <v-tabs v-model="activeTab" fixed-tabs>
      <v-tab key="calendar" class="_text-transform">
        Calendar
      </v-tab>
      <v-tab key="timer" class="_text-transform" :disabled="dateSelected">
        Time
      </v-tab>
      <v-tab-item key="calendar">
        <v-date-picker
          v-model="date"
          v-bind="datePickerProps"
          :min="nowDate"
          no-title
          scrollable
        >
          <v-spacer />
          <v-btn
            class="_text-transform"
            text
            color="primary"
            @click.native="clearPicker"
          >
            Cancel
          </v-btn>
          <v-btn
            class="_text-transform"
            text
            color="primary"
            @click="selectDate"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-tab-item>
      <v-tab-item key="timer">
        <v-card>
          <v-card-text>
            <v-digital-time-picker
              v-model="time"
              dense
              hide-details
              outlined
            />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              class="_text-transform"
              text
              color="primary"
              @click.native="clearPicker"
            >
              Cancel
            </v-btn>
            <v-btn
              class="_text-transform"
              text
              color="primary"
              @click="confirm"
            >
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-menu>
</template>

<script>
import { format, parseISO } from 'date-fns'

export default {
  props: {
    rules: {
      type: Array,
      default: () => ([])
    },
    label: {
      type: String,
      default: ''
    },
    datePickerProps: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      date: '',
      time: '00:00',
      activeTab: 0,
      nowDate: new Date().toISOString().substr(0, 10),
      menu: false
    }
  },
  computed: {
    formatDate () {
      const date = this.date ? format(parseISO(this.date), 'dd/MM/yyyy') : ''
      return this.date ? date + ', ' + this.time : ''
    },
    dateSelected () {
      return !this.date
    }
  },
  methods: {
    selectDate () {
      this.activeTab = 1
    },
    confirm () {
      this.resetPicker()
      this.$emit('changeDateTime', this.formatDate)
    },
    clearPicker () {
      this.resetPicker()
      this.activeTab = 0
      this.date = ''
      this.time = '00:00'
    },
    resetPicker () {
      this.menu = false
      this.$emit('changeDateTime', '')
    }
  }
}
</script>

<style>

</style>
