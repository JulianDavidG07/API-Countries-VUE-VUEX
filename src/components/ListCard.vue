<template>
  <div class="bg-blue-700">
    <div class="py-3">
      <div class="flex justify-center rounded-lg py-2">
        <Search v-model="search" />
        <div class="bg-blue-400 mx-2 rounded-lg">
          <span class="ml-2">Full Data:</span>
          <input class="self-center mx-2" type="checkbox" @click="toggleModal = !toggleModal" />
        </div>
      </div>
    </div>

    <div class="bg-blue-700">
      <div class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        <ul v-for="country of filterArray" :key="country.name">
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
      search: "",
    };
  },

  computed: {
    ...mapState(["dataArray"]),

    filterArray() {
      return this.dataArray.filter((country) => {
        return country.name.toLowerCase().includes(this.search.toLowerCase());
      });
    },
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
