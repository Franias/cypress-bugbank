import { defineConfig } from 'cypress';
import { allureCypress } from 'allure-cypress/reporter';

export default defineConfig({
  projectId: 'r8kwbx',
  e2e: {
    baseUrl: 'https://bugbank.netlify.app/',
    setupNodeEvents(on, config) {
      allureCypress(on);
      },
  },
});