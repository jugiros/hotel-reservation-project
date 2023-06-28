<template>
  <div class="main-style">
    <basic-layout />
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./styles/mainStyle";
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
</script>
