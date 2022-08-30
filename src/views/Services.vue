
<script setup>
import PagesHero from "../components/PagesHero.vue";
const services = [];
</script>
<template>
  <div>
    <PagesHero img="services.png" title="Services" />
    <div class="bg-[#FFFEF2]">
      <div
        class="
          lg:w-1/2
          mx-auto
          lg:text-2xl
          text-sm
          p-10
          text-[#0E1E43]
          lg:p-20
          text-center
        "
      >
        We offers a comprehensive range of precision engineering services from
        prototype through to full-scale production runs.
      </div>
    </div>
    <div
      class="lg:flex lg:m-20 m-4"
      v-for="(market, index) in markets"
      :key="index"
    >
      <div class="lg:w-1/2 lg:order-last">
        <img :src="'/images/markets/' + market.img" alt="" />
      </div>
      <div class="lg:w-1/2 lg:p-10 my-auto">
        <div class="text-3xl font-bold text-[#0E1E43] my-4">
          {{ market.title }}
        </div>
        <div class="text-lg text-[#555464]">{{ market.desc }}</div>
      </div>
    </div>
  </div>
</template>