<template>
  <div class="container-book-hotel">
    <h3>Valida las fechas y tipo de cliente para tu reserva</h3>
    <div class="book-hotel">
      <button>
        <label for="btn-modal"> Agregar información </label>
      </button>
      <button class="warning-button" @click="restartProcess">
        Limpiar datos
      </button>
      <input type="checkbox" id="btn-modal" />
      <div class="container-modal">
        <div class="content-modal">
          <h3>
            Fechas para mi reserva
            <label class="label-close" for="btn-modal">X</label>
          </h3>
          <hr />
          <div>
            <label class="label-client">Cliente: </label>
            <select name="select" v-model="selectedType">
              <option value="0" selected>Normal</option>
              <option value="1">Recompensa</option>
            </select>
          </div>
          <div>
            <input type="date" v-model="selectedDate" :min="currentDate" />
            <button class="main-button" @click="addDate">Agregar</button>
          </div>
          <alert-component />
          <hr />
          <ul v-if="arrDateView && lengthArr > 0">
            <li v-for="(day, index) in arrDateView" :key="index">
              {{ day.dateString }}
              <button class="delete-button" @click="deleteDate(index)">
                <img src="../assets/borrar.png" alt="x" />
              </button>
            </li>
          </ul>
          <h4 v-else>No se tiene agregadas fechas para la reserva.</h4>
          <hr />
          <div>
            <button @click="searchHotel">Buscar Hotel</button>
            <button class="warning-button">
              <label @click="restartProcess">Reiniciar</label>
            </button>
          </div>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";
import AlertComponent from "@/components/AlertComponent.vue";
import { Day } from "@/interfaces/day";
import { viewAlert, getBestOffer } from "@/helpers/functions";
import { Hotel } from "@/interfaces/hotel";
import { useHotelStore } from "@/stores/hotel";

let currentDate = ref<string>("");
let selectedDate = ref<string>("");
let arrDateView = ref<Day[]>([]);
let lengthArr = ref<number>(0);
let selectedType = ref<string>("0");

let dateAdd: Date;
let numberDay = 0;

let dayView: Day;

const hotelStore = useHotelStore();
currentDate.value = new Date().toISOString().split("T")[0];
selectedDate.value = new Date().toISOString().split("T")[0];

const addDate = () => {
  let element: Day[] = arrDateView.value.filter((day) => {
    return day.dateString == selectedDate.value;
  });

  if (element.length > 0) {
    viewAlert("La fecha seleccionada ya está agregada", "info");
    return;
  }

  dateAdd = new Date(selectedDate.value);
  dateAdd.setDate(dateAdd.getDate() + 1);
  numberDay = dateAdd.getDay();

  let valBoolean = numberDay == 0 || numberDay == 6 ? true : false;

  dayView = {
    weekend: valBoolean,
    dateString: selectedDate.value,
  };

  arrDateView.value?.push(dayView);
  lengthArr.value = arrDateView.value ? arrDateView.value?.length : 0;

  viewAlert("Fecha agregada de manera correcta", "success");
};

const deleteDate = (index: number) => {
  arrDateView.value?.splice(index, 1);
  lengthArr.value = arrDateView.value ? arrDateView.value?.length : 0;
  viewAlert("Fecha eliminada de manera correcta", "warning");
};

const searchHotel = () => {
  if (arrDateView && arrDateView.value.length > 0) {
    const hotel: Hotel = getBestOffer(
      arrDateView.value,
      selectedType.value == "0" ? false : true
    );
    console.log(hotel);
    hotelStore.setViewHotel(true);
    hotelStore.setBestHotel(hotel);
    router.push({ name: "home" });
  } else {
    viewAlert("Debes agregar una fecha para continuar.", "error");
  }
};

const restartProcess = () => {
  arrDateView.value = [];
  selectedDate.value = currentDate.value;
  selectedType.value = "0";
  lengthArr.value = 0;
  hotelStore.setViewHotel(false);
};
</script>

<style lang="scss" scoped>
.container-book-hotel {
  .label-client {
    color: #555555;
    font-weight: bold;
  }
  .label-close {
    margin-left: 100px;
    color: #e22e2e;
  }
}
</style>
