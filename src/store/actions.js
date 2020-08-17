import  auth   from '@/services/auth';
  
const actions  = {
    
    login ({ commit }, user) {
        return auth.login(user).then(
        user => {
            commit('loginSuccess', user)
            return Promise.resolve(user)
        },
        error => {
            commit('loginFailure')
            return Promise.reject(error.response.data);
        }
        );
    },
    logout({ commit }) {
        auth.logout();
        commit('logout');
    },    
    register({ commit }, user) {
        return auth.register(user).then(
        response => {
            commit('registerSuccess');
            return Promise.resolve(response.data);
        },
        error => {
            commit('registerFailure');
            return Promise.reject(error.response.data);
        }
        );
    },
       

    
    LOGIN({commit, dispatch}, playload) {
    return auth.login(playload)
        .then(({data}) => {
        commit('LOGIN', data.access_token)
        dispatch('FETCH_ACCOUNT')
        })
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
    ADD_ACCOUNT(_, playload) {
    return account.create(playload)
        .then((data) => (data.status))
    },
    UPDATE_ACCOUNT({dispatch}, playload) {
    return account.put(playload)
        .then(() => {
        dispatch('FETCH_ACCOUNT')
        })
    },
    FETCH_MANAGER_ACCOUNT_SEARCH({commit}, playload) {
    return account.fetchManagerSearch(playload)
        .then(({data}) => {
        commit('SET_ACCOUNT_LIST', data)
        })
    },
    JOIN_ID_CHECK(_, playload) {
    return account.idCheck(playload)
        .then((data) => (data))
    },
    ADD_ACCOUNT_FILE({commit, dispatch}, playload) {
    return account.createFiles(playload)
        .then(({data}) => {
        commit('CLEAR_ACCOUNT_FILE')
        })
    },
} 
export default actions;