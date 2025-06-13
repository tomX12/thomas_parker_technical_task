import {BaseMethods} from "./BaseMethods";

export class HolidayEntitlementBasisPage extends BaseMethods{
    public pageText = {
        PageHeading: "Is the holiday entitlement based on:",
        DaysPerWeek: "days worked per week",
        HoursPerWeek: "hours worked per week",
        AnnualHours: "annualised hours",
        CompressedHours: "compressed hours",
        Shifts: "shifts"
    } as const

    async SelectEntitlementBasis(option: string){
        await this.assertPageHeadingText(this.pageText.PageHeading);
        await this.selectRadioBtn(option);
    }
}