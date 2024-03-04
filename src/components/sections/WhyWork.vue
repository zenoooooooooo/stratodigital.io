<template>
    <CustomSection CustomSectionClass="flex flex-col h-auto lg:p-12 md:p-12 sm:p-5" title="Why Work With Strato Digital" tag="section" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center m-[50px]">
  

        <CustomCard v-for="(card, index) in cards" :key="index" :title="card.title" :description="card.description"  />

    </CustomSection>
</template>

<script>
import CustomSection from "../customComponents/CustomSection.vue"
import CustomCard from "../customComponents/CustomCard.vue"
import { mapGetters } from "vuex"
export default {
    name: "WhyWork",
    components: {
        CustomSection,
        CustomCard
    },
    computed: {
        ...mapGetters(["getCards"]),
        cards() {
            return this.getCards
        }
    }

}
</script>

