<template>
  <div class="block">
    <input
      class="bg-blue-100 rounded-lg focus:outline-none px-2"
      :value="value"
      @input="filterSearch($event.target.value)"
      type="text"
      placeholder="Search Country"
    />
  </div>
</template>

<script>
export default {
  name: "Search",

  props: {
    search: {
      type: String,
    },
  },

  methods: {
    filterSearch(value) {
      this.$emit("input", value);
    },
  },
};
</script>
