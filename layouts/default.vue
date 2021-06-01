<template>
  <v-app>
    <!-- app-bar -->
    <v-app-bar
      app
      flat
      fixed
      color="black"
    >
      <v-container>
        <v-layout align-center justify-space-between>
          <div>
            <v-img width="86" height="32" :src="logo" @click="onModal" />
          </div>
          <div>
            <v-btn
              color="black"
              rounded
              depressed
              class="font-weight-black _text-transform white--text"
              to="/"
            >
              <v-icon size="20">
                mdi-help-circle
              </v-icon>
              <span class="ml-1">
                Help
              </span>
            </v-btn>
            <v-btn
              light
              rounded
              depressed
              class="font-weight-black _text-transform"
            >
              Login / Register
            </v-btn>
          </div>
        </v-layout>
      </v-container>
      <template
        v-if="$route.name === 'create'"
        #extension
      >
        <v-toolbar
          class="elevation-3"
          flat
          light
          dense
        >
          <v-container>
            <v-col class="pa-0" cols="9">
              <v-layout align-center>
                <v-layout align-center align-space-between>
                  <span class="font-weight-bold">Booking 1 item</span>
                  <v-col cols="6">
                    <v-select
                      v-model="company"
                      :items="companyList"
                      item-text="name"
                      item-value="name"
                      outlined
                      rounded
                      dense
                      hide-details
                    />
                  </v-col>
                </v-layout>
                <v-btn
                  rounded
                  depressed
                  color="blue"
                  class="_text-transform white--text"
                  @click="addService"
                >
                  <v-icon class="mr-2">
                    mdi-plus-circle
                  </v-icon>
                  Add Service
                </v-btn>
              </v-layout>
            </v-col>
          </v-container>
        </v-toolbar>
      </template>
    </v-app-bar>
    <div>
      <v-dialog :value="modalService" persistent width="400">
        <service-card @closeModal="closeModal" />
      </v-dialog>
    </div>
    <modal-leave-booking
      :modal-leave="modalLeave"
      @close="close"
      @confirm="confirm"
    />
    <!-- main -->
    <v-main style="background-color: #f7f9fa">
      <nuxt />
    </v-main>
    <!-- footer -->
    <v-footer flat color="black">
      <v-container>
        <v-layout justify-space-between class="white--text">
          <v-col>
            <p>
              Company
            </p>
            <div
              v-for="menu in companysList"
              :key="menu.index"
            >
              <a
                class="grey--text"
                @click="to(menu.to)"
              >
                {{ menu.title }}
              </a><br>
            </div>
          </v-col>
          <v-col>
            <p>
              Products
            </p>
            <div
              v-for="menu in productList"
              :key="menu.index"
            >
              <a
                class="grey--text"
                @click="to(menu.to)"
              >
                {{ menu.title }}
              </a><br>
            </div>
          </v-col>
          <v-col>
            <p>
              Help
            </p>
            <div
              v-for="menu in helpList"
              :key="menu.index"
            >
              <a
                class="grey--text"
                @click="to(menu.to)"
              >
                {{ menu.title }}
              </a>
            </div>
          </v-col>
          <v-col>
            <p class="ml-4">
              Follow us
            </p>
            <v-layout justify-space-between class="mt-6">
              <v-btn small color="black">
                <v-icon color="white">
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn small color="black">
                <v-icon color="white">
                  mdi-youtube
                </v-icon>
              </v-btn>
              <v-btn small color="black">
                <v-icon color="white">
                  mdi-instagram
                </v-icon>
              </v-btn>
              <v-btn small color="black">
                <v-icon color="white">
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </v-layout>
          </v-col>
          <v-col cols="1" />
          <v-col cols="3">
            <p class="ml-4">
              Terms & Conditions
            </p>
            <p class="ml-4">
              Privacy Policy
            </p>
          </v-col>
        </v-layout>
      </v-container>
      <v-container class="white--text">
        <v-layout justify-center>
          <span class="fs-10">
            © Copyright - Joyrepublic.co
          </span>
        </v-layout>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      company: 'Joy Technology Co.,Ltd',
      modalLeave: false,
      modalService: false,
      logo: require('static/logo/Logo@3x.png'),
      companysList: [
        {
          title: 'About us',
          to: '/'
        },
        {
          title: 'How it works',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/'
        },
        {
          title: 'Investors',
          to: '/'
        }
      ],
      productList: [
        {
          title: 'Limousine',
          to: '/'
        },
        {
          title: 'Airport Services',
          to: '/'
        },
        {
          title: 'Rent',
          to: '/'
        }
      ],
      helpList: [
        {
          title: 'Help center',
          to: '/'
        },
        {
          title: 'Contact us',
          to: '/'
        },
        {
          title: 'FAQ',
          to: '/'
        }
      ]
    }
  },
  computed: {
    ...mapState('company', ['companyList'])
  },
  async created () {
    await this.getCompanyList()
  },
  methods: {
    ...mapActions({
      getCompanyList: 'company/getCompanyList'
    }),
    to (target) {
      this.$router.push(target)
    },
    addService () {
      this.modalService = true
    },
    closeModal () {
      this.modalService = false
    },
    onModal () {
      this.modalLeave = true
    },
    close () {
      this.modalLeave = false
    },
    confirm () {
      this.$router.push('/')
      this.close()
    }
  }
}
</script>

<style>
.v-toolbar__extension {
  padding: 0px;
}
</style>
