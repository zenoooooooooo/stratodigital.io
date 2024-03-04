import { createStore } from "vuex";
import launching from "./modules/launching.js";
import whoWe from "./modules/whoWe.js";
import whyWork from "./modules/whyWork.js";
import breakBarrier from "./modules/breakBarrier.js"
import exchangeRate from "./modules/exchangeRate.js"

const store = createStore({
  modules: {
    a: launching,
    b: whoWe,
    c: whyWork,
    d: breakBarrier,
    e: exchangeRate
  },
});

export default store;
