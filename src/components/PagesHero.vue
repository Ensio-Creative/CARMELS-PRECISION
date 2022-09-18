<script setup>
defineProps({
  img: String,
  title: String,
});
</script>
<template>
  <div class="lg:mb-0 mb-20">
    <img class="img" :src="'/images/' + img" alt="" />
    <div class="bg-black opacity-60 absolute top-0 overlay w-full"></div>
    <div
      class="
        absolute
        lg:top-96
        overtext
        text-white
        lg:text-8xl
        text-5xl
        font-bold
      "
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
    left: 5%;
    top: 52%;
  }
  .overlay,
  .img {
    height: 60vh;
    transform: scale(1.2);
    width: 91%;
  }
}
</style>