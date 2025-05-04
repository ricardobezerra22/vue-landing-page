<template>
  <div class="section-header">
    <v-btn
      v-if="title"
      variant="outlined"
      rounded
      color="primary"
      class="text-primary services-button"
      >{{ title }}</v-btn
    >
    <h3 class="section-title text-primary">{{ subtitle }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: false },
  subtitle: { type: String, required: true }
})
</script>

<style scoped lang="scss" src="./style.scss"></style>
