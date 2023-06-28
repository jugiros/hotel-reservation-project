<template>
  <h1>Estamos de pago</h1>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Hotel } from "@/interfaces/hotel";
import { Day } from "@/interfaces/day";
import getBestOffer from "../../helpers/functions";

let hotel = ref<Hotel>();
let hotelName = "";

const arrDays = [
  {
    id: 0,
    weekend: true,
  },
  {
    id: 1,
    weekend: true,
  },
  {
    id: 2,
    weekend: true,
  },
  {
    id: 2,
    weekend: false,
  },
  {
    id: 2,
    weekend: false,
  },
];
const validHotel = (arrDays: Day[], rewardClient: boolean) => {
  hotel.value = getBestOffer(arrDays, rewardClient);
  hotelName = hotel.value?.name;
  console.log(hotel.value);
};

validHotel(arrDays, true);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
