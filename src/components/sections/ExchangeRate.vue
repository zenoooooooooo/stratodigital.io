<template>
    <CustomSection :title="`Exchange Rate of USD to PHP as per ${exchangeData.date}`"
        CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center"
        CustomSectionClass="flex flex-col items-center justify-center py-12 h-auto scroll-mt-1" tag="section">
        <div
            class="flex flex-col p-12 lg:m-auto md:m-auto sm:m-auto h-auto rounded-lg border-0 border-solid shadow-lg lg:w-[820px] md:w-[80vw] sm:w-[80vw]">
       <!-- {{ exchangeData }}

       <table class="border border-gray-900">
        <tr class="border border-gray-900">
            <th>Country (FROM)</th>
            <th>UNIT</th>
            <th>SYMBOL</th>
            <th>U.S. DOLLAR EQUIVALENT</th>
            <th>PHIL. PESO EQUIVALENT</th>
        </tr>
        <tr>
            <th>1. UNITED STATES</th>
            <th>DOLLAR</th>
            <th>{{ exchangeData.query.from }}</th>
            <th> {{ exchangeData.query.amount }}</th>
            <th>{{ exchangeData.result }}</th>
        </tr>
       </table> -->
        </div>
    </CustomSection>
</template>

<script>
import CustomSection from "../customComponents/CustomSection.vue";
import { mapGetters, mapActions } from "vuex";

export default {
    name: "ExchangeRate",
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

