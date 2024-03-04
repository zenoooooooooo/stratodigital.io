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
import BreakBarriers from './components/sections/BreakBarriers.vue';
import EmbedSocial from "./components/sections/EmbedSocial.vue"
import Form from "./components/sections/Form.vue"
import Services from "./components/sections/Services.vue";
import WhoWe from './components/sections/WhoWe.vue';
import WhyWork from "./components/sections/WhyWork.vue";
import Launching from "./components/sections/Launching.vue"
import Landing from "./components/sections/Landing.vue"
import NavBar from "./components/sections/NavBar.vue"
import ExchangeRate from "./components/sections/ExchangeRate.vue"

export default {
  name: "App",
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