<template>
  <div>
    <Search />

    <button
      class="bg-indigo-700 px-2 text-white rounded-lg border border-black focus:outline-none"
      @click="toggleModal = !toggleModal"
    >
      More ...
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
        <ModalCard
          v-if="toggleModal"
          :languages="country.languages"
          :demonym="country.demonym"
          :region="country.region"
          :subregion="country.subregion"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Search from "./Search";
import Card from "./Card";
import ModalCard from "./ModalCard";

export default {
  name: "HelloWorld",

  components: {
    Card,
    ModalCard,
    Search,
  },

  data() {
    return {
      toggleModal: false,
    };
  },

  computed: {
    ...mapState(["dataArray", "search"]),
  },

  methods: {
    ...mapMutations(["pushData", "filterData"]),
    ...mapActions(["getData"]),
  },
  mounted() {
    this.getData();
  },
};
</script>
