/**
 * Created by ParulShukla on 1/25/16.
 */

require('//falcon-app/main/falconPages/domainPage/domainPageLib.js');

var LoginPage = function () {
         this.withCredentials = function (login, password) {
            element(by.model('credentials.userName')).sendKeys(login);
            element(by.model('credentials.password')).sendKeys(password);
            element(by.css('button[type=submit]')).click();
            return require('//falcon-app/main/falconPages/domainPage/domainPageLib.js');
    };

};
module.exports = new LoginPage();

