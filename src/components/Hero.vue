<template>
  <div>
    <img class="hero" src="../assets/hero.png" alt="" />
    <!-- <video src="../assets/bg-video.mp4" autoplay="true" class="hero" ></video> -->
    <div class="bg-black w-full absolute top-0 opacity-40 overlay"></div>
    <div
      class="absolute lg:top-52 top-40 lg:w-1/2 lg:left-20 right-6 left-6 text-white"
    >
      <div class="lg:text-7xl text-3xl font-bold">
        Technology driven for excellence
      </div>
      <div class="text-lg my-4 lg:w-2/3">
        Carmel’s Precision provides a complete CNC machining and fabrications
        with the best of technology across a range of industry.
      </div>
      <router-link to="/about">
        <div class="font-bold text-lg flex">
           Learn More
          <img src="../assets/Arrow1.png" class="h-2 my-auto mx-3" alt="" />
        </div>
      </router-link>
    </div>
  </div>
</template>
<style scoped>
.hero {
  height: 100vh;
  width: 100%;
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