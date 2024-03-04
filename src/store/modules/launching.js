const launching = {
  state: {
    sections: [
      {
        image: "src/images/gif/rocket.gif",
        title: "Performance Marketing",
        description:
          "Propel your business forward with having us create and manage your digital ads on different platforms like Facebook &amp; Google.",
      },
      {
        image: "src/images/gif/webdesign.gif",
        title: "Content Marketing",
        description:
          "Let’s activate your brand’s social media presence with our content and campaign creation across different SNS.",
      },
      {
        image: "src/images/gif/promote.gif",
        title: "Influencer Marketing",
        description:
          "With Strato’s assistance, connect with a wider reach of audience by tapping influencers to promote your brand.",
      },
      {
        image: "src/images/gif/checklist.gif",
        title: "Analytics, Strategy & Implementation",
        description:
          "A little confused on where to start? We can implement tracking on existing efforts, create reports, plan strategies, and implement these for you. ",
      },
      {
        image: "src/images/gif/search.gif",
        title: "SEO/SEM",
        description:
          "Drive your business to the top of the Google search results and get numerous clicks a day easily by investing in this service.",
      },
      {
        image: "src/images/gif/html.gif",
        title: "Website Development",
        description:
          "It’s time to move forward in the digital world. Having your own website would attract more customers, increase brand awareness, develop brand loyalty, and strengthen sales. ",
      },
      

    ],
  },
  getters: {
    getSections: (state) => state.sections,
  },
  actions: {},
  mutations: {},
};

export default launching;
