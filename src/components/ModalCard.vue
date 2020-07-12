<template>
  <div class="bg-white mx-auto">
    <p class="font-bold">{{ region }}</p>
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
  },
};
</script>
