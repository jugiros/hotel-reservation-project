<template>
  <view-hotel :view-hotel="hotel[0]"/>
</template>

<script setup lang="ts">
import ViewHotel from "@/components/viewHotel.vue";
import {useHotelStore} from "@/stores/hotel"
import {Hotel} from "@/interfaces/hotel";

const hotelStore = useHotelStore();
const hotel: Hotel[] = hotelStore.arrHotels.filter((hotel) => {
  return hotel.name == "Lakewood";
})

</script>