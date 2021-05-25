export const state = () => ({
  serviceList: [],
  serviceRecommendList: []
})

export const actions = {
  getServiceList ({ commit }, data) {
    commit('SET_SERVICE_LIST', [
      {
        id: '1',
        icon: require('~/static/icon/limousine.png'),
        image: require('~/static/service/business-men-drive-side-photos-cars@3x.png'),
        title: 'Limousine',
        subTitle: 'Car with driver',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      },
      {
        id: '2',
        icon: require('~/static/icon/airplane.png'),
        image: require('~/static/service/businessman-with-luggage-using-mobile-phone@3x.png'),
        title: 'Airport Services',
        subTitle: 'Fast track, Lounge, Bucky, etc.',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      },
      {
        id: '3',
        icon: require('~/static/icon/Rent.png'),
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
    commit('SET_SERVICE_RECOMMEND_LIST', [
      {
        id: '2',
        icon: require('~/static/icon/airplane.png'),
        image: require('~/static/service/businessman-with-luggage-using-mobile-phone@3x.png'),
        title: 'Airport Services',
        subTitle: 'Fast track, Lounge, Bucky, etc.',
        details: 'contentcontentcontentcontentcontentcontent',
        link: '/',
        status: false
      }
    ])
  }
}

export const mutations = {
  SET_SERVICE_LIST (state, data) {
    state.serviceList = data
  },
  SET_SERVICE_RECOMMEND_LIST (state, data) {
    state.serviceRecommendList = data
  }
}
