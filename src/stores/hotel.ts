import { defineStore } from "pinia";
import * as dataSet from "../../documents/dataSet.json";
import { Hotel } from "@/interfaces/hotel";

export const useHotelStore = defineStore("hotel", {
  state: () => ({
    arrHotels: [] as Hotel[]
  }),
  actions: {
    getHotelDataSet () {
      this.arrHotels = dataSet.arrHotels;
    }
  }
})