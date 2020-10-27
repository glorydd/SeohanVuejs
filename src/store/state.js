// const user = JSON.parse(localStorage.user)
// const initialState = user
//   ? { status: { loggedIn: true }, user }
//   : { status: {}, user: null }

const state = {
  access_token: null,
  account: [],        // 로그인 사용자 정보  

  search: {
    mode: false,
    keyword: '',
    option: '',
    sort: '',
    page: ''
  },

  operationStatus: ''

}
export default state;