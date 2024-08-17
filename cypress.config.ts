import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--start-fullscreen')
      
          return launchOptions
        }
      })
    },
    specPattern: ['cypress/symphony/**/*.{spec.ts,tsx}'],
    scrollBehavior: false,
    viewportWidth: 1280,
    viewportHeight: 720,
  },
  env: {
    envName: 'prod',
    filePath: 'cypress/results/job_positions.txt',
    authToken: ''
  },
  chromeWebSecurity: false,
});
