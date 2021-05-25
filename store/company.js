export const state = () => ({
  companyList: []
})

export const actions = {
  getCompanyList ({ commit }, data) {
    commit('SET_COMPANY_LIST', [
      {
        id: '1',
        name: 'Joy Technology Co.,Ltd'
      }
    ])
  }
}

export const mutations = {
  SET_COMPANY_LIST (state, data) {
    state.companyList = data
  }
}
