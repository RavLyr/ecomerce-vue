<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/modules/auth/stores/auth'
import UIInput from '@/components/ui/Input.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import { useToast } from 'vue-toastification'


const email = ref('')
const password = ref('')
const auth = useAuthStore()

const toast = useToast()


const login = async () => {
  try {
    await auth.login(email.value, password.value)
    toast.success('Login berhasil! Selamat datang kembali 👋')
  } catch (e) {
    toast.error('Login gagal: ' + (e.response?.data?.message || 'Periksa kembali kredensial Anda'))
  }
}

const isFormValid = computed(() => {
  return email.value && password.value
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-5xl grid md:grid-cols-2 gap-8 p-6 md:p-12 shadow-lg rounded-lg">
      <!-- Illustration Side -->
      <div class="hidden md:flex flex-col items-center justify-center text-center px-4">
        <img src="@\assets\img\image.png" alt="Mascot" class="w-full max-w-[400px] mb-6 h-auto" />
        <h3 class="text-xl text-gray-900 font-semibold mb-2">
          Selamat Datang Kembali
        </h3>
        <p class="text-gray-600 text-sm max-w-sm">
          Masuk untuk melanjutkan transaksi simpel, cepat, dan aman bersama kami.
        </p>
      </div>

      <!-- Login Form Card -->
      <div class="w-full bg-white border border-gray-200 rounded-lg shadow p-6">
        <div class="mb-6 text-center">
          <h2 class="text-2xl font-bold mb-2 text-gray-800">Login</h2>
          <p class="text-sm text-gray-600">Masukkan email dan password Anda</p>
        </div>

        <UIInput v-model="email" label="Email" id="login-email" class="mb-4" />
        <PasswordInput v-model="password" label="Password" id="login-password" class="mb-6" />

        <button @click="login" :disabled="!isFormValid"
          class="w-full py-2 rounded font-semibold transition bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Masuk
        </button>

        <p class="text-sm text-center mt-4">
          Belum punya akun?
          <RouterLink to="/register" class="text-blue-600 underline hover:text-blue-800">
            Daftar di sini
          </RouterLink>
        </p>

        <p class="text-xs text-gray-500 mt-4 text-center">
          Dengan masuk, Anda menyetujui <span class="underline">Syarat</span> dan <span class="underline">Kebijakan
            Privasi</span> kami.
        </p>
      </div>
    </div>
  </div>
</template>
