<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div>
    <!--<div>
      <RouterLink to="/">HOME</RouterLink>
    </div>
    <div>
      <RouterLink to="/about">ABOUT</RouterLink>
    </div>
    -->
    <div>
      <RouterLink :to="{name: 'home'}">HOME</RouterLink>
    </div>
    <div>
      <RouterLink :to="{name: 'about'}">ABOUT</RouterLink>
    </div>
    
  </div>
  <RouterView />
</template>

<style scoped></style>
