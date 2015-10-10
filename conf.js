/**
 * @see https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 *
 * For Chrome extension testing
 * @see  http://stackoverflow.com/questions/27278222/is-it-possible-to-add-a-plugin-to-chromedriver-under-a-protractor-test/27278322#27278322
 */
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/test.js'],
    allScriptsTimeout: 11000,
    getPageTimeout: 10000,
    baseUrl: 'http://localhost:3474',
    params: {},
    restartBrowserBetweenTests: false,
    capabilities: {
        browserName: 'chrome',
    //'chromeOptions': {
    //    'extensions': ['base64 encoded extension']
    },
    //multiCapabilities: [{
    //  browserName: 'firefox'
    //}, {
    //  browserName: 'chrome'
    //}],
    beforeLaunch: function () {
        // global variable 'protractor' object will NOT be set up,
        // and globals from the test framework will NOT be available. The main
        // purpose of this function should be to bring up test dependencies.
    },
    onPrepare: function () {
        // Maximize the browser size.  Reduces scrolling for UI grid.
        browser.driver.manage().window().maximize();
        //TODO: Make this optional?
        // slow down the tests (so we can see what is happening)
        // @see http://stackoverflow.com/questions/24960290/can-protractor-be-made-to-run-slowly
        //var origFn = browser.driver.controlFlow().execute;
        //browser.driver.controlFlow().execute = function () {
        //    var args = arguments;
        //
        //    // queue 100ms wait
        //    origFn.call(browser.driver.controlFlow(), function () {
        //        return protractor.promise.delayed(500);
        //    });
        //
        //    return origFn.apply(browser.driver.controlFlow(), args);
        //};
    }
};
