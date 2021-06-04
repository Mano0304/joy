<template>
  <v-card width="525">
    <v-col class="text-center">
      <h2>Choose more than one service</h2>
    </v-col>
    <v-col class="px-10">
      <v-col
        v-for="details in serviceComponents"
        :key="details.index"
        class="mb-3 _border rounded"
        @click="selectService(details.id)"
      >
        <v-row>
          <v-col cols="2" align-self="center">
            <v-avatar size="62">
              <img
                :src="details.image"
              >
            </v-avatar>
          </v-col>
          <v-col align-self="center">
            <b>{{ details.title }}</b><br>
            <span>{{ details.label }}</span>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
    <v-card-actions>
      <v-btn class="white--text _text-transform" color="grey darken-4" block v-text="'Next'" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    serviceComponents: [
      {
        id: 1,
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      },
      {
        id: 2,
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      },
      {
        id: 3,
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      }
    ]
  }),
  methods: {
    selectService (id) {
      // eslint-disable-next-line no-console
      console.log(id)
    }
  }
}
</script>

<style scoped>
.v-input--checkbox.v-input--selection-controls {
  margin-top: 0;
  padding-top: 0;
}
</style>
