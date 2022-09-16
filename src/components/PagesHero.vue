<script setup>
defineProps({
  img: String,
  title: String,
});
</script>
<template>
  <div>
    <img class="img w-full" :src="'/images/' + img" alt="" />
    <div class="bg-black opacity-60 absolute top-0 overlay w-full"></div>
    <div
      class="absolute lg:top-96 top-80 overtext text-white lg:text-8xl text-5xl font-bold"
    >
      {{ title }}
    </div>
  </div>
</template>
<style scoped>
.overlay,
.img {
  height: 80vh;
}
.overtext {
  left: 5%;
}
@media (max-width: 600px) {
  .overtext {
    left: 15%;
  }
  .overlay,
  .img {
    height: 65vh;
  }
}
</style>