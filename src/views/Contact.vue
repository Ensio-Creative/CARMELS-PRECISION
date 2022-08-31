<script setup>
import { ref } from "vue";

import { createToast } from "mosha-vue-toastify";
import "mosha-vue-toastify/dist/style.css";

// document.title = "Contact Us - Carmel's Group";

const name = ref("");
const message = ref("");
const company = ref("");
const email = ref("");
const loading = ref(false);

const handleFormSubmit = (e) => {
  // e.preventDefault();
  loading.value = true;

  fetch("https://formsubmit.co/ajax/alaboexcel@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      message: message.value,
      email: email.value,
      comapny: company.value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if (data.success === "true") {
        createToast("Message sent successfully!");
        name.value = "";
        email.value = "";
        message.value = "";
        company.value = "";
        loading.value = false;
      }
    })
    .catch((error) => {
      console.log(error);
      createToast("An error occured, Please try again", error.text);
      name.value = "";
      email.value = "";
      message.value = "";
      company.value = "";
      loading.value = false;
    });
};
</script>


<template>
  <div>
    <div class="bg-[#0E1E43] text-white text-center lg:p-32 py-40 h-2/3">
      <div class="lg:w-2/5 mx-auto">
        <div class="lg:text-8xl text-5xl font-bold">Contact</div>
        <div class="lg:px-0 px-8">
          Whether you have questions, need feedback or a quotation, we would
          love to hear from you. Contact us today and we will be sure to respond
          within 24 hours.
        </div>
      </div>
    </div>
    <div class="lg:flex">
      <div class="bg-[#FFFEF2] lg:w-1/2 lg:pt-10">
        <div class="lg:p-32 p-8 lg:text-lg">
          <div class="my-4">
            Address <br />
            8 Lancaster Way, Ely, Cambridgeshire CB6 3NW
          </div>
          <div class="my-4">
            T: 01353 662 244 <br />
            F: 01353 666 868
          </div>
          <div class="my-4">
            Email <br />
            sales@carmelsprecision.com
          </div>
        </div>
      </div>
      <div class="lg:w-1/2">
        <img src="../assets/map.png" alt="" />
      </div>
    </div>
    <div class="lg:w-2/3 mx-auto text-center my-12 p-4">
      <div class="text-2xl mx-auto my-12 lg:w-96">
        Please fill in the form below for question(s) or a quotation.
      </div>
      <div>
        <input
          type="text"
          class="border-b border-[#C3C3C3] w-full p-2 my-2"
          placeholder="Name"
          v-model="name"
        />
      </div>
      <div>
        <input
          type="email"
          class="border-b border-[#C3C3C3] w-full p-2 my-2"
          placeholder="Email"
          v-model="email"
        />
      </div>
      <div>
        <input
          type="text"
          class="border-b border-[#C3C3C3] w-full p-2 my-2"
          placeholder="Company"
          v-model="company"
        />
      </div>
      <div>
        <textarea
          class="border-b border-[#C3C3C3] w-full p-2 h-32 my-2"
          placeholder="Message"
          v-model="message"
        ></textarea>
      </div>
      <div>
        <input
          @click="handleFormSubmit(e)"
          type="button"
          class="w-full bg-[#0E1E43] text-white p-3 my-2"
          :value="loading ? 'Loading...' : 'SEND MESSAGE'"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
input:focus,
textarea:focus {
  outline: none;
}
</style>