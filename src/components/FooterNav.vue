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
          <button class="bg-[#EE3C23] p-3 w-44 rounded-sm text-white">
            CONTACT US
          </button>
        </router-link>
      </div>
    </div>
    <div class="lg:px-20 px-8">
      <div class="
          py-10
          lg:pb-20
          pb-1
          flex flex-wrap
          justify-between
          text-[#081637]
        ">
        <div class="lg:w-auto w-full">
          <img src="../assets/logo-color.svg" class="lg:w-80 w-52 lg:mb-0 mb-10" alt="" />
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
        </div>
        <div class="lg:w-52 w-full lg:my-0 my-4 lg:block flex">
          <!-- <div>
            <div class="font-bold lg:pl-2">SOCIAL MEDIA</div>
            <div class="flex justify-between flex-wrap lg:w-auto w-2/3 lg:-ml-0 -ml-2">
              <img src="../assets/socials/instagram.png" alt="" />
              <img src="../assets/socials/twitter.png" alt="" />
              <img src="../assets/socials/linkedln.png" alt="" />
              <img src="../assets/socials/facebook.png" alt="" />
            </div>
          </div> -->
          <div>
            <img class="lg:pl-2 lg:mx-0 mx-auto" src="../assets/Made-in-Britain.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="
          lg:flex
          justify-between
          border-t
          p-4
          lg:text-auto
          text-center
          border-[#E9EBEC]
          text-[#081637] text-sm
        ">
        <div>
          © 2022 Carmel’s PFSM. -
          <router-link to="/privacy-policy">Privacy Policy</router-link>
        </div>
        <div>
          Design:
          <a href="https://ensiocreative.com/" target="blank">Ensio Creative</a>
        </div>
      </div>
    </div>
  </div>
</template>