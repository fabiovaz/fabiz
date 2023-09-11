<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<template>
  <div class="inline-flex py-3 px-5 text-xs border border-neutral-600 rounded-full text-white">
    {{ title }}
  </div>
</template>
