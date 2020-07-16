<template>
  <div class="block">
    <input
      class="bg-teal-200 rounded-lg focus:outline-none px-2"
      type="text"
      placeholder="Search Country"
      :v-model="search"
    />
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Search",

  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapState(["dataArray"]),
  },

  methods: {
    ...mapMutations(["filterData"]),
  },

  filters: {
    filterData() {
      return this.dataArray.filter((country) => {
        return country.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
};
</script>
