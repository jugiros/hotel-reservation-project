<template>
  <div class="container-book-hotel">
    <h3>Valida las fechas para tu reserva</h3>
    <div class="book-hotel">
      <button class="btn-date">
        <label for="btn-modal"> Agregar fechas </label>
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
            <li>
              20 de enero del 2022<button class="delete-button">
                <img src="../assets/borrar.png" alt="x" />
              </button>
            </li>
            <li>
              20 de enero del 2022<button class="delete-button">
                <img src="../assets/borrar.png" alt="x" />
              </button>
            </li>
            <li>
              20 de enero del 2022<button class="delete-button">
                <img src="../assets/borrar.png" alt="x" />
              </button>
            </li>
          </ul>
          <hr>
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

<script setup lang="ts"></script>
