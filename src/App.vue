<script setup lang="ts">
import { ref } from "vue";

const counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <div>
    <MyHeader></MyHeader>
    <router-view />
    <MyFooter></MyFooter>
  </div>
</template>
