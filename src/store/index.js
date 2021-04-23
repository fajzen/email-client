import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const TESTING_EMAILS = {
  inbox: [
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "First email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060171,
    },
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "Second email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060172,
    },
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "Third email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060173,
    },
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "Fourth email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060181,
    },
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "Fifth email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060182,
    },
    {
      from: "tina.mustermann@web.de",
      to: "markus.mustermann@web.de",
      subject: "Sixth email",
      avatar:
        "https://image.shutterstock.com/image-vector/profile-placeholder-image-gray-silhouette-600w-1153673752.jpg",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060183,
    },
  ],
  sent: [
    {
      from: "markus.mustermann@web.de",
      to: "tina.mustermann@web.de",
      subject: "Lorem ipsum",
      avatar: "path/to/image.ending",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060174,
    },
    {
      from: "markus.mustermann@web.de",
      to: "tina.mustermann@web.de",
      subject: "Lorem ipsum",
      avatar: "path/to/image.ending",
      body:
        'Lorem ipsum dolor sit amet, <img src="https://via.placeholder.com/468x60?text=Visit+web.de+Now" /> consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      hasAttachement: true,
      timestamp: 1582899060175,
    },
  ],
  trash: [],
};

export default new Vuex.Store({
  state: {
    activeCategory: "inbox",
    activeEmail: null,
    emails: {},
    isDarkMode: false,
  },
  getters: {
    categoryEmails: (state) => state.emails[state.activeCategory],
  },
  mutations: {
    setEmails(state, payload) {
      state.emails = payload.emails;
    },
    setActiveCategory(state, payload) {
      if (state.activeCategory !== payload.categoryId) {
        state.activeCategory = payload.categoryId;
        state.activeEmail = null;
      }
    },
    setActiveEmail(state, payload) {
      state.activeEmail = payload.email;
    },
    deleteEmail(state, { email }) {
      state.emails.inbox = state.emails.inbox.filter(
        (inboxEmail) => email !== inboxEmail
      );
      state.emails.sent = state.emails.sent.filter(
        (sentEmail) => email !== sentEmail
      );
      state.emails.trash.push(email);
      state.activeEmail = null;
    },
    switchDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
  actions: {
    loadEmails({ commit }) {
      commit("setEmails", { emails: TESTING_EMAILS });
    },
  },
  modules: {},
});
