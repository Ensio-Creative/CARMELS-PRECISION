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
      <div class="lg:w-1/2 lg:p-16">
        <div
          class="
            font-bold
            lg:text-3xl
            text-2xl
            w-64
            text-[#0E1E43]
            lg:my-4
            my-8
          "
        >
          Overview of who we are
        </div>
        <div class="text-lg text-[#555464]">
          Carmel’s Precision Engineering and Fabrication (formerly Paragon
          Engineering) is one of the world’s leading CNC machining and
          fabrication company providing unrivalled services across a range of
          industry from prototyping to fabrication with the mission of exceeding
          client expectations and promoting excellence championed by our
          experienced engineers. We are dedicated to implementing world class
          standards across all functions, and committed to achieving outstanding
          customer service across our services.
        </div>
      </div>
    </div>
    <div class="relative lg:mb-0 mb-12">
      <div class="font-bold text-3xl lg:ml-0 ml-6 lg:text-center text-[#0E1E43] my-3">
        Our history
      </div>
      <div
        class="
          bg-[#B0B0B0]
          lg:w-2/3
          w-[1px]
          lg:h-[1px]
          h-[80%]
          mx-auto
          absolute
          lg:top-[111px] lg:left-52
          left-8
        "
      ></div>
      <div
        class="
          lg:flex
          justify-evenly
          lg:text-center
          my-8
          text-[#555464]
          lg:ml-0
          ml-14
        "
      >
        <div class="w-56 relative lg:my-0 my-4 lg:text-base  text-sm">
          <div class="text-lg font-thin">1995</div>
          <div class="lg:my-10">Paragon Precision Engineering (Before)</div>
          <div
            class="
              bg-[#17B94E]
              w-[2px]
              h-[2px]
              absolute
              p-1
              top-10
              lg:left-28
              -left-7
              rounded-full
            "
          ></div>
        </div>
        <div class="lg:w-72 w-56 lg:my-0 my-4 relative lg:text-base text-sm">
          <div class="text-lg font-thin">2022</div>
          <div class="lg:my-10">Carrmel’s Precision and Fabrication (Now)</div>
          <div
            class="
              bg-[#17B94E]
              w-[2px]
              h-[2px]
              absolute
              p-1
              top-10
              lg:left-36
              -left-7
              rounded-full
            "
          ></div>
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