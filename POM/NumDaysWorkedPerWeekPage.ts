import {BaseMethods} from "./BaseMethods";
import assert = require("node:assert");

export class NumDaysWorkedPerWeekPage extends BaseMethods {
    public PageText = {
        PageHeading: 'Number of days worked per week?'
    }

    async InputDaysWorked(daysWorked: string){
        await this.assertPageHeadingText(this.PageText.PageHeading);
        await this.typeIntoInput("5");
    }
}