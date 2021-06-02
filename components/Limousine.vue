<template>
  <v-card>
    <v-card-title class="justify-space-between">
      <v-layout align-center>
        <div>
          <v-img
            class="_opacity-items"
            :src="serviceDetails.icon"
          />
        </div>
        <span class="font-weight-bold fs-24 ml-3">{{ serviceDetails.title }}</span>
        <span class="font-weight-bold fs-24 ml-3">{{ serviceDetails.index }}</span>
      </v-layout>
      <v-layout justify-end>
        <v-btn
          color="white"
          rounded
          depressed
          class="font-weight-bold _text-transform grey--text"
          @click="deleteService(serviceDetails.index)"
        >
          <v-icon size="18">
            mdi-delete
          </v-icon>
          <span class="text-decoration-underline fs-14">Delete</span>
        </v-btn>
      </v-layout>
      <modal-delete :modal-delete="modalDelete" @close="closeModalDelete" @confirm="confirmDelete(serviceDetails.index)" />
    </v-card-title>
    <v-card-subtitle>
      <select-button :type-limousine="formData.type" @selectType="selectType" />
    </v-card-subtitle>
    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <span class="font-weight-bold fs-16">Service detail</span>
        <v-layout>
          <v-col class="pl-0">
            <v-autocomplete
              v-model="formData.form"
              :rules="[notEmptyField]"
              append-icon=""
              :items="geoFormList"
              :search-input.sync="searchForm"
              :loading="isLoadingForm"
              item-text="place_name"
              outlined
              dense
              hide-details
              label="Form*"
            />
          </v-col>
          <v-col class="pl-0">
            <v-autocomplete
              v-model="formData.to"
              :rules="[notEmptyField]"
              append-icon=""
              :items="geoToList"
              :search-input.sync="searchTo"
              :loading="isLoadingTo"
              item-text="place_name"
              outlined
              dense
              hide-details
              label="To*"
            />
          </v-col>
          <v-col class="pl-0">
            <base-date-time
              v-model="formData.dateTime"
              label="Date/time*"
              :rules="[notEmptyField]"
              @changeDateTime="changeDateTime"
            />
          </v-col>
          <v-col class="pl-0">
            <v-select
              v-if="formData.type === 'Charter'"
              v-model="formData.duration"
              :disabled="onServiceClass"
              :items="durationList"
              item-text="name"
              item-value="name"
              :rules="[notEmptyField]"
              outlined
              dense
              hide-details
              label="Duration*"
            />
          </v-col>
        </v-layout>
        <v-layout class="mb-3" align-center>
          <v-col cols="3" class="py-0 pl-0">
            <v-text-field
              v-model="formData.serviceClass.carType"
              :disabled="onServiceClass"
              :rules="[notEmptyField]"
              readonly
              outlined
              dense
              hide-details
              label="Service Class"
              @click="onModalServiceClass"
            />
          </v-col>
          <v-col
            v-if="Object.keys(formData.serviceClass).length"
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
                >{{ formData.serviceClass.carType }}</span>
              </v-col>
              <v-icon>mdi-seat</v-icon>
              <v-col class="pa-0 pl-2">
                <span class="fs-12">Seating</span><br>
                <span
                  class="fs-12 font-weight-bold"
                  style="color: #d9b735;"
                >{{ formData.serviceClass.seating }}</span>
              </v-col>
              <v-icon>mdi-bag-carry-on</v-icon>
              <v-col class="pa-0 pl-2">
                <span class="fs-12">Luggage</span><br>
                <span
                  class="fs-12 font-weight-bold"
                  style="color: #d9b735;"
                >{{ formData.serviceClass.luggage }}</span>
              </v-col>
            </v-layout>
          </v-col>
        </v-layout>
        <v-btn
          class="_text-transform mb-3 pl-0"
          depressed
          rounded
          color="white"
          @click="addRemark === true ? addRemark = false : addRemark = true"
        >
          <v-icon
            v-if="addRemark"
            class="mr-3"
            color="primary"
          >
            mdi-minus-circle
          </v-icon>
          <v-icon
            v-else
            class="mr-3"
            color="primary"
          >
            mdi-plus-circle
          </v-icon>
          <span
            v-if="addRemark"
            class="blue--text"
          >Cancel</span>
          <span
            v-else
            class="blue--text"
          >Write a message for plan, remark, etc</span>
        </v-btn><br>
        <v-col class="pl-0 pt-0" cols="6">
          <v-textarea
            v-if="addRemark"
            v-model="formData.remark"
            placeholder="Ex : A place to visit timeline on trip"
            rows="3"
            outlined
            hide-details
            dense
          />
        </v-col>
        <span class="font-weight-bold fs-16">Airport pickup details</span>
        <v-layout class="mb-5">
          <v-col
            cols="3"
            class="pl-0"
          >
            <v-radio-group
              v-model="formData.flightStatus"
              class="mt-0"
              dense
              hide-details
              row
            >
              <v-radio
                class="mr-1"
                :value="false"
                label="Non Flight"
              />
              <v-radio
                class="mr-0"
                :value="true"
                label="Flight"
              />
            </v-radio-group>
          </v-col>
          <v-col
            v-if="formData.flightStatus"
            cols="3"
            class="pl-0"
          >
            <v-text-field
              v-model="formData.flightNo"
              :rules="[notEmptyField]"
              outlined
              dense
              hide-details
              label="Flight No.*"
            />
          </v-col>
          <v-col
            v-if="formData.flightStatus"
            cols="3"
            class="pl-0"
          >
            <base-date-time
              v-model="formData.flightDateTime"
              label="Flight Date/time*"
              :rules="[notEmptyField]"
              @changeDateTime="changeFlightDateTime"
            />
          </v-col>
        </v-layout>
        <span class="font-weight-bold fs-16">Passenger detail</span>
        <v-col cols="3" class="pl-0">
          <v-select
            v-model="formData.title"
            :rules="[notEmptyField]"
            :items="titleList"
            item-text="label"
            item-value="label"
            outlined
            dense
            hide-details
            label="Title*"
          />
        </v-col>
        <v-layout class="mb-5">
          <v-col cols="3" class="pl-0">
            <v-text-field
              v-model="formData.name"
              :rules="[notEmptyField]"
              outlined
              dense
              hide-details
              label="Name*"
            />
          </v-col>
          <v-col cols="3" class="pl-0">
            <base-phone-input
              v-model="formData.phone"
              label="Phone*"
              :rules="[notEmptyField, notPhoneField]"
              outlined
              hide-details
              dense
            />
          </v-col>
          <v-col cols="3" class="pl-0">
            <v-text-field
              v-model="formData.email"
              :rules="[notEmptyField, notEmailField]"
              outlined
              dense
              hide-details
              label="Email*"
            />
          </v-col>
        </v-layout>
        <span class="font-weight-bold mr-2">Recipients</span>
        <span class="fs-12 mr-1">Please enter the email on which the guest would like to receive notifications</span>
        <v-icon size="14">
          mdi-bell-ring
        </v-icon>
        <v-layout class=" pt-3 mb-5">
          <span>To</span>
          <v-autocomplete
            :key="itemRecipients.length"
            ref="itemRecipients"
            class="ml-2"
            :value="formData.recipients"
            :items="itemRecipients"
            chips
            dense
            small-chips
            deletable-chips
            hide-no-data
            hide-details
            hide-selected
            required
            multiple
            append-icon=""
            @keyup.enter="event => onEnter(event)"
            @change="value => changeItems(value)"
          />
        </v-layout>
        <v-layout>
          <span class="font-weight-bold fs-16 mr-3">Add on</span>
          <v-layout v-if="formData.addOns.length">
            <v-icon small color="#1f86fd">
              mdi-pencil
            </v-icon>
            <a class="text-decoration-underline" @click="onModalAddOn">Edit</a>
          </v-layout>
        </v-layout>
        <v-layout v-if="!formData.addOns.length" class="mt-3">
          <v-btn
            rounded
            depressed
            color="#1f86fd"
            width="80"
            class="text-transform white--text font-weight-bold"
            @click="onModalAddOn"
          >
            <v-icon>
              mdi-plus-circle
            </v-icon>
          </v-btn>
          <v-layout align-center class="ml-3">
            <span class="caption">Ex. drinks, lighters, etc. </span>
          </v-layout>
        </v-layout>
        <v-layout class="mt-3">
          <div
            v-for="(addOn, index) in formData.addOns"
            :key="index"
            class="pa-1 px-5 tab-button mr-3"
          >
            <span class="fs-10">{{ addOn.name }}&nbsp;฿{{ addOn.price }}<span class="blue--text">&nbsp;x{{ addOn.quantity }}</span></span>
          </div>
        </v-layout>
        <modal-add-on
          :modal-add-on="modalAddOn"
          @closeModal="closeModalAddOn"
          @confirm="confirmAddOn"
        />
        <modal-service-class
          :value="modalServiceClass"
          @closeModal="closeModalServiceClass"
          @onSelect="onSelectServiceClass"
        />
      </v-form>
    </v-card-text>
    <v-divider />
    <v-card-text>
      <v-layout justify-end>
        <span class="fs-18 font-weight-bold">Price:</span>
        <v-col cols="1" class="pa-0">
          <v-layout justify-end>
            <span class="font-weight-bold fs-24">฿{{ formData.totalPrice }}</span>
          </v-layout>
        </v-col>
      </v-layout>
      <v-layout justify-end>
        <span class="fs-12">All prices include VAT</span>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { EMAIL_REGEX_TEMPLATE, TEL_REGEX_TEMPLATE } from '../utils/regex'
