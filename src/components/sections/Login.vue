<template>
    <CustomSection :CustomSectionClass="customClass" title="Login" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center" tag="form" @submit.prevent="handleLogin">
        
            <div class="flex flex-col mt-5">
                <div class="flex flex-col gap-5 max-md:flex-col max-md:gap-0 max-md:">
                    <div class="flex flex-col w-full     max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Email Address</strong></p>
                            <input type="email" name="email" v-model="emailAddress" :class="inputStyle"
                                required />
                        </label>
                    </div>
                    <div class="w-full max-md:ml-0 max-md:w-full">
                        <label>
                            <p><strong>Password</strong></p>
                            <input type="password" name="password" v-model="password" :class="inputStyle" required/>
                        </label>
                    </div>
                </div>
            </div>
            <div class=" mt-5">
                <div class="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                </div>
            </div>
            <button  type="submit"
                class="mt-5 lg:mr-auto md:mr-auto text-center bg-sky-500 rounded-lg cursor-pointer text-[white] lg:w-32 md:w-32 sm-w-[100%] py-3 hover:bg-sky-700  active:bg-sky-900  transition duration-300">
                Login
            </button>

    </CustomSection>
</template>

<script>
import CustomSection from "../customComponents/CustomSection.vue"

export default {
    name: "Login",
    components: {
        CustomSection
    },
    props: {
        customClass: Object
    },
    data() {
        return {
            inputStyle: "p-2.5 mt-2.5 rounded-lg border border-solid border-stone-300 w-full",
            emailAddress: "",
            password: ""
        }
    },
    methods: {
        handleLogin() {
            alert("Logged in successfully as " + this.emailAddress)
        }
    }
}
</script>