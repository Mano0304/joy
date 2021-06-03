import { AddOnsService } from './providers'

export const state = () => ({
  addOnList: []
})

export const actions = {
  async getAddOnList ({ commit }) {
    const data = await AddOnsService.getAddOns()
    commit('SET_ADD_ON_LIST', data.Response.Payloads[0].AvailableAddOn)
  }
}

export const mutations = {
  SET_ADD_ON_LIST (state, data) {
    state.addOnList = data.map(items => ({ ...items, quantity: 0 }))
  }
}
