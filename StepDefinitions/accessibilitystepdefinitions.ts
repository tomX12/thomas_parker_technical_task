import {Given, When, Then} from '../helpers/fixtures'

Given('the user hits the {string} key', async({baseMethods}, key: string) => {
    await baseMethods.pressKey("Tab");
})

Then('the skip to content header should be visible', async({baseMethods}) => {
    await baseMethods.elementIsVisible(baseMethods.skipToContentBanner)
})