import {Before} from "@wdio/cucumber-framework";

Before(async function () {
    this.initialBalanceOnLandingPage=0;
});