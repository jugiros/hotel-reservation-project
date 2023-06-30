<template>
  <div class="container-views">
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
defineProps<{
  viewHotel: Hotel
}>();
</script>
