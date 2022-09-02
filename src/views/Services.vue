<script setup>
import { ref } from "vue";
import PagesHero from "../components/PagesHero.vue";
const services = [
  {
    title: "CNC Milling",
    img: "milling.png",
    popus: {
      section1:
        "With 12 milling machines, Carmel’s Precision offer a comprehensive machining service with both horizontal and vertical CNC milling centres. CNC machining provides the ideal means of prototyping and producing complex, precisely specified parts, with minimal set-up costs.",
      section2:
        "Carmel’s Precision largest machines are the versatile horizontal and vertical machining centres, the Haas HS1 and VF8. These machines can carry out long sequences of complex cuts, meaning lead-times are reduced significantly, which in turn keeps costs competitive.",
      section3:
        "In addition, the Mini Mill handles small-parts and is ideal for finishing work and cutting aluminium. It also provides enough low-end torque to cut steel.",
      section4: "",
      img: "milling.png",
      list: [],
    },
  },
  {
    title: "CNC Turning",
    img: "turning.png",
    popus: {
      section1:
        "We offer a full conventional milling & lathe setup including vertical boring and full toolroom facilities.",
      section2:
        "Rapid production of high volume runs can be produced on our CNC lathes where tolerances can be as fine as a few microns for maximum precision.",
      section3:
        "Coupled with extensive experience this allows us to complete simple or complex machining requirements using regular or more unusual materials.",
      section4: "",
      img: "turning.png",
      list: [],
    },
  },
  {
    title: "Sliding Head",
    img: "sliding-head.png",
    popus: {
      section1:
        "Our Sliding Head CNC lathes enable a whole range of very complex parts to be manufactured in one go, to very close tolerances, at a competitive price.",
      section2:
        "The flexibility, capability and capacity of our CNC lathes offers bespoke precision CNC engineering services and the manufacture of high specification components to suit almost all needs.",
      section3:
        "We have two types of Sliding Head lathes to offer efficient, accurate and high speed small diameter complex machining:",
      section4: "",
      img: "sliding.png",
      list: ["STAR 10mm Sliding Head", "Tornos 1″ Bar Capacity Sliding Head"],
    },
  },
  {
    title: "Sheet Metal",
    img: "metal-sheet.png",
    popus: {
      section1:
        "We employ a team of highly skilled sheet metal workers with many years’ experience, based in a dedicated unit round the corner from our main factory.",
      section2:
        "They can handle a wide range of requirements from simple designs to complex projects.",
      section3: "We operate a range of machinery including:",
      section4: "",
      img: "sheet-metal.png",
      list: [
        "Amada 80 Tonne x 3 Metre 7 Axis Press Brake",
        "Amada Vipros 255 Punch Press",
        "Amada LC1212 Alpha 111 2Kw Laser",
        "Guifil 30 Tonne x 1.5 Metre CNC Press Brake",
        "Pemserter Series 4",
      ],
    },
  },
  {
    title: "Fabrication",
    img: "fabrication.png",
    popus: {
      section1:
        "Carmel’s Precision benefits from over 20 years’ experience in the specialist metal fabrication industry, providing the design and fabrication of metal and alloy products ranging from small precision components to large industrial fabrications.",
      section2:
        "We are ideally placed to cater for a diverse customer base and accommodate the needs of a wide range of industries including Transport, Defence, Construction, Aerospace and Energy.",
      section3:
        "Certified to ISO 9001:2008, we provide fabrication services for materials including:",
      section4:
        "Our team will work with you to ensure the fabricated product is exactly what you require, right through from the initial enquiry to the finished installation or assembly.",
      img: "fabrication.png",
      list: [
        "Stainless Steel",
        "Mild Steel",
        "Duplex",
        "Titanium",
        "Copper",
        "Nickel",
      ],
    },
  },
  {
    title: "Welding",
    img: "welding.png",
    popus: {
      section1:
        "We offer both MIG welding and TIG welding as well as a comprehensive metal dressing service as part of our precision sheet metal fabrication service.",
      section2:
        "This allows stainless steel fabrications to be finished to a high standard, removing oxidisation marks and reapplying grain to brushed finished items.",
      section3:
        "At Carmel’s Precision, we also offer spot welding, stud welding and projection welding of components.",
      section4: "",
      img: "welding.png",
      list: [],
    },
  },
  {
    title: "Engraving & Marking",
    img: "engraving-marking.png",
    popus: {
      section1:
        "Carmel’s Precision uses computer-controlled and manual machines for engraving nameplates and components including bulky, difficult objects such as trophies and large machined parts.",
      section2:
        "Laser marking is a highly accurate method of placing a permanent mark to a specified area of a product. This allows for intricate and delicate components to be marked without damage or distortion.",
      section3:
        "All our lasers are computer controlled, ensuring a high quality, cost effective permanent and repeatable part number, logo or serial number to be easily applied to your finished product.",
      section4: "",
      img: "marking.png",
      list: [],
    },
  },
  {
    title: "Quality Control",
    img: "quality-assurance.png",
    popus: {
      section1:
        "In order to continually meet the requirements of ISO:9001 Carmel’s Precision operates fully documented quality procedures.",
      section2:
        "The team undertakes all aspects of quality assurance and inspection, utilising both traditional and state of the art measuring equipment.",
      section3:
        "We ensure that all metal fabrications are produced correctly to the customer’s requirements first time, recording any detail changes on the production system for future batches.",
      section4:
        "Parts are carefully inspected and hand-finished as they leave the machine, giving us complete quality control at the point of production.",
      img: "quality.png",
      list: [],
    },
  },
  {
    title: "Finishing",
    img: "finishing.png",
    popus: {
      section1:
        "We offer a range of pre-treatment and finishing services to meet all requirements.",
      section2:
        "Our pre-treatments include rumbler, linishing and bead blasting to give the required surface before applying a finish.",
      section3: "Finshes include:",
      section4: "",
      img: "finishing.png",
      list: [
        "Powder coating",
        "Wet paint spraying",
        "Metal polishing",
        "Plating and anodising",
        "Screen printing",
      ],
    },
  },
];
const pos = ref(0);
const modal = ref(false);

