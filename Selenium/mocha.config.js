  module.exports = {
    reporter: './node_modules/wdio-cucumberjs-json-reporter',
    reporterOptions: {
      outputDir: './reports/json',
      filename: 'test-report.json'
    },
    capabilities: [{
        maxInstances: 1,
        browserName: 'firefox',
        acceptInsecureCerts: true
    }],
    services: ['firefox'],
    baseUrl: 'https://magento.softwaretestingboard.com/'
};