export default {
  props: {
    serviceDetails: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      valid: true,
      itemRecipients: [],
      modalDelete: false,
      addRemark: false,
      isLoadingForm: false,
      isLoadingTo: false,
      searchForm: null,
      searchTo: null,
      geoFormList: [],
      geoToList: [],
      modalAddOn: false,
      modalServiceClass: false,
      formData: {
        key: this.serviceDetails.key,
        type: 'Transfer',
        form: '',
        to: '',
        dateTime: '',
        duration: '',
        remark: '',
        serviceClass: {},
        flightStatus: false,
        flightNo: '',
        flightDateTime: '',
        title: '',
        name: '',
        phone: '',
        email: '',
        recipients: [],
        addOns: [],
        totalPrice: 0
      },
      titleList: [
        {
          id: '1',
          label: 'Mr'
        },
        {
          id: '2',
          label: 'Mrs'
        },
        {
          id: '3',
          label: 'Miss'
        },
        {
          id: '4',
          label: 'Dr'
        },
        {
          id: '5',
          label: 'Professor'
        },
        {
          id: '6',
          label: 'Not specified'
        }
      ],
      durationList: [
        {
          name: '2 h'
        },
        {
          name: '3 h'
        },
        {
          name: '4 h'
        },
        {
          name: '5 h'
        },
        {
          name: '6 h'
        },
        {
          name: '7 h'
        },
        {
          name: '8 h'
        },
        {
          name: '9 h'
        },
        {
          name: '10 h'
        },
        {
          name: '11 h'
        },
        {
          name: '12 h'
        },
        {
          name: '13 h'
        },
        {
          name: '14 h'
        },
        {
          name: '15 h'
        },
        {
          name: '16 h'
        },
        {
          name: '17 h'
        },
        {
          name: '18 h'
        },
        {
          name: '19 h'
        },
        {
          name: '20 h'
        },
        {
          name: '21 h'
        },
        {
          name: '22 h'
        },
        {
          name: '23 h'
        },
        {
          name: '24 h'
        }
      ]
    }
  },
  computed: {
    ...mapState('mapBox', ['geoList']),
    onServiceClass () {
      return !(this.formData.to !== '' && this.formData.form !== '')
    }
  },
  watch: {
    async searchForm (val) {
      if (!val) { return }
      if (val.length > 150) { return }
      val = val.replaceAll(/[^a-zA-Z0-9\u0E00-\u0E7F ]/g, '')
      if (val === '') { return }
      this.isLoadingForm = true
      await this.getGeoList(val)
      this.geoFormList = JSON.parse(JSON.stringify(this.geoList))
      this.isLoadingForm = false
    },
    async searchTo (val) {
      if (!val) { return }
      if (val.length > 150) { return }
      val = val.replaceAll(/[^a-zA-Z0-9\u0E00-\u0E7F ]/g, '')
      if (val === '') { return }
      this.isLoadingTo = true
      await this.getGeoList(val)
      this.geoToList = JSON.parse(JSON.stringify(this.geoList))
      this.isLoadingTo = false
    }
  },
  created () {
    if (this.serviceDetails.formData) {
      if (this.serviceDetails.formData.remark) {
        this.addRemark = true
      }
      this.searchForm = JSON.parse(JSON.stringify(this.serviceDetails.formData.form))
      this.searchTo = JSON.parse(JSON.stringify(this.serviceDetails.formData.to))
      this.formData = JSON.parse(JSON.stringify(this.serviceDetails.formData))
    }
    this.$bus.$on('changeLimousine', () => { this.changeLimousine() })
  },
  methods: {
    ...mapActions({
      getGeoList: 'mapBox/getGeoList',
      addLimousineData: 'service/addLimousineData'
    }),
    selectType (type) {
      this.formData.type = type
    },
    notEmptyField (v) {
      return !!v || 'Please enter information'
    },
    notEmailField (v) {
      return EMAIL_REGEX_TEMPLATE.test(v) || 'E-mail must be valid'
    },
    notPhoneField (v) {
      return TEL_REGEX_TEMPLATE.test(v) || 'Number Only'
    },
    onEnter (event) {
      if (!event.target.value) {
        return
      }
      if (this.notEmailField(event.target.value) === true) {
        this.itemRecipients.push(event.target.value)
        this.formData.recipients.push(event.target.value)
        this.$nextTick(() => this.$refs.itemRecipients.$refs.input.focus())
      } else {
        alert('E-mail must be valid')
      }
    },
    changeItems (value) {
      this.itemRecipients = JSON.parse(JSON.stringify(value))
    },
    closeModalServiceClass () {
      this.modalServiceClass = false
    },
    onModalServiceClass () {
      this.modalServiceClass = true
    },
    onSelectServiceClass (serviceClass) {
      this.formData.serviceClass = serviceClass
      this.formData.totalPrice = +serviceClass.price
      this.modalServiceClass = false
    },
    closeModalAddOn () {
      this.modalAddOn = false
    },
    onModalAddOn () {
      this.modalAddOn = true
    },
    confirmAddOn (addOns) {
      const addOnList = []
      addOns.forEach((x) => {
        if (x.quantity > 0) {
          addOnList.push(x)
        }
      })
      this.formData.addOns = addOnList
      this.modalAddOn = false
    },
    async changeLimousine () {
      const validateList = [
        this.$refs.form.validate()
      ]
      if (validateList.every(i => i)) {
        await this.addLimousineData(this.formData)
        this.$router.push('details')
      }
    },
    changeDateTime (v) {
      this.formData.dateTime = v
    },
    changeFlightDateTime (v) {
      this.formData.flightDateTime = v
    },
    deleteService () {
      this.modalDelete = true
    },
    confirmDelete (idx) {
      this.$emit('deleteService', idx)
      this.closeModalDelete()
    },
    closeModalDelete () {
      this.modalDelete = false
    }
  }
}
</script>

<style>
.v-text-field--outlined.v-input--dense .v-label {
  font-size: small;
}
</style>
