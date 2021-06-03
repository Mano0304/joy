<template>
  <v-card width="100%">
    <v-card-title>
      <v-layout align-center>
        <div>
          <v-img
            class="_opacity-items"
            :src="serviceDetails.icon"
          />
        </div>
        <span class="font-weight-bold fs-24 ml-3">{{ serviceDetails.title }}</span>
        <span class="font-weight-bold fs-24 ml-3">{{ serviceDetails.index }}</span>
        <span class="font-weight-bold fs-18 ml-3 blue--text">{{ serviceDetails.formData.type }}</span>
      </v-layout>
    </v-card-title>
    <v-card-text>
      <span class="font-weight-bold fs-16">
        Service detail
      </span>
      <v-layout>
        <v-col class="pl-0">
          <span class="fs-12">
            From
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.form }}</span>
        </v-col>
        <v-col>
          <span class="fs-12">
            To
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.to }}</span>
        </v-col>
      </v-layout>
      <v-layout>
        <v-col class="pl-0">
          <span class="fs-12">
            Date/time
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.dateTime }}</span>
        </v-col>
        <v-col v-if="serviceDetails.formData.type !== 'Charter'">
          <span class="fs-12">
            Remark
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.remark }}</span>
        </v-col>
        <v-col v-else>
          <span class="fs-12">
            Duration
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.duration }}</span>
        </v-col>
      </v-layout>
      <v-layout v-if="serviceDetails.formData.type === 'Charter'">
        <v-col class="pl-0">
          <span class="fs-12">
            Remark
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.remark }}</span>
        </v-col>
      </v-layout>
      <v-layout align-center class="my-5">
        <v-col class="py-0 pl-0" cols="2">
          <span class="fs-12">
            Service Class
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.serviceClass.ASCCaption }}</span>
        </v-col>
        <v-col
          cols="6"
          style="background-color: #f5f5f5; border-radius: 5px;"
        >
          <v-layout>
            <v-icon>mdi-car</v-icon>
            <v-col class="pa-0 pl-2">
              <span class="fs-12">Car type</span><br>
              <span
                class="fs-12 font-weight-bold"
                style="color: #d9b735;"
              >{{ serviceDetails.formData.serviceClass.ASCGuideline.CarType }}</span>
            </v-col>
            <v-icon>mdi-seat</v-icon>
            <v-col class="pa-0 pl-2">
              <span class="fs-12">Seating</span><br>
              <span
                class="fs-12 font-weight-bold"
                style="color: #d9b735;"
              >{{ serviceDetails.formData.serviceClass.ASCGuideline.Seating }}</span>
            </v-col>
            <v-icon>mdi-bag-carry-on</v-icon>
            <v-col class="pa-0 pl-2">
              <span class="fs-12">Luggage</span><br>
              <span
                class="fs-12 font-weight-bold"
                style="color: #d9b735;"
              >{{ serviceDetails.formData.serviceClass.ASCGuideline.Luggage }}</span>
            </v-col>
          </v-layout>
        </v-col>
      </v-layout>
      <v-divider class="mb-5 mt-3" />
      <span class="font-weight-bold fs-16">
        Airport pickup details
      </span>
      <v-layout v-if="serviceDetails.formData.flightStatus">
        <v-col class="pl-0">
          <span class="fs-12">
            Flight No.
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.flightNo }}</span>
        </v-col>
        <v-col>
          <span class="fs-12">
            Flight Date/time
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.flightDateTime }}</span>
        </v-col>
      </v-layout>
      <v-layout v-else>
        <v-col class="pl-0">
          <span class="fs-12">
            Non Flight
          </span>
        </v-col>
      </v-layout>
      <v-divider class="mb-5 mt-3" />
      <span class="font-weight-bold fs-16">
        Passenger detail
      </span>
      <v-layout>
        <v-col class="pl-0">
          <span class="fs-12">
            Name
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.title }}.</span>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.name }}</span>
        </v-col>
        <v-col>
          <span class="fs-12">
            Phone
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.phone }}</span>
        </v-col>
        <v-col>
          <span class="fs-12">
            Email
          </span><br>
          <span class="font-weight-bold black--text">{{ serviceDetails.formData.email }}</span>
        </v-col>
      </v-layout>
      <v-col
        v-if="serviceDetails.formData.recipients.length"
        class="pl-0"
      >
        <span class="fs-12">
          Recipients
        </span><br>
        <span
          v-for="(recipient, index) in serviceDetails.formData.recipients"
          :key="index"
          class="font-weight-bold black--text"
        >{{ recipient }}</span>
      </v-col>
      <v-divider class="mb-5 mt-3" />
      <span class="font-weight-bold fs-16">
        Add on
      </span>
      <v-col class="pl-0">
        <div
          v-for="(addOn, index) in serviceDetails.formData.addOns"
          :key="index"
          class="font-weight-bold black--text mr-3"
        >
          <span>
            {{ addOn.AACaption }}
            &nbsp;฿{{ addOn.AAUnitPrice }}
            <span>
              &nbsp;x{{ addOn.quantity }}
            </span>
            &nbsp;{{ addOn.AAUnitCount }}
          </span>
        </div>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    serviceDetails: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
