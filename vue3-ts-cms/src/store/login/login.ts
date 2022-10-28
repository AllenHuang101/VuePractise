import { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'
import localCache from '@/utils/cache'
import { IAccount } from '@/service/login/type'
import router from '@/router'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },

  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userInfo = userMenus
    }
  },
  getters: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      // 1.實現登入邏輯
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit('changeToken', token)
      localCache.setCache('token', token)

      // 2.請求用戶訊息
      const userInfoResult = await requestUserInfoById(id)
      console.log(userInfoResult)
      const userInfo = userInfoResult.data
      console.log(userInfo)
      commit('changeUserInfo', userInfo)
      localCache.setCache('userInfo', userInfo)

      // 3.請求用戶菜單
      const userMenuRequest = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenuRequest.data
      console.log(userMenus)
      commit('changeUserMenus', userMenus)
      localCache.setCache('userMenus', userMenus)

      // 4.跳到首頁
      router.push('/main')
    },
    loadLocalLogin({ commit }) {
      const token = localCache.getCache('token')

      if (token) {
        commit('changeToken', token)
      }

      const userInfo = localCache.getCache('userInfo')

      if (userInfo) {
        commit('changeUserInfo', userInfo)
      }

      const userMenus = localCache.getCache('userMenus')

      if (userMenus) {
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default loginModule
