/*const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  defaultCommandTimeout: 5000,
  pageLoadTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});*/
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  ...(on, config) => {
    on("file:preprocessor", cucumber());

    config.video = false;
    config.defaultCommandTimeout = 5000;
    config.pageLoadTimeout = 10000;
    config.supportFile = "cypress/support/US1-TS1.1-Navigation-HP-SU.steps.js";
    config.testingType = "e2e";
    
    return config;
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com", // Set the base URL here
  },
}

