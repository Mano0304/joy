<template>
  <div>
    <v-col class="text-center">
      <h1>Service</h1>
    </v-col>
    <v-row>
      <v-col v-for="details in serviceComponents" :key="details.index" class="text-center">
        <v-col>
          <v-avatar size="100">
            <img
              :src="details.image"
            >
          </v-avatar>
        </v-col>
        <v-col>
          <b>{{ details.title }}</b><br>
          <span>{{ details.label }}</span>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    serviceComponents: [
      {
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      },
      {
        image: 'https://cdn.vuetifyjs.com/images/john.jpg',
        title: 'Limousine',
        label: 'Car with driver'
      }
    ]
  })
}
</script>

<style>

</style>
