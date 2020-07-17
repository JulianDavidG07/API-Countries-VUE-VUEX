<template>
  <div>
    <Search v-model="search" />

    <div class="flex justify-center">
      <div>Full Information:</div>
      <input
        class=" self-center mx-2"
        type="checkbox"
        @click="toggleModal = !toggleModal"
      />
    </div>

    <div>
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
