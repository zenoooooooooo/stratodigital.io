<template>
  <CustomSection CustomSectionClass="flex flex-col items-center p-12  h-auto" title="Who We Have Worked For"
    tag="section" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center">

    <div class="lg:w-[800px] md:w-[80vw] sm:w-[90vw]">
      <div
        class="grid my-5 lg:w-[85%] sm:w-[100%] lg:gap-[5%] md:gap-[0] lg:grid-cols-4 md:grid-cols-4 lg:mx-auto sm:grid-cols-2 place-items-center">
        <img loading="lazy" :src="companies[0][0]"
          class="object-contain lg:w-[169px] md:w-[150px] sm:w-[130px] h-60px m-2 sm:h-full" />
        <img loading="lazy" :src="companies[0][1]"
          class="object-contain lg:w-[123px] md:w-[100px] sm:w-[130px] h-60px m-2 sm:h-full" />
        <img loading="lazy" :src="companies[0][2]"
          class="object-contain lg:w-[175px] md:w-[130px] sm:w-[130px] h-60px m-2 sm:h-full" />
        <img loading="lazy" :src="companies[0][3]"
          class="object-contain lg:w-[155px] md:w-[115px] sm:w-[130px] h-60px m-2 sm:h-full" />
      </div>
      <div class="flex flex-row lg:justify-evenly md:justify-evenly sm:justify-around lg:w-auto sm-w-[80%] lg:h-auto place-items-center">
        <img loading="lazy" :src="companies[1][0]"
          class="object-contain lg:w-[550px] md:w-[550px] sm:w-[50%]" />
        <img loading="lazy" :src="companies[1][1]"
          class="object-contain lg:w-[235px] md:w-[235px] sm:w-[50%]" />
      </div>
      <div
        class="grid lg:grid-cols-4 md:grid-cols-4 my-5 mx-auto place-items-center lg:w-[60%] sm:grid-cols-2 my-5">
        <img loading="lazy" :src="companies[2][0]"
          class="object-contain lg:w-[95px] md:w-[95px] sm:w-[200px] h-[60px] m-2 sm:h-[60%] " />
        <img loading="lazy" :src="companies[2][1]"
          class="object-contain lg:w-[107px] md:w-[107px] sm:w-[200px] h-[60px] m-2 sm:h-[60%] " />
        <img loading="lazy" :src="companies[2][2]"
          class="object-contain lg:w-[150px] md:w-[150px] sm:w-[200px] h-[60px] m-2 sm:h-[60%] " />
        <img loading="lazy" :src="companies[2][3]"
          class="object-contain lg:w-[150px] md:w-[150px] sm:w-[200px] h-[60px] m-2 sm:h-[60%] " />
      </div>
      <div
        class="mx-auto my-5 lg:grid lg:grid-cols-2 place-items-center lg:w-[50%] sm:flex sm:flex-row sm:justify-evenly">
        <img loading="lazy" :src="companies[3][0]"
          class="object-contain  max-w-[175px] min-h-[58px] min-w-[20px] m-2 sm:h-[60%]" />
        <img loading="lazy" :src="companies[3][1]"
          class="object-contain  max-w-[251px] min-h-[20px] min-w-[20px] m-2 sm:h-[60%]" />
      </div>
    </div>
  </CustomSection>
</template>

<script>
import CustomSection from '../customComponents/CustomSection.vue';
import { mapGetters } from "vuex"


export default {
  name: "WhoWe",
  computed: {
    ...mapGetters(["getCompanies"]),
    companies() {
      return this.getCompanies
    }
  },
  components: {
    CustomSection
  }
}
</script>