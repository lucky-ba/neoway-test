<template>
  <div class="content">
    <label class="label">{{ label }}</label>
    <p class="text"><slot></slot></p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<style scoped>
.content {
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  border-bottom: 1px solid #e5e5e5;
}

.label {
  font-weight: 500;
  color: #666;
  font-size: 0.9rem;
  min-width: 120px;
  flex-shrink: 0;
  text-align: left;
}

.text {
  margin: 0;
  color: #1a1a1a;
  font-size: 0.95rem;
  text-align: left;
  flex-grow: 1;
}
</style>
