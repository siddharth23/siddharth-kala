import { When, Then } from '@wdio/cucumber-framework';

import LandingPage from '../pageobjects/landing.page';
import RecordInputPage from '../pageobjects/recordInput.page';
import * as assert from "node:assert";
import TextHelper from "../common-utils/TextHelper.ts";

When(/^User clicks (.*)$/, async (type:string) => {
    let buttonText=""
    switch (type){
        case "income button":
            buttonText=await $(LandingPage.getIncomeButton).getText()
            assert.equal(buttonText,"INCOME","The income button text is not INCOME in landing page")
            await $(LandingPage.getIncomeButton).click()
            break;
        case "expense button":
            buttonText=await $(LandingPage.getExpenseButton).getText()
            assert.equal(buttonText,"EXPENSE","The expense button text is not EXPENSE in landing page")
            await $(LandingPage.getExpenseButton).click()
            break;
        case "balance button":
            await $(LandingPage.balanceButton).click()
            await driver.back();
            break;    
            
    }
});

When(/^User adds an (.*) of (.*)$/, async (type:string,amount:string) => {
     for (const digit of amount) {
            await $(RecordInputPage.digitButton(digit)).click();
            }
     console.log("Added "+type+" of amount- "+amount)
});

When(/^User choose a category of (.*)$/, async (category:string) => {
    await $(RecordInputPage.choosCategoryButton()).click();
    await $(RecordInputPage.selectCategory(category)).click()
});

Then(/^User should view the balance is (.*) with (.*)$/, async function (addorsubstract:string,amountIncremented:string) {
    const amountInLandingPage:number= TextHelper.getDigitsFromText(await $(LandingPage.balanceButton).getText())
    let expectedValue:number=0
    if(addorsubstract==="added")
        { // @ts-ignore
            expectedValue=Number(this.initialBalanceOnLandingPage)+Number(amountIncremented)
        }
    else if(addorsubstract==="reduced")
        { // @ts-ignore
            expectedValue=Number(this.initialBalanceOnLandingPage)-Number(amountIncremented)
        }
    assert.equal(expectedValue,amountInLandingPage,"Expected: "+expectedValue+" Actual: "+amountInLandingPage)
});
