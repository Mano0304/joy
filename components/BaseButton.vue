<template>
  <div>
    <v-btn
      :class="buttonObject.class"
      :color="buttonObject.color"
      :to="to"
    >
      {{ buttonObject.text }}
    </v-btn>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    },
    to: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    buttonObject () {
      const buttonObject = {
        save: {
          text: 'Save',
          color: 'green',
          class: 'white--text _text-transform'
        }
      }
      return buttonObject[this.type]
    }
  }
}
</script>
