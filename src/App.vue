<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
const position = ref(0);
const handleScroll = () => {
  position.value = window.scrollY;
};
</script>

<template>
  <div>
    <HeaderNav :position="position" />
    <router-view></router-view>
    <FooterNav />
  </div>
</template>

<style scoped>
</style>
