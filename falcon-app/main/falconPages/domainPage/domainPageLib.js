/**
 * Created by ParulShukla on 1/26/16.
 */
'use strict';
require('//falcon-app/main/falconPages/dashboardPage/dashboardLib.js');

var DomainPage = function(){
    this.getPagelabel = function() {
        element(by.cssSelector(".flipper .back .text-center"));

    }

   this.getDropDown = function(){
        $$('.form-group.list-group-item.input-icon.input-icon-right');
    }

    this.getDomainTextBox = function(domainText) {
            element(by.model('selectedDomain')).sendKeys(domainText);

    }


    this.AddaDomain = function() {
        this.getDomainTextBox('appdynamics.com');
        var domainPicker = element.all(by.css('.form-group.list-group-item.input-icon.input-icon-right .dropdown-menu.ng-isolate-scope')).first();
        domainPicker.click();
        return require('//falcon-app/main/falconPages/dashboardPage/dashboardLib.js');

            }
    };
module.exports = new DomainPage();

