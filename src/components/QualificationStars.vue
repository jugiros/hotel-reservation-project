<template>
  <div class="ec-stars-wrapper">
    <a v-for="(qua, index) in props.qualification" :data-value="index" :key="index">&#9733;</a>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  qualification: number;
}>();
</script>
