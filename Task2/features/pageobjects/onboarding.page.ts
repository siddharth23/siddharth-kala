import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OnboardingPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get getContinueButton () {
        return (driver.capabilities['platformName']!=="iOS")?"#buttonContinue":"tobeputlater";
    }
    public get allowPermission () {
        return  (driver.capabilities['platformName']!=="iOS")?'//*[@resource-id="com.android.permissioncontroller:id/permission_allow_button"]':"tobeputlater";
    }
    public get closeIcon(){
        return (driver.capabilities['platformName']!=="iOS")?"#buttonClose":"tobeputlater";
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

    /**
     * overwrite specific options to adapt it to page object
     */
 
}

export default new OnboardingPage();
