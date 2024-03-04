<template>
    <CustomSection CustomSectionClass="flex flex-col p-4 lg:p-12 sm:py-20 bg-blue-50" tag="section" title="Break Barriers with the Strato Digital Team" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center">
      <div class="flex flex-col mx-auto mt-4 lg:mt-8">
        <div class="flex flex-col md:flex-row sm:flex-col gap-5">
          <div class="flex flex-col w-full md:w-6/12 lg:w-1/2">
            <div class="flex flex-col w-full lg:w-[360px]">
              <section class="flex flex-col grow self-stretch mx-auto w-full">
                <h1 class="mx-auto text-4xl lg:text-6xl md:text-6xl sm:text-5xl font-oswald">
                  130+
                </h1>
                <div class="mx-auto mt-2 lg:mt-5 lg:text-lg md:text-lg sm:text-[16px]">
                  <p><strong>Brands we have worked for</strong></p>
                </div>
                <div class="self-center mt-2 lg:mt-5 text-base lg:text-lg font-light text-center h-[60px] w-full lg:w-[362px]">
                  <p>
                    Strato Digital is trusted by big &amp; leading brands in various
                    industries in the Philippines.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div class="flex flex-col w-full md:w-6/12 lg:w-1/2 mt-4 md:mt-0">
            <div class="flex flex-col w-full lg:w-[360px]">
              <section class="flex flex-col grow self-stretch mx-auto w-full">
                <h1 class="mx-auto text-4xl lg:text-6xl md:text-6xl sm:text-5xl font-oswald">
                  20+ years
                </h1>
                <div class="mx-auto mt-2 lg:mt-5 lg:text-lg md:text-lg sm:text-[16px]">
                  <p><strong>Combined experience as a team</strong></p>
                </div>
                <div class="self-center mt-2 lg:mt-5 text-base lg:text-lg font-light text-center h-[60px] w-full lg:w-[362px]">
                  <p>
                    Started by passionate individuals and experts from the IT and
                    Marketing industry.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </CustomSection>
  </template>
  

<script>
import CustomSection from '../customComponents/CustomSection.vue';

export default {
    name: "BreakBarriers",
    components: {
      CustomSection
    }
}
</script>

<style scoped></style>