import {Given, When, Then} from '../helpers/Fixtures'
import { PATHS } from '../helpers/Paths'

Given('the user is on the {string} page', async({baseMethods, baseURL}, pageHeading: string)=>{
    const path = PATHS[pageHeading]
    await baseMethods.goToPageViaUrl(baseURL, path)
    await baseMethods.assertPageHeadingText(pageHeading);
})

Given('the employee starts a new calculation', async({ baseMethods }) => {
    await baseMethods.clickBtn('Start now')
});

Given('the employee selects {string} for working irregular hours', async({baseMethods, regularOrIrregularHoursPage}, radioBtnOption: string)=>{
    await baseMethods.assertPageHeadingText(regularOrIrregularHoursPage.PageText.PageHeading );
    await baseMethods.selectRadioBtn(radioBtnOption);
    await baseMethods.clickContinue();
});

Given('their holiday entitlement is based on {string}', async({baseMethods, holidayEntitlementBasisPage}, entitlementBasisBtnOption: string) =>{
    await holidayEntitlementBasisPage.SelectEntitlementBasis(entitlementBasisBtnOption)
    await baseMethods.clickContinue();
})


Given('is {string}', async({baseMethods, doYouWantToWorkOutHolidayPage}, holidayOption: string) =>{
    await doYouWantToWorkOutHolidayPage.selectWhatHolidayIsFor(holidayOption);
    await baseMethods.clickContinue();
})

Given('they work {string} day per week', async({baseMethods, numDaysWorkedPerWeekPage}, daysWorked: string)=>{
    await numDaysWorkedPerWeekPage.InputDaysWorked(daysWorked);
    await baseMethods.clickContinue();
})

When('they submit their details for calculation', async({ baseMethods, infoBasedOnAnswersPage}) => {
    await baseMethods.assertPageHeadingContainsText(infoBasedOnAnswersPage.PageText.PageHeading);
})

Then('they are entitled to {string} of holiday', async({infoBasedOnAnswersPage}, numOfDaysHoliday: string)=>{
    await infoBasedOnAnswersPage.assertSummaryText(numOfDaysHoliday);
})