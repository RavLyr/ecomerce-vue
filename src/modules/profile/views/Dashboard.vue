<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from '../../auth/stores/auth'

const auth = useAuthStore()

onMounted(() => {
  if (!auth.user) {
    auth.fetchUser()
  }
})

const logout = () => {
  auth.logout()
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold">Dashboard</h1>
      <button @click="logout" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
        Logout
      </button>
    </div>

    <div class="bg-white shadow rounded p-6">
      <h2 class="text-xl font-semibold mb-2">Welcome, {{ auth.user?.name || '...' }}</h2>
      <p class="text-gray-600">Email: {{ auth.user?.email || '...' }}</p>
    </div>
  </div>
</template>
