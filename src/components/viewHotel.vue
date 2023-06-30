<template>
  <div class="container-best-hotel">
    <div class="div-content-img">
      <img :src="viewHotel.linkImg" />
    </div>
    <h2>{{ viewHotel.name }}</h2>
    <p>{{ viewHotel.description }}</p>
    <label class="label-best-hotel">Calificación: </label>
    <qualification-stars :qualification="viewHotel.qualification" />
    <h4><b>Costo cliente normal</b></h4>
    <p>
      Entre semana: {{ viewHotel.regularCost }} - Fin de semana:
      {{ viewHotel.regularCostWeekend }}
    </p>
    <h4><b>Costo cliente recompensa</b></h4>
    <p>
      Entre semana: {{ viewHotel.rewardCost }} - Fin de semana:
      {{ viewHotel.rewardCostWeekend }}
    </p>
  </div>
</template>

<script setup lang="ts">
import QualificationStars from "@/components/QualificationStars.vue";
import {Hotel} from "@/interfaces/hotel";

// eslint-disable-next-line no-undef
const props = defineProps<{
  viewHotel: Hotel
}>();
</script>

<style scoped lang="scss">
.container-best-hotel {
  margin: 5% 10% 20% 10%;
  .label-best-hotel {
    color: #6b6b6b;
    font-size: 20px;
  }
  .div-content-img {
    text-align: center;
    img {
      width: 100%;
      max-width: 500px;
      height: auto;
    }
  }
}
</style>
