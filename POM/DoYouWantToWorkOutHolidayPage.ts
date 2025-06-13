import {BaseMethods} from "./BaseMethods";

export class DoYouWantToWorkOutHolidayPage extends BaseMethods{
    public PageText = {
        PageHeadingRegular: "Do you want to work out holiday:",
        PageHeadingIrregularShift: "Do you want to calculate the holiday:"
    }

    async selectWhatHolidayIsFor(option: string){
        //heading changes if irregular shift worker selected
        const url = this.page.url();

        if(url.includes("irregular") && url.includes("shift-worker")){
            await this.assertPageHeadingText(this.PageText.PageHeadingIrregularShift);
        }
        else{
            await this.assertPageHeadingText(this.PageText.PageHeadingRegular);
        }

        await this.selectRadioBtn(option);
    }
}