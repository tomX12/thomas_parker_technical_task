import {BaseMethods} from "./BaseMethods";

export class HolidayEntitlementBasisPage extends BaseMethods{
    public pageText = {
        PageHeading: "Is the holiday entitlement based on:"
    } as const

    async SelectEntitlementBasis(option: string){
        await this.assertPageHeadingText(this.pageText.PageHeading);
        await this.selectRadioBtn(option);
    }
}