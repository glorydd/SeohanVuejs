import AuthService from '@/services/auth/auth.service'
import {mutation} from './mutation'
import { action } from "./action";
import {state} from "./state"

export const auth = {
  namespaced: true,
  state: state,  
  mutations: mutation,
  actions : action
};
