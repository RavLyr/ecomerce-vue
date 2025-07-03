import axios from 'axios'

export function login(payload) {
  return axios.post('/login', payload)
}
export function register(payload) {
  return axios.post('/register', payload)
}
export function getUser() {
  return axios.get('/user')
}
export function logout() {
  return axios.post('/logout')
}
