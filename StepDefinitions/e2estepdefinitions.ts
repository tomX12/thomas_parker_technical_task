import {Given, When, Then} from '../helpers/fixtures'

Given('the leave year starts on the {string}', async({baseMethods, whenDoesLeaveYearStartPage}, yearStartDate:string)=>{
    await baseMethods.assertPageHeadingText(whenDoesLeaveYearStartPage.PageText.PageHeading);
    await baseMethods.inputDate(yearStartDate);
    await baseMethods.clickContinue();
})

When('the employment start date was the {string}', async({baseMethods, whenDoesLeaveYearStartPage}, employmentStartDate:string)=>{
    await baseMethods.assertPageHeadingText("What was the employment start date?");
    await baseMethods.inputDate(employmentStartDate);
    await baseMethods.clickContinue();
})

When('the employment end date was the {string}', async({baseMethods}, employmentEndDate:string)=>{
    await baseMethods.assertPageHeadingText("What was the employment end date?");
    await baseMethods.inputDate(employmentEndDate);
    await baseMethods.clickContinue();
})

When('they worked {string} hour shifts', async({baseMethods}, hoursPerShift:string)=>{
    await baseMethods.assertPageHeadingText("How many hours in each shift?");
    await baseMethods.typeIntoInput(hoursPerShift)
    await baseMethods.clickContinue();
})

When('{string} shifts are worked per shift pattern', async({baseMethods}, shiftsPerShiftPattern:string)=>{
    await baseMethods.assertPageHeadingText("How many shifts will be worked per shift pattern?");
    await baseMethods.typeIntoInput(shiftsPerShiftPattern)
    await baseMethods.clickContinue();
})

When('{string} days in the shift pattern', async({baseMethods}, daysInShiftPattern:string)=>{
    await baseMethods.assertPageHeadingText("How many days in the shift pattern?");
    await baseMethods.typeIntoInput(daysInShiftPattern)
    await baseMethods.clickContinue();
})



