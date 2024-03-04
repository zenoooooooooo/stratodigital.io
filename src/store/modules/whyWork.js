const whyWork = {
  state: {
    cards: [
      {
        title: "Focus on Business Objectives",
        description:
          "Business objectives play an important factor in campaign strategy and our team focuses on these to come up with an effective and efficient strategy for every project.",
      },
      {
        title: "Ad Campaign Optimization",
        description:
          "In Performance Marketing, ad campaign optimization is a key tool used to achieve the best results.We optimize our campaigns based on the analysis of performance, data, placement, and targeting tomake the most out of our campaigns.",
      },
    ],
  },
  getters: {
    getCards: (state) => state.cards
  },
  actions: {},
  mutations: {},
};

export default whyWork;
