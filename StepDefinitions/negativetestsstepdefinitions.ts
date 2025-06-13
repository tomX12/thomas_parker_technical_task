import {Given, When, Then} from '../helpers/fixtures'
import { PATHS } from '../helpers/paths'

Given('the user is on the {string} page', async({baseMethods, baseURL}, pageHeading: string)=>{
    const path = PATHS[pageHeading]
    await baseMethods.goToPageViaUrl(baseURL, path)
    await baseMethods.assertPageHeadingText(pageHeading);
})

When('the user clicks continue', async({baseMethods})=>{
    await baseMethods.clickContinue()
})

Then('the error message {string} is visible', async({baseMethods}, error: string
)=>{
  await baseMethods.assertErrorMessageVisible(error)
})