const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.yavlena.com/en/',
    setupNodeEvents(on, config) {
      on('task', {
        log(message) {
          console.log(message);
          return null;
        },
        failTest(message) {
          throw new Error(message);
        }
        
      })
    },
  },
});
