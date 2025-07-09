<!-- src/components/ui/PasswordInput.vue -->
<script setup>
import { ref } from 'vue'

defineProps({
  id: String,
  label: String,
  modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

const showPassword = ref(false)

const toggleVisibility = () => {
  showPassword.value = !showPassword.value
}

const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
}
</script>

<template>
  <div class="relative w-full">
    <input
      :id="id"
      :type="showPassword ? 'text' : 'password'"
      :value="modelValue"
      @input="updateValue"
      placeholder=" "
      class="peer block w-full appearance-none border border-gray-300 bg-transparent px-3 pt-6 pb-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 rounded-md"
    />

    <label
      :for="id"
      class="absolute left-2 -top-2 z-10 bg-white px-1 text-sm text-blue-600 transition-all duration-150
        peer-placeholder-shown:top-4 peer-placeholder-shown:left-3 peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500
        peer-focus:-top-2 peer-focus:left-2 peer-focus:text-sm peer-focus:bg-white peer-focus:text-blue-600"
    >
      {{ label }}
    </label>

    <button
      type="button"
      @click="toggleVisibility"
      class="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-blue-600 text-sm"
      tabindex="-1"
    >
      {{ showPassword ? 'Hide' : 'Show' }}
    </button>
  </div>
</template>
