export const state = () => ({
  addOnList: []
})

export const actions = {
  getAddOnList ({ commit }, data) {
    commit('SET_ADD_ON_LIST', [
      {
        id: '1',
        image: require('../static/addon/LEOCAN320.png'),
        name: 'LEO Beer (Can)',
        price: '65',
        quantity: 0
      },
      {
        id: '2',
        image: require('../static/addon/2msee2.png'),
        name: 'Heineken 0.0 330ml 0.0% Abv.',
        price: '75',
        quantity: 0
      },
      {
        id: '3',
        image: require('../static/addon/marlboro-red-500x500.png'),
        name: 'MARLBORO RED USA SOFT PACK',
        price: '465',
        quantity: 0
      }
    ])
  }
}

export const mutations = {
  SET_ADD_ON_LIST (state, data) {
    state.addOnList = data
  }
}
