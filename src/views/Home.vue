<script setup>
import Hero from "../components/Hero.vue";

document.title = "Home | Precision and Fabrication Services";
</script>

<template>
  <div>
    <Hero />

    <div class="lg:flex lg:py-20 py-10">
      <div class="lg:w-[500px] lg:pl-20 pl-8 pr-8 lg:mt-32">
        <div class="text-[#0E1E43]">SERVICES AT CARMEL’S</div>
        <div class="text-[#0E1E43] text-3xl my-4">
          We provide excellent precision and fabrication services that meet
          today’s need.
        </div>
        <router-link to="/services">
          <div class="font-bold flex text-[#0E1E43] text-lg">Learn more

            <img class="ml-3" src="/images/Group.png" alt="">
          </div>
        </router-link>
      </div>
      <div class="flex m-6">
        <div>
          <div class="relative lg:right-0 right-1">
            <router-link to="/cnc-milling">
              <img class="m-1" src="../assets/milling.png" alt="" />
              <div class="
                text-white
                absolute
                lg:bottom-5
                bottom-2
                lg:left-12
                left-6
                lg:text-3xl
                text-lg
                font-bold
              ">
                CNC + Multi Pallet
                5-Axis Milling
              </div>
            </router-link>
          </div>
          <div class="relative lg:right-0 top-1 right-1">
            <router-link to="/sliding-head">
              <img class="m-1 h-62" src="../assets/sliding.png" alt="" />
              <div class="
                text-white
                absolute
                lg:bottom-5
                bottom-2
                lg:left-12
                left-6
                lg:text-3xl
                text-lg
                font-bold
              ">
                Sliding Head
              </div>
            </router-link>
          </div>
        </div>
        <div>
          <div class="relative">
            <router-link to="/fabrication">
              <img class="m-1" src="../assets/right1.png" alt="" />
              <div class="
                  text-white
                  absolute
                  lg:bottom-5
                  bottom-2
                  lg:left-12
                  left-6
                  lg:text-3xl
                  text-lg
                  font-bold
                ">
                Fabrication
              </div>
            </router-link>
          </div>
          <div class="relative">
            <router-link to="/sheet-metal">
              <img class="m-1 lg:mt-2" src="../assets/right2.png" alt="" />
              <div class="
                  text-white
                  absolute
                  lg:bottom-5
                  bottom-2
                  lg:left-12
                  left-6
                  lg:text-3xl
                  text-lg
                  font-bold
                ">
                Sheet Metal
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="lg:flex bg-[#0E1E43]">
      <div class="
          lg:w-1/2 lg:p-32
          px-6
          py-16
          lg:text-4xl
          text-3xl
          my-auto
          bg-[#0E1E43]
          text-white
        ">
        We’re your CNC partner from prototyping to production on specifications.
      </div>
      <div>
        <img src="../assets/side.png" alt="" />
      </div>
    </div>

    <div class="
        lg:w-1/2
        mx-auto
        text-2xl
        my-20
        lg:mb-20
        mb-8
        w-[90%]
        text-center text-[#0E1E43]
      ">
      We pride ourselves on providing a high quality services for precision
      engineering and fabrication requirements.
    </div>
    <div class="lg:flex justify-evenly lg:w-4/5 mx-auto mb-20 text-[#0E1E43]">
      <div class="p-8 lg:w-80 lg:m-0 m-6 border border-[#E9EBEC]">
        <img class="w-12 h-12" src="../assets/check.png" alt="" />
        <div class="font-bold my-2">Top Services</div>
        <div>
          As one of the leading precision engineering companies, we offer a
          complete services from prototype to fabrication.
        </div>
      </div>
      <div class="p-8 lg:w-80 lg:m-0 m-6 border border-[#E9EBEC]">
        <img class="w-12 h-12" src="../assets/check.png" alt="" />
        <div class="font-bold my-2">Industry Experience</div>
        <div>
          Our highly skilled team are experienced in working with a wide range
          of materials and specifications.
        </div>
      </div>
      <div class="p-8 lg:w-80 lg:m-0 m-6 border border-[#E9EBEC]">
        <img class="w-12 h-12" src="../assets/check.png" alt="" />
        <div class="font-bold my-2">Guaranteed Quality</div>
        <div>
          We are dedicated to delivering excellent quality and reliability across our business and are certified to
          ISO 9001:2015.
        </div>
      </div>
    </div>
  </div>
</template>