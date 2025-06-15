import {Given, When, Then} from '../helpers/fixtures'

When('the user clicks continue', async({baseMethods})=>{
    await baseMethods.clickContinue()
})

Then('the error message {string} is visible', async({baseMethods}, error: string
)=>{
  await baseMethods.assertErrorMessageVisible(error)
})