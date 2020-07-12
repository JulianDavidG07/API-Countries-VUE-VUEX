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

        <button
          class="bg-indigo-700 px-2 text-white rounded-lg border border-black focus:outline-none my-3"
          @click="toggleModal = !toggleModal"
        >
          More ...
        </button>
        <ModalCard v-if="toggleModal" :region="country.region" />
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
import Card from "./Card";
import ModalCard from "./ModalCard";

export default {
  name: "HelloWorld",

  data() {
    return {
      toggleModal: false,
    };
  },

  components: {
    Card,
    ModalCard,
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
