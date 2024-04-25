<template>
  <CustomSection
    :title="`Foreign Exchange Rate`"
    CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center mb-10"
    CustomSectionClass="flex flex-col lg:p-20 md:p-20 sm:pt-10  bg-blue-50  h-auto scroll-mt-1"
    tag="section"
  >
    <div
      class="flex flex-col border-l-[20px] mx-auto border-slate-900 p-12 rounded-lg border-0 bg-white border-solid shadow-lg lg:w-[820px] md:w-[80vw] sm:w-[90%]"
    >
      <p v-if="exchangeData == 0" class="font-bold text-[20px] text-center">
        Loading Data...
      </p>
      <div class="flex flex-col" v-else>
        <div v-for="item in exchangeData" :key="item.info.timestamp">
          <h1
            class="font-bold text-[25px] font-montserrat text-center bg-gray-200 rounded-lg mb-10 p-4"
          >
            {{ item.query.from }} to {{ item.query.to }} as of
            {{ formatDate(item.date) }}
          </h1>
          <div class="flex lg:flex-row md:flex-row sm:flex-col justify-evenly">
            <p class="mb-4 lg:text-[20px]">
              <span :class="labelClass">Amount:</span> &#36;{{
                item.query.amount
              }}
            </p>
            <p class="mb-4 lg:text-[20px]">
              <span :class="labelClass">Rate:</span> &#8369;{{ item.info.rate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from "../customComponents/CustomSection.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ExchangeRate",
  data() {
    return {
      isDataLoaded: false,
      labelClass: "mr-2 font-bold text-[22px] font-montserrat",
    };
  },
  computed: {
    ...mapGetters(["getExchangeData"]),
    exchangeData() {
      return this.getExchangeData;
    },
  },
  components: {
    CustomSection,
  },
  methods: {
    ...mapActions(["fetchExchangeData"]),
    loadData() {
      if (!this.isDataLoaded) {
        this.fetchExchangeData();
        this.isDataLoaded = true;
      }
    },
    formatDate(inputDate) {
      const dateObject = new Date(inputDate);

      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }).format(dateObject);
    },
  },
  created() {
    this.loadData();
  },
};
</script>
