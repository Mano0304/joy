import { GeoService } from './providers'
export const state = () => ({
  geoList: []
})

export const actions = {
  async getGeoList ({ commit }, text) {
    const data = await GeoService.getGeoList(text)
    commit('SET_GEO_LIST', data)
  }
}

export const mutations = {
  SET_GEO_LIST (state, data) {
    state.geoList = data.features
  }
}
