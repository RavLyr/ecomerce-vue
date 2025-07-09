<script setup lang="ts">
defineProps({
  label: String,
  id: String,
  modelValue: String,
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(e: Event) {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="relative w-full">
    <input
      :id="id"
      :value="modelValue"
      @input="onInput"
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
  </div>
</template>

