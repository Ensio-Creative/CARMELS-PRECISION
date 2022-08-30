
<script setup>
import PagesHero from "../components/PagesHero.vue";
const markets = [
  {
    title: "Medical",
    desc: "Precision components for the medical industry in a variety of materials. We have considerable experience of working with pharmaceutical companies and also supply parts for the pathology departments of a number of hospitals.",
    img: "medical.png",
  },
  {
    title: "Aerospace",
    desc: "High precision, high quality engineered parts for aerospace manufacturers. Mainly working with aluminium, Carmel’s supply composites that go into Boeing planes as well as parts for high end aircraft in the private sector.",
    img: "aerospace.png",
  },
  {
    title: "Transport ",
    desc: "We supply metal components to the transport and automotive industries. Our skilled engineers work to stringent quality standards to produce a range of parts including train connectors, engine blocks and battery terminals.",
    img: "transport.png",
  },
  {
    title: "Defence ",
    desc: "We provide an extensive range of precision components for the defence industry. We also supply parts for specialist army vehicles and work closely with Marshalls Land Systems providing a valuable link in the defence supply chain.",
    img: "defence.png",
  },
  {
    title: "Energy ",
    desc: "We supply machined components for the wind and solar power generation industries. We work closely with a number of wind farm companies to supply high quality parts for turbine operations.",
    img: "energy.png",
  },
  {
    title: "Specialist",
    desc: "Working across a diverse range of industries we have developed many specialist solutions. Our skilled prototyping specialists work closely with customers to develop prototypes that can then be manufactured to complex specifications.",
    img: "specialist.png",
  },
];
</script>
<template>
  <div>
    <PagesHero img="markets.png" title="Markets" />
    <div class="bg-[#FFFEF2]">
      <div class="lg:w-1/2 mx-auto lg:text-2xl text-sm p-10 text-[#0E1E43] lg:p-20 text-center">
        We supply products to a wide range of industry sectors. With a flexible
        and innovative approach, components are precision engineered to a very
        high quality, and at high capacities to meet demand.
      </div>
    </div>
    <div class="lg:flex lg:m-20 m-4" v-for="(market, index) in markets" :key="index">
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