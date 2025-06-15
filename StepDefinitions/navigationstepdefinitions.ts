import {Then, When} from '../helpers/fixtures'

When("the user clicks the {string} link", async({baseMethods}, linkText: string) => {
    await baseMethods.startAgain();
})

Then("the user is returned to the homepage", async({baseMethods}) =>{
    await baseMethods.assertPageHeadingText("Calculate holiday entitlement")
})