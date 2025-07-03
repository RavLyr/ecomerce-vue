import { defineStore } from 'pinia'
import router from '../../../router'
import { getUser, login, logout, register } from '../api'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      const response = await login({ email, password })
      this.token = response.data.token
      localStorage.setItem('token', this.token)
      await this.fetchUser()
      router.push('/dashboard')
    },
    async fetchUser() {
      if (!this.token) return
      const response = await getUser()
      this.user = response.data
    },
    async logout() {
      await logout()
      this.token = null
      this.user = null
      localStorage.removeItem('token')
      router.push('/login')
    },
    async register(payload) {
      await register(payload)
      router.push('/login')
    },
  },
})
