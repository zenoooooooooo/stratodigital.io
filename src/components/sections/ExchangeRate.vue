<template>
    <CustomSection title="Exchange Rate of USD to PHP"
        CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center m-20"
        CustomSectionClass="flex flex-col items-center justify-center py-12 h-auto scroll-mt-1" tag="section">
        <div
            class="flex flex-col p-12 lg:m-auto md:m-auto sm:m-auto h-auto rounded-lg border-0 border-solid shadow-lg lg:w-[820px] md:w-[80vw] sm:w-[80vw]">
            <div>
    <table class="max-w-full bg-white rounded-lg overflow-hidden shadow-md">
      <thead>
        <tr>
          <th :class="cellStyle">From</th>
          <th :class="cellStyle">To</th>
          <th :class="cellStyle">Amount</th>
          <th :class="cellStyle">Timestamp</th>
          <th :class="cellStyle">Rate</th>
          <th :class="cellStyle">Date</th>
          <th :class="cellStyle">Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in exchangeData" :key="item.info.timestamp">
          <td :class="cellStyle">{{ item.query.from }}</td>
          <td :class="cellStyle">{{ item.query.to }}</td>
          <td :class="cellStyle">{{ item.query.amount }}</td>
          <td :class="cellStyle">{{ item.info.timestamp }}</td>
          <td :class="cellStyle">{{ item.info.rate }}</td>
          <td :class="cellStyle">{{ item.date }}</td>
          <td :class="cellStyle">{{ item.result }}</td>
        </tr>
      </tbody>
    </table>
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
        cellStyle: "border border-gray-300 px-4 py-2 sm:w-1/6 md:w-1/6 lg:w-1/7 xl:w-1/7"
      }  
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
    },
    created() {
        this.fetchExchangeData();
    },
};
</script>
