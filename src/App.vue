<template>
  <basic-layout />
  <div class="container">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/mainStyle";
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
</script>
