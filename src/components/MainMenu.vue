<template>
  <nav class="navbar">
    <ul>
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li><router-link class="router-style" to="/">Inicio</router-link></li>
        <li class="services">
          <a class="router-style">Hoteles</a>
          <ul class="dropdown">
            <li v-for="(hotel, index) in hotelStore.arrHotels" :key="index">
              <router-link class="router-style" :to="'/' + hotel.nameVista">{{
                hotel.name
              }}</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link class="router-style" to="/about"
            >Documentación</router-link
          >
        </li>
        <li>
          <router-link class="router-style" to="/error-page"
            >Prueba 404</router-link
          >
        </li>
      </div>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { useHotelStore } from "@/stores/hotel";
const hotelStore = useHotelStore();
hotelStore.getHotelDataSet();
</script>
