<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="text-center space-y-4">
      <h1 class="text-4xl font-bold text-gray-800">Welcome to Haraka</h1>
      <p class="text-gray-600">Your one-stop shop for everything</p>
      <div class="space-x-4">
        <RouterLink to="/login" class="px-4 py-2 bg-blue-600 text-white rounded">Login</RouterLink>
        <RouterLink to="/register" class="px-4 py-2 bg-gray-300 text-black rounded">Register</RouterLink>
      </div>
    </div>
  </div>
</template>