const setPosition = (id) => {
  pos.value = id;
  modal.value = true;
};
</script>
<template>
  <div>
    <PagesHero img="services.png" title="Services" />
    <div class="bg-[#FFFEF2]">
      <div
        class="
          lg:w-1/2
          mx-auto
          lg:text-2xl
          text-lg
          p-10
          text-[#0E1E43]
          lg:p-20
          text-center
        "
      >
        We offers a comprehensive range of precision engineering services from
        prototype through to full-scale production runs.
      </div>
    </div>

    <div class="lg:flex lg:m-20 flex-wrap justify-evenly">
      <div
        class="lg:w-80 relative m-4 lg:my-4 my-8"
        v-for="(service, index) in services"
        :key="index"
      >
        <img :src="'/images/services/' + service.img" alt="" />
        <div
          class="
            flex
            justify-between
            p-4
            absolute
            bottom-0
            bg-white
            w-full
            rounded-b-2xl
            shadow-md
          "
        >
          <div class="text-xl text-[#0E1E43]">{{ service.title }}</div>
          <img
            @click="setPosition(index)"
            class="w-8 h-8 cursor-pointer"
            src="../assets/plus.png"
            alt=""
          />
        </div>
      </div>
    </div>

    <div v-if="modal">
      <div class="bg-black z-40 w-full h-full fixed opacity-80 top-0"></div>
      <div class="fixed top-4 z-50 lg:w-2/5 lg:left-96 lg:m-0 m-4 bg-white">
        <div class="relative">
          <img
            :src="'/images/services/popup/' + services[pos].popus.img"
            alt=""
            class="w-full h-40"
          />
          <img
            @click="modal = !modal"
            src="../assets/x.png"
            class="absolute top-2 w-6 h-6 right-2 cursor-pointer"
            alt=""
          />
        </div>
        <div class="px-8 py-4">
          <div class="text-2xl text-[#0E1E43] font-bold mb-3">
            {{ services[pos].title }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section1 }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section2 }}
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section3 }}
          </div>
          <div class="text-sm mb-3 text-[#555464] ml-5">
            <ul>
              <li
                class=""
                v-for="(single, index) in services[pos].popus.list"
                :key="index"
              >
                {{ single }}
              </li>
            </ul>
          </div>
          <div class="text-sm mb-3 text-[#555464]">
            {{ services[pos].popus.section4 }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul li {
  list-style-type: disc;
}
</style>