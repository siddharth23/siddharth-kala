import { Given } from '@wdio/cucumber-framework';
import OnboardingPage from '../pageobjects/onboarding.page';
import LandingPage from "../pageobjects/landing.page.ts";
import TextHelper from "../common-utils/TextHelper.ts";
Given (/^User is on landing page$/, async function()  {
    if(!(await $(OnboardingPage.closeIcon).isExisting()) && await $(OnboardingPage.getContinueButton).isExisting()){
        await $(OnboardingPage.getContinueButton).click()
        await $(OnboardingPage.getContinueButton).click()
        await $(OnboardingPage.getContinueButton).click()
        await $(OnboardingPage.allowPermission).click()
        await $(OnboardingPage.getContinueButton).click()
    }
    if (await $(OnboardingPage.closeIcon).isExisting()){
        await $(OnboardingPage.closeIcon).click()
    }
    this.initialBalanceOnLandingPage= TextHelper.getDigitsFromText(await $(LandingPage.balanceButton).getText())
});



