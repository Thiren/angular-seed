exports.config = {
    allScriptsTimeout: 11000,

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [
        './tests/e2e/**/*.js'
    ],

    multiCapabilities: [{
        browserName: 'firefox'
    }, {
        browserName: 'chrome'
    }],

    baseUrl: 'http://localhost:9000',

    framework: 'mocha',

    mochaOpts: {
        reporter: 'spec',
        timeout: 4000
    }
};