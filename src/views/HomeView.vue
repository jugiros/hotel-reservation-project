<template>
  <hotel-card />
  <p>{{ hotelName }}</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Hotel } from "@/interfaces/hotel";
import { Day } from "@/interfaces/day";
import { getBestOffer } from "@/helpers/functions";
import HotelCard from "@/components/HotelCard.vue";

let hotel = ref<Hotel>();
let hotelName = "";

/**
 * Data and method for unit test.
 */
const arrDays = [
  {
    dateString: "string",
    weekend: true,
  },
  {
    dateString: "string",
    weekend: true,
  },
  {
    dateString: "string",
    weekend: true,
  },
  {
    dateString: "string",
    weekend: false,
  },
  {
    dateString: "string",
    weekend: false,
  },
];
const validHotel = (arrDays: Day[], rewardClient: boolean) => {
  hotel.value = getBestOffer(arrDays, rewardClient);
  hotelName = hotel.value?.name;
};

validHotel(arrDays, true);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
p {
  display: none;
}
</style>
