<script setup>
import { ref, onMounted } from "vue";
import PagesHero from "../components/PagesHero.vue";
import service from "../../public/services.json";
import { useRoute } from "vue-router";
const route = useRoute();
const services = service;

const market = ref({});
onMounted(() => {
  const link = route.path.substring(1);
  services.map((single) => {
    if (single.slug === link) {
      market.value = single;
    }
  });
  console.log(market.value);
});
</script>
<template>
  <div>
    <PagesHero :img="market.hero" :title="market.title" />
    <div class="lg:flex lg:mx-32 lg:my-20 my-8">
      <div class="text-base text-[#555464] lg:w-1/2 lg:px-10 px-6">
        <div class="my-6">{{ market.section1 }}</div>
        <div class="my-6">{{ market.section2 }}</div>
        <div class="my-6">{{ market.section3 }}</div>
        <div class="my-6">{{ market.section4 }}</div>
        <div>
          <ul class="ml-6">
            <li
              class=""
              v-for="(single, index) in market.list"
              :key="index"
            >
              {{ single }}
            </li>
          </ul>
        </div>
      </div>
      <div class="lg:w-1/2 lg:p-0 p-6">
        <img
          :src="'/images/services/popup/' + market.img1"
          alt=""
          class="w-full"
        />
      </div>
    </div>
    <div class="lg:mx-32 p-8">
      <div class="font-bold text-[#0E1E43] text-xl">Other services</div>
    </div>
  </div>
</template>
<style scoped>
.img {
  height: 100vh;
}
ul li {
  list-style-type: disc;
}
</style>