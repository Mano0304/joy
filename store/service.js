export const state = () => ({
  serviceList: [],
  serviceRecommendList: [],
  limousineList: [],
  airportList: [],
  rentList: [],
  key: 0
})

export const actions = {
  getServiceList ({ commit }, data) {
    commit('ADD_SERVICE_LIST', [
      {
        id: '1',
        icon: require('~/static/icon/limousine.svg'),
        image: require('~/static/service/business-men-drive-side-photos-cars@3x.png'),
        title: 'Limousine',
        subTitle: 'Car with driver',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      },
      {
        id: '2',
        icon: require('~/static/icon/airplane.svg'),
        image: require('~/static/service/businessman-with-luggage-using-mobile-phone@3x.png'),
        title: 'Airport Services',
        subTitle: 'Fast track, Lounge, Bucky, etc.',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      },
      {
        id: '3',
        icon: require('~/static/icon/rent.svg'),
        image: require('~/static/service/portrait-young-man-using-face-mask-while-driving-his-car-his-way-work-transport-concept-new-normal-lifestyle-concept@3x.png'),
        title: 'Rent',
        subTitle: '',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      }
    ])
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
  }
}

export const mutations = {
  ADD_SERVICE_LIST (state, data) {
    state.serviceList = data
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
      switch (items.id) {
        case '1': state.limousineList.push({ ...items, key: state.key += 1 })
          break
        case '2': state.airportList.push({ ...items, key: state.key += 1 })
          break
        case '3': state.rentList.push({ ...items, key: state.key += 1 })
          break
      }
    })
  },
  DELETE_SERVICE_ITEM (state, idx) {
    state.limousineList.splice(idx - 1, 1)
  }
}
