/**
 * @see https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 *
 * For Chrome extension testing
 * @see  http://stackoverflow.com/questions/27278222/is-it-possible-to-add-a-plugin-to-chromedriver-under-a-protractor-test/27278322#27278322
 */
var params = require('./params.js').params;

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['e2e/**/*.spec.js'],
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    params: params,
    restartBrowserBetweenTests: false,
    capabilities: {
        browserName: 'chrome',
    },
    onPrepare: function () {
        // Maximize the browser size.  Reduces scrolling for UI grid.
        browser.driver.manage().window().maximize();
        console.log(browser.params);
        if (browser.params.port) {
            browser.get('http://localhost:' + browser.params.port);
        } else {
            browser.get('http://localhost:' + browser.params.host.divshot);
        }
    }
};
