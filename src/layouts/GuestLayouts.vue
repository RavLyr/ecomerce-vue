<script setup lang="ts">
import { RouterView } from 'vue-router';

</script>

<template>
  <div class="min-h-screen bg-gray-50 p-6">
    <header class="text-center mb-8">
      <h1 class="text-3xl font-bold">VueCommerce</h1>
    </header>
    <main class="max-w-md mx-auto bg-white p-6 shadow rounded">
      <RouterView />
    </main>
  </div>
</template>
