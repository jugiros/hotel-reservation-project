<template>
  <div class="gallery">
    <div
      class="card"
      v-for="(hotel, index) in hotelStore.arrHotels"
      :key="index"
    >
      <img :src="hotel.linkImg" />
      <div class="container-app">
        <h4>
          <b>{{ hotel.name }}</b>
        </h4>
        <p>{{ hotel.description }}</p>
        <qualification-stars :qualification="hotel.qualification"/>
        <h4><b>Costo cliente normal</b></h4>
        <p>Entre semana: {{hotel.regularCost}} - Fin de semana: {{hotel.regularCostWeekend}}</p>
        <h4><b>Costo cliente recompensa</b></h4>
        <p>Entre semana: {{hotel.rewardCost}} - Fin de semana: {{hotel.rewardCostWeekend}}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHotelStore } from "@/stores/hotel";
import QualificationStars from "@/components/QualificationStars.vue";
const hotelStore = useHotelStore();
</script>

<style />
