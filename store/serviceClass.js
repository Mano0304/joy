import { ServiceClassService } from './providers'

export const state = () => ({
  serviceClassList: []
})

export const actions = {
  async getServiceClassTransferList ({ commit }) {
    const data = await ServiceClassService.getServiceClassTransfer()
    commit('SET_SERVICE_CLASS_LIST', data.Response.Payloads[0].AvailableServiceClass)
  },
  async getServiceClassCharterList ({ commit }) {
    const data = await ServiceClassService.getServiceClassCharter()
    commit('SET_SERVICE_CLASS_LIST', data.Response.Payloads[0].AvailableServiceClass)
  }
}

export const mutations = {
  SET_SERVICE_CLASS_LIST (state, data) {
    state.serviceClassList = data
  }
}
