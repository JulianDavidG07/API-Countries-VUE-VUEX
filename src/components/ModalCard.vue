<template>
  <div class="bg-gray-800 text-left px-2 text-white mb-10 mx-2 py-2 rounded-lg">
    <p><span class="font-bold">Demonym: </span> {{ demonym }}</p>
    <p><span class="font-bold">Region: </span> {{ region }}</p>
    <p><span class="font-bold">Sub-Region: </span> {{ subregion }}</p>
  </div>
</template>

<script>
export default {
  name: "ModalCard",

  props: {
    region: {
      type: String,
      default: "Region",
    },
    subregion: {
      type: String,
      default: "Subregion",
    },
    demonym: {
      type: String,
      default: "Demonym",
    },
  },
};
</script>
