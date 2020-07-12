<template>
  <div>
    <button
      class=" bg-black text-yellow-300 px-2 rounded-lg focus:outline-none"
      @click="getData"
    >
      Get
    </button>

    <div>
      <ul v-for="country of dataArray" :key="country.name">
        <Card
          :flag="country.flag"
          :country="country.name"
          :alpha3Code="country.alpha3Code"
          :capital="country.capital"
          :callingCodes="country.callingCodes[0]"
          :population="country.population"
          :area="country.area"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Card from "./Card";

export default {
  name: "HelloWorld",

  components: {
    Card,
  },

  computed: {
    ...mapState(["dataArray"]),
  },

  methods: {
    ...mapMutations(["pushData"]),
    ...mapActions(["getData"]),
  },
};
</script>
