export default class Page {
    /**
     * Opens a sub page of the page
     * @param digitToType
     */
    public digitButton(digitToType:string) {
        return (driver.capabilities['platformName']!=="iOS")?"#buttonKeyboard"+digitToType:"tobeputlater";
    }
     public choosCategoryButton() {
        return (driver.capabilities['platformName']!=="iOS")?"#keyboard_action_button":"tobeputlater";
    }
    public selectCategory(category:string) {
        return (driver.capabilities['platformName']!=="iOS")?`//*[@text="${category}"]`:"tobeputlater";
    }
    
}
