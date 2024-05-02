const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hpenxf',
  e2e: {
    setupNodeEvents(on, config) {
      
    },
    //mantem o dominio global, para os testes
    "experimentalRunAllSpecs":true,
    "baseUrl":"http://lojaebac.ebaconline.art.br/"
  },
});
