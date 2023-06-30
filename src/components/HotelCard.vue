<template>
  <div class="gallery" v-if="!viewBestHotel">
    <div
      class="card"
      v-for="(hotel, index) in hotelStore.arrHotels"
      :key="index"
    >
      <img :src="hotel.linkImg" />
      <div class="container-app">
        <h3>
          <b>{{ hotel.name }}</b>
          <router-link :to="'/' + hotel.nameVista">
            <img class="img-view-page" src="../assets/eye.png">
          </router-link>
        </h3>
        <p>{{ hotel.description }}</p>
        <qualification-stars :qualification="hotel.qualification" />
        <h4><b>Costo cliente normal</b></h4>
        <p>
          Entre semana: {{ hotel.regularCost }} - Fin de semana:
          {{ hotel.regularCostWeekend }}
        </p>
        <h4><b>Costo cliente recompensa</b></h4>
        <p>
          Entre semana: {{ hotel.rewardCost }} - Fin de semana:
          {{ hotel.rewardCostWeekend }}
        </p>
      </div>
    </div>
  </div>
  <div v-else>
    <h1>Nuestra mejor opción para ti</h1>
    <view-hotel :view-hotel="bestHotel"/>
  </div>
</template>

<script setup lang="ts">
import { useHotelStore } from "@/stores/hotel";
import { storeToRefs } from "pinia";

import QualificationStars from "@/components/QualificationStars.vue";
import ViewHotel from "@/components/viewHotel.vue";

const hotelStore = useHotelStore();
let { bestHotel, viewBestHotel } = storeToRefs(hotelStore);
console.log(bestHotel);
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
.img-view-page {
  height: 20px;
  width: 20px;
  margin-left: 20px;
}
.gallery {
  display: grid;
  gap: 1rem;
  grid-auto-rows: 33rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
}
</style>
