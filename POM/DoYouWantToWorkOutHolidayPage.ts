import {BaseMethods} from "./BaseMethods";

export class DoYouWantToWorkOutHolidayPage extends BaseMethods{
    public PageText = {
        PageHeading: "Do you want to work out holiday:"
    }

    async selectWhatHolidayIsFor(option: string){
        await this.assertPageHeadingText(this.PageText.PageHeading);
        await this.selectRadioBtn(option);
    }
}