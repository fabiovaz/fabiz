<template>
  <div class="section_badge">
    {{ title }}
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icon: String
})
</script>

<style lang="scss">
.section_badge {
  display: inline-flex;
  padding: 11px 18px;
  align-items: center;

  font-size: 12px;
  border-radius: 30px;
  border: 1px solid #565656;
}
</style>