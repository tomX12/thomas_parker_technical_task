import { test as base, createBdd } from 'playwright-bdd';
import { BaseMethods } from '../POM/BaseMethods'
import {RegularOrIrregularHoursPage} from "../POM/RegularOrIrregularHoursPage";
import { HolidayEntitlementBasisPage } from "../POM/HolidayEntitlementBasisPage";
import { DoYouWantToWorkOutHolidayPage} from "../POM/DoYouWantToWorkOutHolidayPage";
import { NumDaysWorkedPerWeekPage } from "../POM/NumDaysWorkedPerWeekPage"
import { InfoBasedOnAnswersPage } from "../POM/InfoBasedOnAnswersPage"
import { WhenDoesLeaveYearStartPage } from "../POM/WhenDoesLeaveYearStartPage";

type CustomFixtures = {
    baseMethods: BaseMethods;
    regularOrIrregularHoursPage: RegularOrIrregularHoursPage;
    holidayEntitlementBasisPage: HolidayEntitlementBasisPage;
    doYouWantToWorkOutHolidayPage: DoYouWantToWorkOutHolidayPage;
    numDaysWorkedPerWeekPage: NumDaysWorkedPerWeekPage;
    infoBasedOnAnswersPage: InfoBasedOnAnswersPage;
    whenDoesLeaveYearStartPage: WhenDoesLeaveYearStartPage;
};

export const test = base.extend<CustomFixtures>({
    baseMethods: async ({page}, use) =>{
        const baseMethods = new BaseMethods(page);
        await use(baseMethods);
    },
    regularOrIrregularHoursPage: async ({page},use) =>{
        const regularOrIrregularHours = new RegularOrIrregularHoursPage();
        await use(regularOrIrregularHours);
    },
    holidayEntitlementBasisPage: async({page}, use) =>{
        const holidayEntitlementBasis = new HolidayEntitlementBasisPage(page)
        await use(holidayEntitlementBasis)
    },
    doYouWantToWorkOutHolidayPage: async({page}, use) =>{
        const doYouWantToWorkOutHolidayPage = new DoYouWantToWorkOutHolidayPage(page);
        await use(doYouWantToWorkOutHolidayPage);
    },
    numDaysWorkedPerWeekPage: async({page}, use) =>{
        const numDaysWorkedPerWeek = new NumDaysWorkedPerWeekPage(page)
        await use(numDaysWorkedPerWeek);
    },
    infoBasedOnAnswersPage: async({page}, use) =>{
        const infoBasedOnAnswersPage = new InfoBasedOnAnswersPage(page)
        await use(infoBasedOnAnswersPage)
    },
    whenDoesLeaveYearStartPage: async({page},use) => {
        const whenDoesLeaveYearStartPage = new WhenDoesLeaveYearStartPage(page)
        await use(whenDoesLeaveYearStartPage)
    }
})

export const { Given, When, Then } = createBdd(test);