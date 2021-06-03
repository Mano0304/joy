<template>
  <div class="my-15">
    <v-layout justify-center>
      <v-img :src="require('../static/logoBlack/Logo.png')" max-width="150" />
    </v-layout>
    <v-layout justify-center class="mt-5">
      <span class="font-weight-bold fs-30" style="color: #a5a5a5;">Thank you for using our service.</span>
    </v-layout>
    <v-layout justify-center>
      <span class="black--text font-weight-bold fs-18">We will send your information to your email. <span style="color: #d9b735;">(nonch@gmail.com)</span></span>
    </v-layout>
    <v-layout justify-center class="mt-10 mb-3">
      <v-icon color="#d9b735" size="63">
        mdi-bell-ring
      </v-icon>
    </v-layout>
    <v-layout justify-center>
      <span class="font-weight-bold fs-16" style="color: #a5a5a5;">Never miss a notification. Add us as friends</span>
    </v-layout>
    <v-layout justify-center class="my-5 fs-16 mb-3" style="color: #a5a5a5;">
      <v-icon>mdi-cellphone-screenshot</v-icon>
      <span>Scan here</span>
    </v-layout>
    <v-layout justify-center>
      <v-img :src="require('../static/lineOA/LineOA.png')" max-width="150" />
    </v-layout>
    <v-layout justify-center class="mt-15">
      <v-btn
        width="350"
        depressed
        outlined
        class="black--text _text-transform font-weight-bold"
        to="/"
      >
        Back to home
      </v-btn>
    </v-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
