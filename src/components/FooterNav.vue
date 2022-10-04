<template>
  <div>
    <div class="bg-[#0E1E43] text-center text-white py-32 w-full lg:mt-0 mt-10">
      <div class="">GET IN TOUCH</div>
      <div class="lg:text-3xl text-2xl font-bold lg:w-1/2 w-80 mx-auto my-5">
        Want to contact us or request a quotation? <br />
        We are here to help.
      </div>
      <div>
        <router-link to="/contact">
          <button class="bg-white p-3 w-44 rounded-sm text-[#0E1E43]">
            TALK TO US
          </button>
        </router-link>
      </div>
    </div>
    <div class="lg:px-20 px-8">
      <div
        class="
          py-10
          lg:pb-20
          pb-1
          flex flex-wrap
          justify-between
          text-[#081637]
        "
      >
        <div class="lg:w-auto w-full">
          <img
            src="../assets/logo-color.svg"
            class="w-52 lg:mb-0 mb-10"
            alt=""
          />
        </div>
        <div class="lg:my-0 my-6 lg:ml-20">
          <div class="font-bold">COMPANY</div>
          <router-link to="/about">
            <div class="my-2">About us</div>
          </router-link>
          <router-link to="/services">
            <div class="my-2">Services</div>
          </router-link>
          <router-link to="/markets">
            <div class="my-2">Markets</div>
          </router-link>
          <router-link to="/contact">
            <div class="my-2">Contact us</div>
          </router-link>
        </div>
        <div class="lg:my-0 my-6">
          <div class="font-bold">SERVICES</div>
          <router-link to="/cnc-milling">
            <div class="my-2">CNC Milling</div>
          </router-link>
          <router-link to="/cnc-turning">
            <div class="my-2">CNC Turning</div>
          </router-link>
          <router-link to="/sliding-head">
            <div class="my-2">Sliding Head</div>
          </router-link>
          <router-link to="/sheet-metal">
            <div class="my-2">Sheet Metal</div>
          </router-link>
        </div>
        <div class="lg:w-52 w-full lg:my-0 my-4">
          <div class="font-bold">SOCIAL MEDIA</div>
          <div class="flex justify-between">
            <img src="../assets/socials/instagram.png" alt="" />
            <img src="../assets/socials/twitter.png" alt="" />
            <img src="../assets/socials/linkedln.png" alt="" />
            <img src="../assets/socials/facebook.png" alt="" />
          </div>
        </div>
      </div>
      <div
        class="
          lg:flex
          justify-between
          border-t
          p-4
          lg:text-auto
          text-center
          border-[#E9EBEC]
          text-[#081637] text-sm
        "
      >
        <div>© 2022 Carmel’s Precision Limited.</div>
        <div>
          Design:
          <a href="https://ensiocreative.com/" target="blank">Ensio Creative</a>
        </div>
      </div>
    </div>
  </div>
</template>