import {Then } from '@wdio/cucumber-framework';
import ImageComparator from "../common-utils/ImageComparator.ts";
import * as assert from "node:assert";
Then(/^The sum total and view of records should be correct$/, async function () {
    await driver.pause(300)
    await driver.saveScreenshot("./screenshots/newscreenshot.png")
    const comparision=await ImageComparator.getImageCoordinates("./screenshots/newscreenshot.png","./screenshots/baseListView.png")
    assert.ok(comparision.score>0.9,"Score of image comparision was:" +comparision.score)
});
