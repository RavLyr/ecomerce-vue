<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const email = ref('')
const password = ref('')
const auth = useAuthStore()

const login = async () => {
  try {
    await auth.login(email.value, password.value)
  } catch (e) {
    alert('Login failed')
  }
}
</script>

<template>
  <div class="max-w-md mx-auto mt-10 p-4 border rounded">
    <h2 class="text-xl font-bold mb-4">Login</h2>
    <input v-model="email" placeholder="Email" class="w-full mb-2 p-2 border rounded" />
    <input
      v-model="password"
      type="password"
      placeholder="Password"
      class="w-full mb-4 p-2 border rounded"
    />
    <button @click="login" class="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
  </div>
</template>
