import axios from "axios";

const exchangeRate = {
  state: {
    exchange: [],
  },
  mutations: {
    setExchangeData(state, data) {
      state.exchange = data;
    },
  },
  actions: {
    async fetchExchangeData({ commit }) {
        const options = {
          method: 'GET',
          url: 'https://currency-conversion-and-exchange-rates.p.rapidapi.com/convert',
          params: {
            from: 'USD',
            to: 'PHP',
            amount: '1',
          },
          headers: {
            'X-RapidAPI-Key': 'd05115adc9mshcb9adf4ed3a794ep132a37jsnd1b9a3a87b09',
            'X-RapidAPI-Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com',
          },
        };
    
        try {
          const response = await axios.request(options);
          commit('setExchangeData', response.data);
          console.log(response.data)
        } catch (error) {
          console.error("Error: " + error)
        }
      },
  },
  getters: {
    getExchangeData: (state) => state.exchange,
  },
};

export default exchangeRate;
