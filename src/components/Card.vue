<template>
  <div
    class="block bg-indigo-200 border-2 border-indigo-900 rounded-lg my-2 md:w-1/5"
  >
    <div class="flex justify-end">
      <div
        class="absolute bg-indigo-100 w-16 rounded-full mt-2 border border-black"
      >
        + {{ callingCodes }}
      </div>
      <img class=" rounded-lg" :src="flag" alt="Flag Country" />
    </div>

    <div class="flex justify-center my-2">
      <h1 class=" font-semibold text-gray-700">{{ country }}</h1>
      <span
        class="bg-black font-light text-white text-xs rounded-lg mx-2 px-1 py-0 self-center"
      >
        {{ alpha3Code }}
      </span>
    </div>

    <div class="text-left mt-2 ml-2">
      <p class="block"><strong>Capital: </strong>{{ capital }}</p>
      <p class="block"><strong>Population: </strong>{{ population }}</p>
      <p class="block"><strong>Area: </strong>{{ area }}</p>
    </div>

    <button
      class="bg-indigo-700 px-2 text-white rounded-lg border border-black focus:outline-none my-3"
      @click="toggleModal = !toggleModal"
    >
      More ...
    </button>
    <ModalCard v-if="toggleModal" :region="country.region" />
  </div>
</template>

<script>
import ModalCard from "./ModalCard";

export default {
  name: "Card",

  data() {
    return {
      toggleModal: false,
    };
  },

  components: {
    ModalCard,
  },

  props: {
    flag: {
      default: "Flag Country",
    },
    country: {
      type: String,
      default: "country",
    },
    alpha3Code: {
      type: String,
      default: "Alpha Code",
    },
    capital: {
      type: String,
      default: "Capital",
    },
    callingCodes: {
      default: "CODE",
    },
    population: {
      default: "population",
    },
    area: {
      dafault: "area,",
    },
  },
};
</script>
