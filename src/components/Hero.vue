<template>
  <div>
    <carousel :items-to-show="1" :autoplay="5000" :wrap-around="true">
      <slide v-for="slide in slides" :key="slide">
        <img class="hero w-full" :src="slide" alt="" />
      </slide>
      <template #addons>
        <pagination />
      </template>
    </carousel>

    <!-- <img class="hero" src="../assets/hero.png" alt="" /> -->
    <!-- <video src="../assets/bg-video.mp4" autoplay="true" class="hero" ></video> -->
    <div class="bg-black w-full absolute top-0 opacity-40 overlay"></div>
    <div class="
        absolute
        lg:top-72
        top-40
        lg:w-1/2 lg:left-20
        right-6
        left-6
        text-white
      ">
      <div class="lg:text-7xl text-3xl font-bold">
        Technology driven for excellence
      </div>
      <div class="text-lg my-4 lg:w-2/3">
        We provide a complete CNC machining and fabrications with the best of
        technology across a range of industry.
      </div>
      <div class="flex uppercase">
        <router-link to="/about">
          <div class=" text-sm bg-[#EE3C23] p-3">
            Learn More
            <!-- <img src="../assets/Arrow1.png" class="h-2 my-auto mx-3" alt="" /> -->
          </div>
        </router-link>
        <router-link to="/contact">
          <div class="ml-5 text-sm bg-[#EE3C23] p-3">
            Request a Quote
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slides: ["/images/Mask3.png", "/images/Mask2.png", "/images/Mask1.png"],
    };
  },
};
</script>
<style scoped>
.hero {
  height: 100vh;
  width: 100% !important;
}

.overlay {
  height: 100vh;
}

@media (max-width: 600px) {

  .hero,
  .overlay {
    height: 80vh;
  }

  .hero {
    height: 80vh;
    object-fit: cover;
  }
}
</style>