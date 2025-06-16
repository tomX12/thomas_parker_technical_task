import {Then, When, Given } from '../helpers/fixtures'

When("the user clicks the {string} link", async({baseMethods}, linkText: string) => {
    await baseMethods.clickLink(linkText);
})

Then("the user is returned to the homepage", async({baseMethods}) =>{
    await baseMethods.assertPageHeadingText("Calculate holiday entitlement")
})

Given("the user has answered a question", async({baseMethods, holidayEntitlementBasisPage})=>{
    await baseMethods.clickBtn("Start now");
    await baseMethods.assertPageHeadingText("Does the employee work irregular hours or for part of the year?");
    await baseMethods.selectRadioBtn("No");
    await baseMethods.clickContinue();
    await baseMethods.assertPageHeadingText(holidayEntitlementBasisPage.pageText.PageHeading)
} )

When("the user changes their answer for the answered question", async({baseMethods}) => {
    await baseMethods.assertTextContains(baseMethods.answer, "No")
    await baseMethods.clickLink("Change");
    await baseMethods.selectRadioBtn("Yes");
    await baseMethods.clickContinue();
})

Then("the answer should be updated", async({baseMethods}) => {
    await baseMethods.assertTextContains(baseMethods.answer, "Yes")
})