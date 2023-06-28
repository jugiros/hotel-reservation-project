<template>
  <div class="basic-layout">
    <router-link to="/">
      <img src="../assets/hotel.png" />
    </router-link>
    <label>Reserva tu hotel</label>
    <menu-principal />
  </div>
</template>

<script setup>
import MenuPrincipal from "@/components/MenuPrincipal.vue";
</script>

<style scoped lang="scss">
.basic-layout {
  label {
    margin-left: 70px;
    color: #b5b5b5;
    font-family: "Trebuchet MS";
    margin-top: 20px;
  }
}
</style>
