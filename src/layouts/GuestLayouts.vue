<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-cente bg-gray-50 p-6">
    <header class="text-center">
      <a href="/"><img class="h-[3rem] w-auto"
          src="../assets/img/20250708_2228_Haraka Logo Design_simple_compose_01jznacj5jfxpbn1t44mhm97vd.png"
          alt="Haraka"></a>
    </header>
    <main class="">
      <RouterView />
    </main>
  </div>
</template>