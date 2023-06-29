<template>
  <nav class="navbar">
    <ul>
      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>
      <div class="menu">
        <li><router-link class="router-style" to="/">Inicio</router-link></li>
        <li class="services">
          <a class="router-style">Hoteles</a>
          <ul class="dropdown">
            <li><router-link class="router-style" to="/new">Hoteles 1</router-link></li>
            <li><router-link class="router-style" to="/new">Hoteles 2</router-link></li>
            <li><router-link class="router-style" to="/new">Hoteles 3</router-link></li>
          </ul>
        </li>
        <li>
          <router-link class="router-style" to="/about">Documentación</router-link>
        </li>
        <li>
          <router-link class="router-style" to="/error-page">Prueba 404</router-link>
        </li>
      </div>
    </ul>
  </nav>
</template>
<script setup lang="ts">
</script>