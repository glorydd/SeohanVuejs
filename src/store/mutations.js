import {setAuthInHeader, } from '@/services/auth'

const mutations = {
    LOGIN(state, access_token) {
        if (!access_token) return
        state.access_token = access_token
        localStorage.access_token = access_token 
        setAuthInHeader(access_token)
    },
    LOGOUT(state) {
        state.access_token = null
        state.account = null
        delete localStorage.access_token
        setAuthInHeader(null)
    },
    // 사용자
    SET_ACCOUNT(state, data) {
        state.account = []
        state.account = data 
        localStorage.user = JSON.stringify(data)
    },
    SET_ACCOUNT_LIST(state, data) {
        state.accountList = []
        state.accountList = data
    },
    SET_SEARCH_MODE(state, data) {
        state.search.mode = data.mode
        state.search.keyword = data.keyword
        state.search.option = data.option
        state.search.sort = data.sort
        state.search.page = data.page
    },
    CLEAR_SEARCH_MODE(state) {
        state.search.mode = false
        state.search.keyword = ''
        state.search.option = ''
        state.search.sort = ''
        state.search.page = ''
    },
    CLEAR_ACCOUNT_FILE(state) {
        state.account.accountFile = []
    },
}

export default mutations;
