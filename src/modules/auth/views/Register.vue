<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

const auth = useAuthStore()

const register = async () => {
  try {
    await auth.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    })
  } catch (error) {
    alert('Gagal registrasi: ' + error.response?.data?.message || 'Unknown error')
  }
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-md p-8 bg-white rounded shadow">
      <h2 class="text-2xl font-semibold mb-6 text-center">Register</h2>
      <input
        v-model="name"
        type="text"
        placeholder="Full Name"
        class="mb-3 w-full p-2 border rounded"
      />
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="mb-3 w-full p-2 border rounded"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="mb-3 w-full p-2 border rounded"
      />
      <input
        v-model="password_confirmation"
        type="password"
        placeholder="Confirm Password"
        class="mb-5 w-full p-2 border rounded"
      />
      <button
        @click="register"
        class="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>

      <p class="text-sm mt-4 text-center">
        Already have an account?
        <RouterLink to="/login" class="text-blue-600 underline">Login here</RouterLink>
      </p>
    </div>
  </div>
</template>
