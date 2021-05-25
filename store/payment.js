export const state = () => ({
  paymentList: []
})

export const actions = {
  getPaymentList ({ commit }, data) {
    commit('SET_PAYMENT_LIST', [
      {
        id: '1',
        name: 'QR code'
      },
      {
        id: '2',
        name: 'Billing'
      },
      {
        id: '3',
        name: 'House use'
      }
    ])
  }
}

export const mutations = {
  SET_PAYMENT_LIST (state, data) {
    state.paymentList = data
  }
}
