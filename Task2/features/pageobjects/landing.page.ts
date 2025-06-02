import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LandingPage extends Page {
    /**
     * define selectors using getter methods
     */
   public get getIncomeButton() {
        return (driver.capabilities['platformName']!=="iOS")?"#income_button_title":"tobeputlater";
    }
    public get getExpenseButton() {
        return (driver.capabilities['platformName']!=="iOS")?"#expense_button_title":"tobeputlater";
    }
    public get balanceButton() {
        return (driver.capabilities['platformName']!=="iOS")?"#balance_amount":"tobeputlater";
    }
}

export default new LandingPage();
