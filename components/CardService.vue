<template>
  <div class="border py-5 md:py-10 px-6 md:px-12 border-neutral-600 rounded-2xl">
    <div class="text-white text-2xl mb-2">
      {{ title }}
    </div>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>
