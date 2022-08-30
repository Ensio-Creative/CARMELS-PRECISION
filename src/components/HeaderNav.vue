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
        ? ' flex w-full fixed lg:px-20 px-4 z-30 top-0 justify-between p-3 bg-white text-[#0E1E43]'
        : 'flex w-full fixed lg:px-20 px-4 z-30 top-0 text-white  justify-between p-3'
    "
  >
    <img v-if="position < 550" src="../assets/logo.png" alt="" />
    <img v-else src="../assets/logo-color.png" alt="" />
    <div class="lg:flex justify-between w-96 my-auto hidden">
      <div>Home</div>
      <div>Company</div>
      <div>Services</div>
      <div>Markets</div>
      <div>Contact us</div>
    </div>
    <div class="lg:hidden block my-auto">
      <img @click="toggle" src="../assets/bar.png" alt="" />
    </div>

    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <div class="flex p-4 justify-between">
          <img class="w-40" src="../assets/logo-color.png" alt="" />
          <img
            @click="close"
            class="w-4 h-4 my-auto"
            src="../assets/close.png"
            alt=""
          />
        </div>
        <div class="p-4 font-bold text-[#0E1E43] text-3xl">
          <div class="my-1">Home</div>
          <div class="my-1">Company</div>
          <div class="my-1">Services</div>
          <div class="my-1">Markets</div>
          <div class="my-1">Contact</div>
        </div>
        <div class="p-4 text-[#C3C3C3] relative bottom-0">
          <div>CNC Milling</div>
          <div>CNC Turning</div>
          <div>Sliding Head</div>
          <div>Sheet Metal</div>
          <div>Fabrication</div>
          <div>Welding</div>
          <div>Engraving & Marking</div>
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
}
</style>