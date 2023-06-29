import { defineStore } from "pinia";
import { Alert } from "@/interfaces/alert";

export const useAlertStore = defineStore("alert", {
  state: () => ({
    alert: {
      msg: "",
      viewAlert: false,
      styleClass: "success"
    } as Alert,
  }),
  actions: {
    setAlertObj(obj: Alert) {
      this.alert = obj;
    },
  },
});
