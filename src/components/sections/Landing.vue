<template>
    <section
        class="flex flex-row relative text-white bg-center bg-no-repeat bg-cover bg-[url(src/images/bg.png)] h-[1000px] justify-center items-center md:flex md:items-center"
        id="banner">
        <div
            class="lg:w-[35vw] md:w-[80vw] sm:w-[80vw] lg:ml-auto my-auto  flex lg:h-auto flex-col justify-start md:bg-[url(src/images/meteor/meteor.png)] sm:bg-[url(src/images/meteor/meteor.png)] sm:w-full bg-center bg-no-repeat md:h-full sm:h-full lg:bg-none justify-center">
            <h1
                class="font-montserrat font-bold lg:text-7xl mb-5 md:text-center sm:text-center lg:text-left md:text-7xl sm:text-5xl ">
                BREAKING<br>BARRIERS</h1>

            <p
                class="lg:text-left lg:w-[504px] md:w-[700px] md:w-full sm:w-full md:text-center sm:text-center font-sans h-auto lg:text-[20px] md:text-[20px] sm:text-[16px] mb-7  ">
                <strong>WE ARE STRATO DIGITAL.</strong><span>
                    A digital marketing agency that breaks barriers and provides clients digital marketing solutions in
                    order to solve business challenges.
                </span>
            </p>
            <a @click="scrollToSection('#contact-us')"
                class="px-7 py-3 border-2 rounded-lg border-solid border-sky-500 text-sky-500 inline-block md:mx-auto sm:mx-auto lg:ml-0  hover:bg-sky-900 transition duration-250 active:bg-gray-500">GET
                STARTED</a>
        </div>

        <Meteor customClass="w-[50%] h-screen overflow-hidden lg:block md:hidden sm:hidden" />
    </section>
</template>


<script>

import Meteor from "./Meteor.vue"

import VueScrollTo from 'vue-scrollto';

export default {
    name: "Landing",
    components: {
        Meteor
    },
    setup() {
        const scrollToSection = (target) => {
            VueScrollTo.scrollTo(target, 800, {
                easing: 'ease-in-out',
                offset: -80, // Adjust this value as needed for the scroll margin top
            });
        };
        return {
            scrollToSection,
        };
    },

}
</script>