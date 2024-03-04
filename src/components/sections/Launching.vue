<template>
    <CustomSection CustomSectionClass="flex flex-col py-12 h-auto scroll-mt-1"
        title="Launching Your Business To Greatness" tag="section" id="services"
        CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center">
        <div class=" gap-5 mx-auto mt-5">
            <div class="flex flex-row mx-auto grid lg:grid-cols-3 md:grid-cols-2">
                <div class="w-[300px]" v-for="(section, index) in sections" :key="index">
                    <img loading="lazy" :src="section.image"
                        class="object-cover overflow-hidden mx-auto mt-5 aspect-square lg:h-[100px] lg:max-w-[100px]  w-[100px]" />
                    <div class="flex justify-center items-center h-[60px]">
                        <h3 class="text-center mt-5 h-auto font-bold text-lg">
                            {{ section.title }}
                        </h3>
                    </div>
                    <p class="self-center mx-auto mt-5 font-light text-center">
                        {{ section.description }}
                    </p>
                </div>
            </div>
        </div>
    </CustomSection>
</template>

<script>
import CustomSection from "../customComponents/CustomSection.vue"
import { mapGetters } from "vuex"
export default {
    name: "Launching",
    computed: {
        ...mapGetters(["getSections"]),
        sections() {
            return this.getSections;
        },
    },
    components: {
        CustomSection
    }

}
</script>

<style scoped></style>
