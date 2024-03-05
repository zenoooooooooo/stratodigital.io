<template>

    <NavBar />
    <Landing />
    <ExchangeRate />
    <Launching />
    <BreakBarriers />
    <WhoWe />
    <WhyWork />
    <Form />
    <EmbedSocial />
    <Services />
</template>

<script>
import BreakBarriers from './BreakBarriers.vue';
import EmbedSocial from "./EmbedSocial.vue"
import Form from "./Form.vue"
import Services from "./Services.vue";
import WhoWe from './WhoWe.vue';
import WhyWork from "./WhyWork.vue";
import Launching from "./Launching.vue"
import Landing from "./Landing.vue"
import NavBar from "./NavBar.vue"
import ExchangeRate from "./ExchangeRate.vue"

export default {
    name: "Home",
    components: {
        EmbedSocial,
        Form,
        Services,
        WhyWork,
        WhoWe,
        BreakBarriers,
        Launching,
        Landing,
        NavBar,
        ExchangeRate
    }
}
</script>