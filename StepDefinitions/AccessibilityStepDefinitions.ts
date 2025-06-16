import {Given, Then} from '../helpers/Fixtures'

Given('the user hits the {string} key', async({baseMethods}, key: string) => {
    await baseMethods.pressKey(key);
})

Then('the skip to content header should be visible', async({baseMethods}) => {
    await baseMethods.elementIsVisible(baseMethods.skipToContentBanner)
})