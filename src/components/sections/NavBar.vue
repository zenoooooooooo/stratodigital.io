<template>
    <nav :class="{
        'bg-opacity-100 transition duration-500 ease-in-out': scrolled,
        'bg-opacity-0 transition duration-500 ease-in-out': !scrolled,
        'fixed inset-x-0 top-0 flex-row text-white bg-slate-900': true,
        'h-[83px] z-[1] w-full ': true
    }">

        <div class="flex static flex-row m-auto  h-[75px] lg:w-[50%] md:w-[80%] sm:w-[90%] sm:h-[100%] items-center ">
            <a @click="scrollToSection('#banner')"
                class="flex w-auto md:mr-auto sm:mr-auto h-full hover:cursor-pointer"> <img loading="lazy"
                    src="../../images/logo.png"
                    class="object-contain overflow-hidden my-auto lg:h-[70px] lg:w-[250px] md:w-[200px] sm:h-[100%] lg:mr-auto" /></a>
            <div class="my-auto mr-12 ml-auto h-auto font-medium lg:block md:hidden sm:hidden">
                <a @click="scrollToSection('#services')"
                    class="hover:cursor-pointer hover:text-sky-500 transition duration-150 font-bold scroll-margin-top">Services</a>
            </div>
            <div class="my-auto  mr-12 h-auto font-medium lg:block md:hidden sm:hidden">
                <a @click="scrollToSection('#contact-us')"
                    class="hover:cursor-pointer font-bold hover:text-sky-500 transition duration-150">Get
                    a Quote</a>
            </div>
            <div class="my-auto h-auto font-medium lg:block md:hidden sm:hidden">
                <a @click="toggleLogin"
                    class="hover:cursor-pointer font-bold hover:text-sky-500 transition duration-150">Login</a>
            </div>
            <span class="material-symbols-outlined lg:hidden md:block sm:block hover:cursor-pointer"
                @click="toggleVisibility">
                Menu
            </span>
        </div>
        <div
            :class="{ 'opacity-0': !clicked, 'lg:opacity-0 opacity-100 md:flex sm:flex flex-col w-full bg-slate-900 transition  duration-500 ease-in-out': clicked }">
            <div class="w-[80%] mx-auto p-6">
                <a @click="handleMenuClick('#services')"
                    :class="{ 'hidden': !clicked, 'hover:cursor-pointer hover:text-sky-500 font-bold block transition duration-500 ease-in-out': clicked }">Services</a>
            </div>
            <div class="w-[80%] mx-auto p-6">
                <a @click="handleMenuClick('#contact-us')"
                    :class="{ 'hidden': !clicked, 'hover:cursor-pointer hover:text-sky-200 font-bold block transition duration-500 ease-in-out': clicked }">Get
                    a Quote</a>
            </div>
            <div class="w-[80%] mx-auto p-6">
                <a @click="toggleLogin"
                    :class="{ 'hidden': !clicked, 'hover:cursor-pointer hover:text-sky-200 font-bold block transition duration-500 ease-in-out': clicked }">Login</a>
            </div>
        </div>
    
    </nav>
    <Login :customClass="{'hidden': !login, 'fixed p-12 lg:w-[30%] md:w-[50%] sm:w-[70%] lg:left-[35%] sm:left-[15%] md:left-[25%] top-[30%] grid rounded-lg border-0 border-solid shadow-lg z-[1] bg-white text-black': login}"/>

</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import VueScrollTo from 'vue-scrollto';
import Login from "./Login.vue"

export default {
    name: 'NavBar',
    components: {
        Login
    },
    methods: {
        handleMenuClick(target) {
            this.scrollToSection(target)
            this.clicked = false
        },
        
    },
    setup() {
        const scrolled = ref(false);
        const login = ref(false)
        const clicked = ref(false);

        const toggleVisibility = () => {
            clicked.value = !clicked.value;
        };

        const toggleLogin = () => {
            login.value = !login.value
        }

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            scrolled.value = scrollPosition > 100;
        };

        const scrollToSection = (target) => {
            VueScrollTo.scrollTo(target, 800, {
                easing: 'ease-in-out',
                offset: -80,
            });
        };


        onMounted(() => {
            window.addEventListener('scroll', handleScroll);
        });

        onBeforeUnmount(() => {
            window.removeEventListener('scroll', handleScroll);
        });

        return {
            scrolled,
            scrollToSection,
            clicked,
            toggleVisibility,
            toggleLogin,
            login
        };
    },
};
</script>
