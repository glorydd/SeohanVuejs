import  { account}   from '@/services/auth';

const actions  = {

    LOGIN({commit, dispatch}, playload) {
      return account.login(playload)
        .then(({data}) => {
        commit('LOGIN', data.access_token)
        dispatch('FETCH_ACCOUNT')
        })
    },
    LOGOUT(state) {
      state.access_token = null
      state.account = null      
      delete localStorage.user
      delete localStorage.access_token
      setAuthInHeader(null)
    },

    // 사용자
    
    FETCH_ACCOUNT({commit}) {
    return account.fetch()
        .then(({data}) => {
        commit('SET_ACCOUNT', data)
        return data.status
        })
    },
    FETCH_MANAGER_ACCOUNT({commit}, playload) {
    return account.fetchManager(playload)
        .then(({data}) => {
        commit('SET_ACCOUNT_LIST', data)
        })
    },
}
export default actions;
