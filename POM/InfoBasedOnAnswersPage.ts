import {BaseMethods} from "./BaseMethods";
import {Locator} from "@playwright/test";

export class InfoBasedOnAnswersPage extends BaseMethods{
    public PageText = {
        PageHeading: 'Information based on your answers'
    }

    private Locators = {
        SummaryText: this.page.locator("//div[@class='summary']/p")
    }

    async assertSummaryText(expectedText: string){
        await this.assertTextContains(this.Locators.SummaryText, expectedText)
    }
}