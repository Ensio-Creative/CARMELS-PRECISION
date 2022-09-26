<script setup>
defineProps({
  img: String,
  title: String,
});
</script>
<template>
  <div class="lg:mb-0 mb-8">
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
  width: 100%;
}
.overtext {
  left: 5%;
}
@media (max-width: 600px) {
  .overtext {
    left: 5%;
    top: 50%;
  }
  .overlay,
  .img {
    height: 68vh;
    width: 100%;
    object-fit: cover
  }
}
</style>