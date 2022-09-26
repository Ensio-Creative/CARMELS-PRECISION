<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import PagesHero from "../components/PagesHero.vue";
import service from "../../public/services.json";
import { useRoute } from "vue-router";
const route = useRoute();
const services = ref(service);

const market = ref({});

onMounted(() => {
  const link = route.path.substring(1);
  services.value.map((single) => {
    if (single.slug === link) {
      market.value = single;
    }
  });
  document.title = market.value.title + " | Services";
});
onUnmounted(() => {
  market.value = null;
});
</script>
<template>
  <div>
    <PagesHero :img="market.hero" :title="market.title" />
    <div class="lg:flex lg:mx-32 lg:my-20 my-8 mb-4">
      <div class="text-base text-[#555464] lg:w-1/2 lg:px-10 px-6">
        <div class="my-6">{{ market.section1 }}</div>
        <div class="my-6">{{ market.section2 }}</div>
        <div class="my-6">{{ market.section3 }}</div>
        <div class="my-6">{{ market.section4 }}</div>
        <div>
          <ul class="ml-6">
            <li class="" v-for="(single, index) in market.list" :key="index">
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
    <div class="lg:mx-32 p-8 pt-0 lg:mb-20">
      <div class="font-bold text-[#0E1E43] my-4 text-xl">Other services</div>
      
      <div class="lg:flex justify-between">
        <div class="lg:w-[49%] relative lg:mb-0 mb-6">
          <img class="w-full" :src="'/images/others/' + market.image1" alt="" />
          <div class="w-full h-full bg-black opacity-50 absolute top-0"></div>
          <a :href="'/' + market.slug1">
            <div
              class="absolute bottom-10 text-white text-3xl font-bold left-6"
            >
              {{ market.text1 }}
            </div>
          </a>
        </div>
        <div class="lg:w-[49%] relative">
          <img class="w-full" :src="'/images/others/' + market.image2" alt="" />
          <div class="w-full h-full bg-black opacity-50 absolute top-0"></div>
          <a :href="'/' + market.slug2">
            <div
              class="absolute bottom-10 text-white text-3xl font-bold left-6"
            >
              {{ market.text2 }}
            </div>
          </a>
        </div>
      </div>
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