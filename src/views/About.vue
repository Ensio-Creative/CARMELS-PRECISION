<script setup>
import PagesHero from "../components/PagesHero.vue";
document.title = "About the Company | Carmels Precision";
</script>
<template>
  <div>
    <PagesHero img="about.png" title="About Us" />
    <div class="lg:p-20 lg:flex p-4">
      <div class="lg:w-1/2 lg:order-last lg:mt-0 mt-10">
        <img src="../assets/about-img.png" alt="" />
      </div>
      <div class="lg:w-1/2 lg:p-16 my-auto">
        <div class="font-bold lg:text-3xl text-2xl text-[#0E1E43] lg:my-4 my-8">
          Carmel’s Precision at a glance
        </div>
        <div class="text-lg text-[#555464]">
          Carmel’s Precision Engineering (formerly Paragon Engineering) is one
          of the world’s leading CNC machining company providing unrivalled
          services across a range of industry from prototyping to fabrication
          with the mission of exceeding client expectations and promoting
          excellence championed by our experienced engineers. We are dedicated
          to implementing world class standards across all functions, and
          committed to achieving outstanding customer service across our
          services.
        </div>
      </div>
    </div>
    <div class="relative mb-20 lg:mt-0 mt-8">
      <img src="../assets/about-capabilities.png" class="img w-full" alt="" />
      <div
        class="
          absolute
          top-20
          lg:right-20 lg:left-auto
          right-4
          left-4
          bg-white
          p-8
          lg:w-2/5
        "
      >
        <div class="font-bold text-3xl text-[#0E1E43] my-3">Capabilities</div>
        <div class="lg:text-lg text-[#555464]">
          Our engineering operations takes place over two sites in Ely and the
          factory runs 24 hours a day to meet our clients demand. Our highly
          skilled team are dedicated to delivering quality engineered solutions
          to your exacting specifications.
          <br /><br />
          We also have a dedicated prototyping team that works with customers to
          create initial prototypes. Each item is then precision engineered to
          meet the quality requirements of our customers.
          <br /><br />
          From high capacity contracts, to small scale parts, Carmel’s Precision
          offers a complete service, from design through to machining,
          fabrication and painting.
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.img {
  height: 100vh;
}
</style>