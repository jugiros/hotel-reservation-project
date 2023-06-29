<template>
  <div :class="alertStore.alert.styleClass" v-if="alertStore.alert.viewAlert">
    <p>
      {{alertStore.alert.msg }}<button class="btn-close" @click="closeAlert">X</button>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useAlertStore } from "@/stores/alert";

const alertStore = useAlertStore();

const closeAlert = () => {
  alertStore.setAlertObj({
    msg: "",
    styleClass: "",
    viewAlert: false
  })
};
</script>

<style scoped lang="scss">
p {
  color: #fff;
  font-size: 12px;
  margin: 5px;
}
.btn-close {
  background-color: transparent;
  border: none;
  height: 20px;
  margin: 0px;
}
.error {
  background-color: #ff5757;
  border-radius: 8px;
}
.warning {
  background-color: orange;
  border-radius: 8px;
}
.success {
  background-color: #69b160;
  border-radius: 8px;
}
.info {
  background-color: #5d88b9;
  border-radius: 8px;
}
</style>
