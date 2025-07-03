import GuestLayout from '@/layouts/GuestLayouts.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Welcome from '../../views/Welcome.vue'


export default [
  {
    path: '/',
    component: GuestLayout,
    children: [
      { path: '', name: 'Welcome', component: Welcome },
      { path: 'login', name: 'Login', component: Login },
      { path: 'register', name: 'Register', component: Register },
    ]
  }
]
