<template>
  <div class="error-page">
    <h1>Error 404</h1>
    <img src="../assets/warning.png">
    <p>Página no encontrada</p>
    <router-link to="/">Volver al inicio</router-link>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
.error-page {
  h1 {
    color: #ee5253;
  }
  p {
    font-weight: bold;
    font-size: 25px;
    color: #6b6b6b;
  }
  img {
    width: 80px;
  }
  a {
    text-decoration: none;
  }
}
</style>
