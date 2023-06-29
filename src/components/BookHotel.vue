<template>
  <div class="container-book-hotel">
    <h3>Valida las fechas para tu reserva</h3>
    <div class="book-hotel grid-container">
      <button class="btn-date">
        <label for="btn-modal"> Fechas </label>
      </button>
      <input type="checkbox" id="btn-modal" />
      <div class="container-modal">
        <div class="content-modal">
          <h3>Fechas para mi reserva</h3>
          <hr />
          <div>
            <input type="date" />
            <button class="main-button">Agregar</button>
          </div>
          <hr />
          <ul>
            <li>
              20 de enero del 2022<button class="delete-button">
                <img src="../assets/borrar.png" alt="x" />
              </button>
            </li>
            <li>20 de enero del 2022<button class="delete-button">
              <img src="../assets/borrar.png" alt="x" />
            </button></li>
            <li>20 de enero del 2022<button class="delete-button">
              <img src="../assets/borrar.png" alt="x" />
            </button></li>
            <li>20 de enero del 2022<button class="delete-button">
              <img src="../assets/borrar.png" alt="x" />
            </button></li>
          </ul>
          <div>
            <button>Buscar Hotel</button>
            <button class="warning-button">
              <label for="btn-modal">Cancelar</label>
            </button>
          </div>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.container-book-hotel {
  margin: 30px 30% 0px 30%;
  ul {
    list-style: none;
  }
  h3 {
    text-align: center;
    margin-bottom: 0px;
  }
  label {
    cursor: pointer;
  }
  .book-hotel {
    text-align: center;
    margin-top: 0px;
  }
  .btn-date {
    width: 100%;
  }
}
@media (max-width: 768px) {
  .container-book-hotel {
    margin: 30px 20% 0px 20%;
  }
}
@media (max-width: 479px) {
  .container-book-hotel {
    margin: 30px 5% 0px 5%;
  }
}
</style>
