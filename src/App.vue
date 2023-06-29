<template>
  <basic-layout />
  <div class="container-app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/mainStyle";
@import "./styles/modal.css";
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
</script>
