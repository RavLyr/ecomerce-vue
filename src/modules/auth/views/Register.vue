<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/modules/auth/stores/auth'
import UIInput from '@/components/ui/Input.vue'
import PasswordInput from '@/components/ui/PasswordInput.vue'
import { useToast } from 'vue-toastification'


const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

const auth = useAuthStore()
const toast = useToast()

const register = async () => {
  try {
    await auth.register({
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    })
    toast.success('Registrasi berhasil! Selamat datang 🎉')
  } catch (error) {
    toast.error('Gagal registrasi: ' + (error.response?.data?.message || 'Terjadi kesalahan'))
  }
}

const isFormValid = computed(() => {
  return (
    name.value &&
    email.value &&
    password.value &&
    password_confirmation.value &&
    password.value === password_confirmation.value
  )
})
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="w-full max-w-5xl grid md:grid-cols-2 gap-8 p-6 md:p-12shadow rounded-lg">

      <div class="flex flex-col items-center justify-center text-center px-4">
        <img src="@\assets\img\register.png" alt="Mascot" class="w-full max-w-[400px] mb-6" />
        <h3 class="text-xl text-gray-900 font-semibold mb-2">
          Bergabung sekarang
        </h3>
        <p class="text-gray-600 text-sm max-w-sm">
          Rasakan pengalaman transaksi yang simpel, cepat, dan aman bersama komunitas kami.
        </p>
      </div>

      <div class="w-full bg-white border border-gray-200 rounded-lg shadow p-6">
        <div class="justify-center items-center mb-6 text-center">
          <h2 class="text-2xl font-bold mb-4 text-gray-800">Register Now</h2>
        </div>

        <UIInput v-model="name" label="Full Name" id="name" class="mb-4" />
        <UIInput v-model="email" label="Email" id="email" class="mb-4" />
        <PasswordInput v-model="password" label="Password" id="password" class="mb-4" />
        <PasswordInput v-model="password_confirmation" label="Confirm Password" id="confirmPassword" class="mb-6" />

        <button @click="register" :disabled="!isFormValid"
          class="w-full py-2 rounded font-semibold transition bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
          Daftar Sekarang
        </button>

        <p class="text-sm text-center mt-4">
          Sudah punya akun?
          <RouterLink to="/login" class="text-blue-600 underline hover:text-blue-800">
            Login di sini
          </RouterLink>
        </p>

        <p class="text-xs text-gray-500 mt-4 text-center">
          Dengan mendaftar, Anda menyetujui <span class="underline">Syarat</span> dan <span class="underline">Kebijakan
            Privasi</span> kami.
        </p>
      </div>

    </div>
  </div>
</template>
