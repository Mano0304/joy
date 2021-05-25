export const state = () => ({
  serviceClassList: []
})

export const actions = {
  getServiceClassList ({ commit }, data) {
    commit('SET_SERVICE_CLASS_LIST', [
      {
        id: '1',
        image: require('~/static/serviceClass/E-C.png'),
        carType: 'Business Class',
        details: 'Mercedes-Benz E-Class, BMW 5 Series, Cadillac XTS or similar',
        seating: '3 Passengers',
        luggage: 'Max 2 Case',
        price: '1600'
      },
      {
        id: '2',
        image: require('~/static/serviceClass/213-2137210_mercedes-benz-v-class-mercedes-benz-v-class.png'),
        carType: 'Luxury Van',
        details: 'Mercedes-Benz V-Class, Chevrolet Suburban, Cadillac Escalade, Toyota Alphard or similar',
        seating: '4 Passengers',
        luggage: 'Max 4 Case',
        price: '3600'
      },
      {
        id: '3',
        image: require('~/static/serviceClass/134-1346353_3-luggage-mercedes-benz-s-class-png.png'),
        carType: 'First Class',
        details: 'Mercedes-Benz S-Class, BMW 7 Series, Audi A8 or similar',
        seating: '3 Passengers',
        luggage: 'Max 3 Case',
        price: '4600'
      }
    ])
  }
}

export const mutations = {
  SET_SERVICE_CLASS_LIST (state, data) {
    state.serviceClassList = data
  }
}
