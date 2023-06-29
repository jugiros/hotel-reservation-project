<template>
  <div class="basic-layout">
    <router-link to="/">
      <img src="../assets/hotel.png" />
    </router-link>
    <label>Reserva tu hotel</label>
    <main-menu />
  </div>
  <book-hotel/>
  <hr>
</template>

<script setup>
import MainMenu from "@/components/MainMenu.vue";
import BookHotel from "@/components/BookHotel.vue";
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
