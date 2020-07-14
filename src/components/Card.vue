<template>
  <div
    class="block bg-gray-800 border-2 border-gray-100 text-white rounded-lg my-2 md:w-1/5"
  >
    <div class="flex justify-end">
      <div
        class="absolute bg-gray-700 w-16 rounded-full mt-2 border border-black"
      >
        + {{ callingCodes }}
      </div>
      <img class=" rounded-lg" :src="flag" alt="Flag Country" />
    </div>

    <div class="flex justify-center my-2">
      <h1 class=" font-semibold text-white">{{ country }}</h1>
      <span
        class="bg-black font-light text-white text-xs rounded-lg mx-2 px-1 py-0 self-center"
      >
        {{ alpha3Code }}
      </span>
    </div>

    <div class="text-left mt-2 ml-2">
      <p class="block"><strong>Capital: </strong>{{ capital }}</p>
      <p class="block">
        <strong>Population: </strong>{{ population | pointDecimal }}
      </p>
      <p class="block">
        <strong>Area: </strong>{{ area | pointDecimal }} km <sup>2</sup>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",

  filters: {
    pointDecimal: (area) => {
      return area.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "1.");
    },
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
