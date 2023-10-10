<script setup>
import { ref } from "vue";
import PagesHero from "../components/PagesHero.vue";
import service from "../../public/services.json";

document.title = "Services | Carmels Precision";
const services = service;

const pos = ref(0);
const modal = ref(false);

const setPosition = (id) => {
  pos.value = id;
  modal.value = true;
};
</script>
<template>
  <div>
    <PagesHero img="services.png" title="Services" />
    <div class="bg-[#FFFEF2]">
      <div class="
          lg:w-1/2
          mx-auto
          lg:text-2xl
          text-lg
          p-10
          text-[#0E1E43]
          lg:p-20
          text-center
        ">
        We offers a comprehensive range of precision engineering and fabrication
        services from prototype through to full-scale production runs.
      </div>
    </div>

    <div class="lg:flex lg:m-20 flex-wrap justify-evenly">
      <div class="lg:w-80 relative m-4 lg:my-4 my-8" v-for="(service, index) in services" :key="index">
        <router-link :to="'/' + service.slug">
          <img :src="'/images/services/' + service.img" alt="" />
          <div class="
              flex
              justify-center
              p-4
              absolute
              bottom-0
              bg-white
              w-full
              rounded-b-2xl
              shadow-md
            ">
            <div class="text-xl text-center text-[#0E1E43]">
              {{ service.title }}
            </div>
            <!-- <img
              @click="setPosition(index)"
              class="w-8 h-8 cursor-pointer"
              src="../assets/plus.png"
              alt=""
            /> -->
          </div>
        </router-link>
      </div>
    </div>

    <div v-if="modal">
      <div class="bg-black z-40 w-full h-full fixed opacity-80 top-0"></div>
      <div class="fixed top-4 z-50 lg:w-2/5 lg:left-96 lg:m-0 m-4 bg-white">
        <div class="relative">
          <img :src="'/images/services/popup/' + services[pos].popus.img" alt="" class="w-full h-40" />
          <img @click="modal = !modal" src="../assets/x.png" class="absolute top-2 w-6 h-6 right-2 cursor-pointer"
            alt="" />
        </div>
        <div class="px-8 py-4">
          <div class="text-2xl text-[#0E1E43] font-bold mb-3">
            {{ services[pos].title }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section1 }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section2 }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section3 }}
          </div>
          <div class="text-sm mb-3 text-[#555464] ml-5">
            <ul>
              <li class="" v-for="(single, index) in services[pos].popus.list" :key="index">
                {{ single }}
              </li>
            </ul>
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section4 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul li {
  list-style-type: disc;
}
</style>