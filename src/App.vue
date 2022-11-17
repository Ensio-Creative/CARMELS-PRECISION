<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import HeaderNav from "./components/HeaderNav.vue";
import FooterNav from "./components/FooterNav.vue";

// import { useRouter } from "vue-router";
// const router = useRouter();

const location = ref("");
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  // location.value = window.location.pathname;
  // console.log(router.currentRoute._value)
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
