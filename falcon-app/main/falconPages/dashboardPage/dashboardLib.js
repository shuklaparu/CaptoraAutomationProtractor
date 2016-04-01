/**
 * Created by ParulShukla on 1/25/16.
 */
'use strict';
var DashboardPage = function() {
    this.pageTitle = function(){
        return element (by.css('.m-b-xs.text-black')).getText();
    }

};
module.exports = new DashboardPage();
