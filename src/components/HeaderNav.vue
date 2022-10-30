<script setup>
defineProps({
  position: Number,
});
const toggle = () => {
  document.getElementById("myNav").style.width = "100%";
};
const close = () => {
  document.getElementById("myNav").style.width = "0%";
};
</script>

<template>
  <div
    :class="
      position > 550
        ? ' flex w-full fixed lg:px-20 px-4 z-30 top-0 justify-between px-3 py-4 bg-white text-[#0E1E43]'
        : 'flex w-full fixed lg:px-20 px-4 z-30 top-0 text-white  justify-between py-4 px-3'
    "
  >
    <img v-if="position < 550" src="../assets/logo.svg" class="lg:w-80 w-52" alt="" />
    <img v-else src="../assets/logo-color.svg" class="lg:w-80 w-52" alt="" />
    <div class="lg:flex justify-between w-96 my-auto hidden">
      <router-link to="/">
        <div>Home</div>
      </router-link>
      <router-link to="/about">
        <div>Company</div>
      </router-link>
      <router-link to="/services">
        <div>Services</div>
      </router-link>
      <router-link to="/markets">
        <div>Markets</div>
      </router-link>
      <router-link to="/contact">
        <div>Contact us</div>
      </router-link>
    </div>
    <div class="lg:hidden block my-auto">
      <img @click="toggle" src="../assets/bar.png" alt="" />
    </div>
    <div v-if="position > 550" class="lg:hidden block my-auto">
      <img @click="toggle" src="../assets/blue-bar.png" alt="" />
    </div>

    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <div class="flex p-4 justify-between">
          <img class="w-40" src="../assets/logo-color.svg" alt="" />
          <img
            @click="close"
            class="w-4 h-4 my-auto"
            src="../assets/close.png"
            alt=""
          />
        </div>
        <div class="p-4 font-bold text-[#0E1E43] text-4xl">
          <router-link to="/">
            <div @click="close" class="my-1">Home</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/about">
            <div @click="close" class="my-1">Company</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/services">
            <div @click="close" class="my-1">Services</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/markets">
            <div @click="close" class="my-1">Markets</div>
          </router-link>
          <div class="bg-[#B0B0B0] h-[1px] my-4"></div>
          <router-link to="/contact">
            <div @click="close" class="my-1">Contact</div>
          </router-link>
        </div>
        <!-- <div class="p-4 text-[#C3C3C3] relative bottom-0">
          <a href="/cnc-milling">
            <div @click="close">CNC Milling</div>
          </a>
          <a href="/cnc-turning">
            <div @click="close">CNC Turning</div>
          </a>
          <a href="/sliding-head">
            <div @click="close">Sliding Head</div>
          </a>
          <a href="/sheet-metal">
            <div @click="close">Sheet Metal</div>
          </a>
          <a href="/fabrication">
            <div @click="close">Fabrication</div>
          </a>
          <a href="/welding">
            <div @click="close">Welding</div>
          </a>
          <a href="/engraving-&-marking">
            <div @click="close">Engraving & Marking</div>
          </a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  height: 100%;
  width: 0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  background-color: #ffff;
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  width: 100%; /* 100% width */
  padding: 5px;
}
</style>