<template>
  <div class="alert-style" v-if="props.viewData">
    <p>{{ props.msg }}</p>
  </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps<{
  msg: string;
  viewData: boolean;
}>();
</script>

<style scoped lang="scss">
.alert-style {
  background-color: #ff5757;
  border-radius: 8px;
  text-align: justify;
  p {
    color: #fff;
    font-size: 12px;
    margin: 5px;
  }
}
</style>
