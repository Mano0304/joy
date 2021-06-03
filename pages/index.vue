<template>
  <div v-if="serviceList.length" ref="home">
    <v-toolbar
      flat
      light
      dense
    >
      <v-container>
        <v-layout align-center>
          <a
            v-for="(menu, index) in menuList"
            :key="index"
            class="font-weight-bold black--text mr-10"
            @click="onTarget(menu.title)"
          >{{ menu.title }}</a>
        </v-layout>
      </v-container>
    </v-toolbar>
    <div id="myVideo">
      <video
        autoplay
        muted
        loop
      >
        <source
          :src="videoBg"
          type="video/mp4"
        >
        Your browser does not support HTML5 video.
      </video>
      <div class="contentTop">
        <v-container>
          <service-card />
        </v-container>
      </div>
      <div class="contentBottom">
        <v-container>
          <div>
            <span class="fs-71">
              Life is better
            </span>
            <p class="fs-71">
              With JOY.
            </p>
          </div>
          <div>
            <p class="fs-30">
              Helping to keep each other safe
            </p>
            <span class="fs-18">
              We’re actively monitoring the COVID-19 situation and are continually working
            </span>
            <p class="fs-18">
              to help keep those who rely on our platform healthy and safe.
            </p>
          </div>
        </v-container>
      </div>
    </div>
    <div
      ref="services"
      style="background-color: white;"
      class="pb-15"
    >
      <v-container class="pt-10">
        <v-layout justify-center>
          <span class="font-weight-bold black--text fs-30 my-10">Services</span>
        </v-layout>
        <v-layout justify-space-between>
          <v-card v-for="service in serviceList" :key="service.index" width="350" light flat>
            <v-layout justify-center>
              <div>
                <v-img width="150" :src="service.ASIMGUrl" />
              </div>
            </v-layout>
            <v-card-text class="px-0">
              <span class="font-weight-bold black--text fs-18">{{ service.ASCaption }}</span>
              <p class="fs-14">
                {{ service.ASDesc }}
              </p>
              <a
                to="service.link"
                class="text-decoration-underline black--text"
              >Learn more</a>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </div>
    <div
      ref="contact"
      style="background-color: #f7f9fa;"
      class="pb-5"
    >
      <v-container>
        <v-layout justify-space-between>
          <v-col>
            <p class="font-weight-bold fs-18 black--text mb-7">
              CONTACT US
            </p>
            <p class="font-weight-bold fs-16 black--text mb-1">
              Joy Technology Co.,Ltd
            </p>
            <p class="fs-14 grey--text mb-1">
              155, 10 Soi Sukhumvit 21 Klongtoey Nua, Watthana, Bangkok 10110
            </p>
            <v-icon size="14" color="black">
              mdi-phone
            </v-icon>
            <span class="fs-14 ml-1 grey--text">
              02-82105991
            </span>
            <v-icon size="14" color="black" class="ml-5">
              mdi-email
            </v-icon>
            <a class="fs-14 ml-1 text-decoration-underline blue--text">
              booking@joyrepublic.com
            </a>
          </v-col>
          <v-col cols="4">
            <span class="font-weight-bold black--text fs-18">Do not miss any news <br>
              and promotions.</span>
            <v-row class="pa-3">
              <v-text-field
                class="mt-3"
                light
                outlined
                dense
                hide-details
                placeholder="Email"
              />
              <v-btn
                color="#000000"
                class="ml-2 mt-3"
              >
                <v-icon color="white">
                  mdi-email
                </v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      videoBg: require('~/static/bg/tesla.mp4'),
      menuList: [
        {
          title: 'Home'
        },
        {
          title: 'Services'
        },
        {
          title: 'Contact'
        }
      ]
    }
  },
  computed: {
    ...mapState('service', ['serviceList'])
  },
  async created () {
    await this.getServiceList()
    await this.setServiceList([])
  },
  methods: {
    ...mapActions({
      getServiceList: 'service/getServiceList',
      setServiceList: 'service/setServiceList'
    }),
    onTarget (target) {
      switch (target) {
        case 'Home': this.$vuetify.goTo(this.$refs.home)
          break
        case 'Services' : this.$vuetify.goTo(this.$refs.services)
          break
        case 'Contact' : this.$vuetify.goTo(this.$refs.contact)
          break
      }
    }
  }
}
</script>

<style>
#myVideo {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 650px;
}

.contentTop {
  position: absolute;
  top: 0;
  left: 60%;
  padding: 20px;
  color: #ffffff;
}

.contentBottom {
  position: absolute;
  bottom: 0;
  left: 10%;
  padding: 20px;
  color: #ffffff;
}
</style>
