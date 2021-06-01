<template>
  <div>
    <v-layout
      class="mt-15"
      align-center
    >
      <v-icon color="#d9b735">
        mdi-star
      </v-icon>
      <span class="font-weight-bold black--text ml-2">Recommend</span>
    </v-layout>
    <v-card
      v-for="serviceRecommend in serviceRecommendList"
      :key="serviceRecommend.index"
      class="mt-3"
      flat
    >
      <v-card-text>
        <div>
          <v-img :src="serviceRecommend.image" />
        </div>
        <div class="pt-5 pb-3">
          <span class="font-weight-bold black--text">{{ serviceRecommend.title }}</span>
          <span>{{ serviceRecommend.details }}</span>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('service', ['serviceRecommendList'])
  },
  async created () {
    await this.getServiceRecommendList()
  },
  methods: {
    ...mapActions({
      getServiceRecommendList: 'service/getServiceRecommendList'
    })
  }
}
</script>

<style>

</style>
