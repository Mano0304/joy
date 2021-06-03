import { ServiceService } from './providers'

export const state = () => ({
  serviceList: [],
  serviceRecommendList: [],
  limousineList: [],
  airportList: [],
  rentList: [],
  key: 0
})

export const actions = {
  async getServiceList ({ commit }) {
    const data = await ServiceService.getService()
    const serviceList = data.Response.Payloads[0].AccessRights[1].AvailableCards
    commit('ADD_SERVICE_LIST', serviceList)
  },
  getServiceRecommendList ({ commit }, data) {
    commit('ADD_SERVICE_RECOMMEND_LIST', [
      {
        id: '2',
        icon: require('~/static/icon/airplane.svg'),
        image: require('~/static/service/businessman-with-luggage-using-mobile-phone@3x.png'),
        title: 'Airport Services',
        subTitle: 'Fast track, Lounge, Bucky, etc.',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      }
    ])
  },
  setServiceList ({ commit }, data) {
    commit('SET_SERVICE_LIST', data)
  },
  deleteServiceItem ({ commit }, idx) {
    commit('DELETE_SERVICE_ITEM', idx)
  },
  addLimousineData ({ commit }, data) {
    commit('ADD_LIMOUSINE_DATA', data)
  }
}

export const mutations = {
  ADD_SERVICE_LIST (state, serviceList) {
    state.serviceList = serviceList.map(items => ({ ...items, status: false }))
  },
  ADD_SERVICE_RECOMMEND_LIST (state, data) {
    state.serviceRecommendList = data
  },
  SET_SERVICE_LIST (state, data) {
    if (!data.length) {
      state.limousineList = []
      state.airportList = []
      state.rentList = []
    }
    data.forEach((items) => {
      switch (items.ASIndex) {
        case 1: state.limousineList.push({ ...items, key: state.key += 1 })
          break
        case 2: state.airportList.push({ ...items, key: state.key += 1 })
          break
        case 3: state.rentList.push({ ...items, key: state.key += 1 })
          break
      }
    })
  },
  DELETE_SERVICE_ITEM (state, idx) {
    state.limousineList.splice(idx - 1, 1)
  },
  ADD_LIMOUSINE_DATA (state, data) {
    const service = state.limousineList.find(x => x.key === data.key)
    const payload = { ...service, formData: data }
    const idx = state.limousineList.findIndex(x => x.key === data.key)
    state.limousineList.splice(idx, 1, payload)
  }
}
