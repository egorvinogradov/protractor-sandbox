var gridTestUtils = require('./gridTestUtils.spec.js');

describe('basic grid tests', function () {

    it('should test', function () {

        browser.get('http://localhost:3474');

        //var button = element(by.id('button'));
        //button.click().then(function () {
        //});
        //gridTestUtils.clickColumnMenuSortAsc('grid', 0);

        gridTestUtils.clickColumnMenuSortDesc('grid', 0);
        expect(true).toBe(true);

        gridTestUtils.clickGridMenuItem('grid', 3);

        var myElement = gridTestUtils.dataCell('grid', 2, 2);
        console.log('my element: ', myElement);
    });

});
