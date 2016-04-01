/**
 * Created by ParulShukla on 1/22/16.
 */
/**
 * Base page for all the pages on App.
 *
 * @author parul@captora.com(Parul Shukla)
 */
'use strict';

var Loginpage = require('./loginPage/loginPageLib.js');
var DomainPage = require('./domainPage/domainPageLib.js');
var DashboardPage = require('./dashboardPage/dashboardLib.js');

describe('Captora QA server login page ', function () {

    it('Login Screen shown to the user', function () {
        browser.get('http://qa1.captora.com');
        DomainPage = Loginpage.withCredentials('parul@captora.com', 'Footprints1234!');
    });

    it('Domain Selector screen shown to the user', function () {

        DashboardPage = DomainPage.AddaDomain();
        var Dashboard_Page_Label = DashboardPage.pageTitle();
        expect(Dashboard_Page_Label).toBe('Dashboard');
        Dashboard_Page_Label.then(function (text) {
            console.log('Value verified as :', text);
            element.all(by.css('.slim-scroll .nav-primary.bg-dark.hidden-xs .nav.nav-main')).each(function (element, index) {
                // Will print 0 First, 1 Second, 2 Third.
                element.getText().then(function (text) {
                    console.log('VALUES ARE',index, text);
                });

            });

        });


    });

    it('Function to Navigate to different pages on App',function(){


    })
});

  /*  var NODE = NavTypeEnum({
        DASHBOARD : {
            value : 1,
            string : 'Dashboard'
        },
        DEMANDMANAGER : {
            value : 2,
            string : 'DemandManager'
        },
        CONTENT : {
            value : 3,
            string : 'Content'
        },
        PAID : {
            value : 4,
            string : 'Paid'
        },
        ORGANIC : {
            value : 5,
            string : 'Organic'
        },
        IDEAS : {
            value : 6,
            string : 'Ideas'
        },
        ANALYTICS : {
            value : 7,
            string : 'Analytics'
        },
        SETTINGS : {
            value : 8,
            string : 'Settings'
        },
        SUPPORT : {
            value : 9,
            string : 'Support'
        }

    });

    var SUBNODE = NavSubTypeEnum({
        ADDNEW : {
            value : 1,
            string : 'Add New'
        },
        YOURASSET : {
            value : 2,
            string : 'Your Assets'
        },
        ALLCAMPAIGNS : {
            value : 1,
            string : 'Add New'
        },
        NEEDATTENTION_PAID : {
            value : 2,
            string : 'Add New'
        },
        NEEDATTENTION_ORGANIC : {
            value : 3,
            string : 'Add New'
        },
        SEGMENTMANAGER : {
            value : 4,
            string : 'Add New'
        },
        PAIDTEMPLATES : {
            value : 4,
            string : 'Add New'
        },
        PROMOTEDCAMPAIGNS : {
            value : 2,
            string : 'Add New'
        },
        ORGANICTEMPLATES : {
            value : 5,
            string : 'Add New'
        },
        CREATENEW : {
            value : 1,
            string : 'Add New'
        },
        YOURIDEAS : {
            value : 2,
            string : 'Add New'
        },
        NONE : {
            value : 0,
            string : 'Add New'
        },


    })*/





