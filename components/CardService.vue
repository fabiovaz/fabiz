<template>
  <div class="callout">
    <div class="title mb-2">
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

<style lang="scss">
.callout {
  .title {
    color: var(--bs-white);
    font-size: 24px;
  }
  p {
    color: var(--bs-dark);
  }
}
</style>