var gridTestUtils = require('../../gridTestUtils.js');

describe('test some base expectations', function () {

    var submitButton, hometown, age, name, error, results;

    /**
     * @see https://angular.github.io/protractor/#/locators
     */
    function setupLocators() {
        // create a locator using CSS
        // create a locator using a given ID
        // create a locator using a given model
        // create a locator using a model bind

        submitButton = element(by.css('input[type=button]'));
        age = element(by.css('.test'));
        error = element(by.id('error'));
        name = element(by.model('name'));
        hometown = element(by.id('hometown'));
        results = element(by.id('results'));

    }

    it('should have a title', function () {
        browser.get('http://localhost:3474/form.html');

        expect(browser.getTitle()).toEqual('FORM PAGE 2');
    });

    it('should display an error if you enter an age greater than 100 or less than 0', function(){
        setupLocators();

        age.sendKeys(1000).then(function(){
            expect(error.getText()).toEqual(browser.params.test2.invalid);
        });



    });

    it('should show an error message if all fields are not defined and the user has clicked submit', function(){

        age.clear();
        submitButton.click();

        expect(error.getText()).toEqual('all fields required 2');
        //browser.pause();

    });

    it ('should return concatenated value', function(){

        name.sendKeys(browser.params.test2.name);
        age.sendKeys(browser.params.test2.age);
        hometown.sendKeys(browser.params.test2.hometown);

        submitButton.click();

        expect(results.getText()).toEqual(
          [browser.params.test2.name, browser.params.test2.age, browser.params.test2.hometown].join(' ')
        );

    });

});
