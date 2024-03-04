<template>
    <CustomSection CustomSectionClass="flex flex-col p-12 h-auto scroll-mt-12" title="Get Started" tag="form"
        id="contact-us" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center">
        <div class=" mx-auto mt-5 h-auto text-lg text-center">
            Tell us more so we can send a quotation to your project.<br />
        </div>
        <div
            class="flex flex-col  p-12 lg:m-auto md:m-auto sm:m-auto h-auto rounded-lg border-0 border-solid shadow-lg lg:w-[820px] md:w-[80vw] sm:w-[80vw]" v-if="!formSubmitted">
            <label>
                <p><strong>Full Name</strong></p>
                <input type="text" placeholder="Juan Dela Cruz" name="fullName" :class="inputStyle"
                    @change="handleChange" required />
            </label>
            <div class="flex flex-col  mt-5">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Email Address</strong></p>
                            <input type="email" placeholder="example@email.com" name="email" :class="inputStyle"
                                required />
                        </label>
                    </div>
                    <div class="ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Contact Number</strong></p>
                            <input type="tel" placeholder="09123456789" name="contact" :class="inputStyle" required />
                        </label>
                    </div>
                </div>
            </div>
            <div class=" mt-5">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Project Details</strong></p>
                            <select name="projectDetails"
                                class="flex flex-col  self-start p-2.5 mt-5 w-full bg-white rounded-lg border border-solid border-stone-300 h-[45px]"
                                required>
                                <option value="">Select One...</option>
                                <option value="pm">Performance Marketing</option>
                                <option value="cm">Content Marketing</option>
                                <option value="im">Influencer Marketing</option>
                                <option value="asi">Analytics, Strategy &amp; Implementation</option>
                                <option value="s/s">SEO/SEM</option>
                                <option value="wd">Website Development</option>
                                <option value="mad">Mobile App Development</option>
                                <option value="sa">Staff Augmentation</option>
                                <option value="o">Other</option>
                            </select>
                        </label>
                    </div>
                    <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Project Budget</strong></p>
                            <select name="projectBudget"
                                class="flex flex-col  self-start p-2.5 mt-5 w-full bg-white rounded-lg border border-solid border-stone-300 h-[45px]"
                                required>
                                <option value="">Select One...</option>
                                <option value="50">&lt; &#8369;50,000</option>
                                <option value="50-100">&#8369;50,000 - &#8369;100,000</option>
                                <option value="50-100">&#8369;100,001 - &#8369;200,000</option>
                                <option value="50-100">&#8369;200,001 - &#8369;300,000</option>
                                <option value="50-100">&gt; &#8369;300,000</option>
                            </select>
                        </label>
                    </div>
                </div>
            </div>
            <button type="submit" @click="handleSubmit"
                class="mt-5 lg:mr-auto md:mr-auto text-center bg-sky-500 rounded-lg cursor-pointer text-[white] lg:w-32 md:w-32 sm-w-[100%] py-3 hover:bg-sky-700  active:bg-sky-900  transition duration-300">
                Submit
            </button>
        </div>
        <div v-else class="p-12 lg:m-auto md:m-auto sm:m-auto h-auto rounded-lg border-0 border-solid shadow-lg lg:w-[820px] md:w-[80vw] sm:w-[80vw]">
            <div class="flex flex-col bg-green-300 w-full h-full mx-auto p-[5%] font-montserrat text-green-900 rounded-lg p-12">
                <h1 class="text-center font-semibold text-2xl mb-6">Thank you!</h1>
                <p class="text-center text-[16px]">Your submission has been received and we will contact you soon.</p>
            </div>
        </div>
    </CustomSection>


</template>

<script>
import CustomSection from '../customComponents/CustomSection.vue';



export default {
    name: "Form",
    data() {
        return {
            inputStyle: "p-2.5 mt-2.5 rounded-lg border border-solid border-stone-300 w-full",
            formSubmitted: false
        }
    },
    components: {
        CustomSection
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault()
            this.formSubmitted = true
        }

    }
}
</script>