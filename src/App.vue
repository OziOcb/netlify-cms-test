<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld />

  <nav>
    <ul>
      <li>
        <router-link to="/">Go to Home</router-link>
      </li>
      <li>
        <router-link to="/about">Go to About</router-link>
      </li>
    </ul>
  </nav>

  <router-view></router-view>
</template>
