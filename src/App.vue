<template>
  <basic-layout />
  <div class="container-app">
    <router-view />
  </div>
  <footer-layout/>
</template>

<style lang="scss">
@import "./styles/mainStyle";
@import "./styles/modal.css";
@import "./styles/qualification";
</style>

<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import FooterLayout from "@/layouts/FooterLayout.vue";
</script>
