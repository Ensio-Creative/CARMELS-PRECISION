<script setup>
import { ref } from 'vue'

defineProps({
  position: Number,
});
const services = ref(false)

const toggle = () => {
  document.getElementById("myNav").style.width = "100%";
};

const switchServices = () => {
  services.value = !services.value
}

const close = () => {
  document.getElementById("myNav").style.width = "0%";
};
</script>

<template>
  <div
    class="
    flex lg:w-[90%] flex-wrap mx-auto left-0 right-0 fixed lg:px-20 px-4 z-30 top-0 justify-between px-3 py-6 bg-white text-[#0E1E43] header">
    <router-link to="/">
      <!-- <img v-if="position < 550" src="../assets/logo.svg" class="lg:w-80 w-52" alt="" /> -->
      <img src="../assets/logo-color.svg" class="lg:w-72 w-52" alt="" />
    </router-link>
    <div class="lg:flex justify-between w-[50%] my-auto hidden">
      <router-link to="/">
        <div class="mt-2">Home</div>
      </router-link>
      <router-link to="/about">
        <div class="mt-2">About Us</div>
      </router-link>
      <!-- <router-link to="/services"> -->
      <div @mouseenter="switchServices" class="flex cursor-pointer mt-2">Services
        <img class="w-auto my-auto mt-2 ml-2" src="../assets/dropdown.svg" alt="">
      </div>
      <!-- </router-link> -->
      <router-link to="/markets">
        <div class="mt-2">Markets</div>
      </router-link>
      <router-link to="/contact">
        <div class="mt-2">Contact us</div>
      </router-link>
      <div>
        <img class="mx-3" src="../assets/Britain.svg" alt="" />
      </div>
    </div>
    <!-- <div class="lg:hidden block my-auto">
      <img @click="toggle" src="../assets/bar.png" alt="" />
    </div> -->
    <div class="lg:hidden block my-auto">
      <img @click="toggle" src="../assets/blue-bar.png" alt="" />
    </div>

    <div v-if="services" @mouseleave="switchServices"
      class="w-full header mt-4 lg:flex hidden justify-around text-sm text-[#0E1E43] bg-white p-3">
      <a href="/cnc-milling">
        <div>CNC Milling</div>
      </a>
      <a href="/cnc-turning">
        <div>CNC Turning</div>
      </a>
      <a href="/sliding-head">
        <div>Sliding Head</div>
      </a>
      <a href="/sheet-metal">
        <div>Sheet Metal</div>
      </a>
      <a href="/fabrication">
        <div>Fabrication</div>
      </a>
      <a href="/welding">
        <div>Welding</div>
      </a>
      <a href="/engraving-&-marking">
        <div>Engraving & Marking</div>
      </a>
      <a href="/quality-control">
        <div class="">Quality Control</div>
      </a>
      <a href="/finishing">
        <div class="">Finishing</div>
      </a>
    </div>

    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <div class="flex p-4 justify-between">
          <img class="w-40" src="../assets/logo-color.svg" alt="" />
          <img @click="close" class="w-4 h-4 my-auto" src="../assets/close.png" alt="" />
        </div>
        <div class="p-4 font-bold text-[#0E1E43] text-4xl">
          <router-link to="/">
            <div @click="close" class="my-1">Home</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/about">
            <div @click="close" class="my-1">About Us</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <!-- <router-link to="/services"> -->
          <div @click="switchServices" class="my-1 flex justify-between">Services
            <img class="w-4 my-auto " src="../assets/dropdown.svg" alt="">

          </div>
          <!-- </router-link> -->

          <div v-if="services" @mouseleave="switchServices" class="w-full mt-1 text-lg text-[#0E1E43]">
            <a href="/cnc-milling">
              <div class="my-2">CNC Milling</div>
            </a>
            <a href="/cnc-turning">
              <div class="my-2">CNC Turning</div>
            </a>
            <a href="/sliding-head">
              <div class="my-2">Sliding Head</div>
            </a>
            <a href="/sheet-metal">
              <div class="my-2">Sheet Metal</div>
            </a>
            <a href="/fabrication">
              <div class="my-2">Fabrication</div>
            </a>
            <a href="/welding">
              <div class="my-2">Welding</div>
            </a>
            <a href="/engraving-&-marking">
              <div class="my-2">Engraving & Marking</div>
            </a>
            <a href="/quality-control">
              <div class="my-2">Quality Control</div>
            </a>
            <a href="/finishing">
              <div class="my-2">Finishing</div>
            </a>
          </div>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/markets">
            <div @click="close" class="my-1">Markets</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/contact">
            <div @click="close" class="my-1">Contact</div>
          </router-link>
          <div>
            <img class="w-32 mt-20" src="../assets/Britain.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  left: 0;
  top: 0;
  background-color: #ffff;
  overflow-x: hidden;
  /* Disable horizontal scroll */
  transition: 0.5s;
  /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  width: 100%;
  /* 100% width */
  padding: 5px;
}

.header {
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}

@media (max-width: 500px) {
  .header {
    padding: 22px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

}
</style>