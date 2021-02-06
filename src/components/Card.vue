<template>
  <div class="bg-gray-800 border-2 border-gray-100 text-white rounded-lg my-2">
    <div class="flex justify-end">
      <img style ="min-height: 160px; max-height: 160px; min-width: -webkit-fill-available;" class="rounded-lg border border-black" :src="flag" alt="Flag Country" />
    </div>

    <div class="flex justify-center my-2">
      <h1 class="font-semibold text-white">{{ country }}</h1>
      <span
        class="bg-black font-light text-white text-xs rounded-lg mx-2 px-1 py-0 self-center"
      >{{ alpha3Code }}</span>
    </div>

    <div class="flex justify-center">
      <div
        class="bg-gray-300 w-12 text-black rounded-lg text-center text-xs"
      >{{ callingCodes | zipCode }}</div>
    </div>

    <div class="text-left mt-2 ml-2">
      <p class="block">
        <strong>Capital:</strong>
        {{ capital }}
      </p>
      <p class="block">
        <strong>Population:</strong>
        {{ population | pointDecimal }}
      </p>
      <p class="block">
        <strong>Area:</strong>
        {{ area | pointDecimal }} km
        <sup>2</sup>
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

    zipCode: (callingCodes) => {
      return `+ ${callingCodes}`;
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
