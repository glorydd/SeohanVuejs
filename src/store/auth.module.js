import {Auth} from '@/services'
import mutations from './mutations'
import actions from "./actions";
import state from "./state"

export const auth = {
  namespaced: true,
  state: state,  
  mutations: mutations,
  actions : actions
};
