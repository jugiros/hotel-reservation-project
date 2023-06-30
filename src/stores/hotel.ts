import { defineStore } from "pinia";
import * as dataSet from "../../documents/dataSet.json";
import { Hotel } from "@/interfaces/hotel";

export const useHotelStore = defineStore("hotel", {
  state: () => ({
    arrHotels: [] as Hotel[],
    bestHotel: {} as Hotel,
    viewBestHotel: false,
  }),
  actions: {
    getHotelDataSet() {
      this.arrHotels = dataSet.arrHotels;
    },
    setBestHotel(hotel: Hotel) {
      this.bestHotel = hotel;
    },
    setViewHotel(viewBestHotel: boolean) {
      this.viewBestHotel = viewBestHotel;
    }
  },
  getters: {
    getBestHotel: (state) => state.bestHotel,
  },
});
