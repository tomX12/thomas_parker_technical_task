import type {Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BaseMethods{

    readonly inputBox: Locator;
    readonly pageHeading: Locator;
    readonly continueBtn: Locator;
    readonly dayInputBox: Locator;
    readonly monthInputBox: Locator;
    readonly yearInputBox: Locator;
    readonly errorMsg: Locator;
    readonly link: string;
    readonly answer: Locator;

    constructor(public readonly page: Page){
        this.inputBox = page.locator('//input[@id="response"]')
        this.pageHeading = page.locator('h1')
        this.continueBtn = page.getByRole('button', { name: 'continue' })
        this.dayInputBox = page.locator('//input[@id="response-0"]')
        this.monthInputBox = page.locator('//input[@id="response-1"]')
        this.yearInputBox = page.locator('//input[@id="response-2"]')
        this.errorMsg = page.locator("//div[@id='error-summary']//a")
        this.link = "//a[contains(text(), '{var}')]"
        this.answer = page.locator("//dd[@class='govuk-summary-list__value']")
    }

    dynamicWebElement(locator: string, testToReplaceVar: string): Locator{
        const newLocator = locator.replace('{var}', testToReplaceVar);
        return this.page.locator(newLocator);
    }

    async goToBaseUrl(){
        await this.page.goto('')
    }

    async goToPageViaUrl(baseUrl: string, path: string){
        const url = `${baseUrl}${path}`;
        await this.page.goto(url);
    }

    async clickBtn(btnTitle: string){
        await this.page.getByRole("button", {name: btnTitle})
            .click();
    }

    async clickContinue(){
        await this.continueBtn.click();
    }

    async clickLink(linkText: string){
        const linkLocator: Locator = this.dynamicWebElement(this.link, linkText)
        await linkLocator.click();
    }

    async selectRadioBtn(radioBtnTitle: string){
        await this.page.getByRole("radio", {name: radioBtnTitle})
            .click();
    }

    async typeIntoInput(inputValue: string){
        await this.inputBox.fill(inputValue);
        await expect(this.inputBox).toHaveValue(inputValue);
    }

    async assertPageHeadingText(headingText: string){
        await expect(this.pageHeading).toHaveText(headingText);
    }

    async assertPageHeadingContainsText(headingText: string){
        await expect(this.pageHeading).toContainText(headingText);
    }

    async assertTextContains(locator: Locator, expectedText: string){
        await expect(locator).toContainText(expectedText);
    }

    async inputDate(date: string){

        //split date string by / to get individual strings
        const [day, month, year] = date.split('/');

        await this.dayInputBox.fill(day);
        await expect(this.dayInputBox).toHaveValue(day);
        await this.monthInputBox.fill(month);
        await expect(this.monthInputBox).toHaveValue(month);
        await this.yearInputBox.fill(year);
        await expect(this.yearInputBox).toHaveValue(year);
    }

    async assertErrorMessageVisible(error: string) {
        await expect(this.errorMsg).toHaveText(error);
    }
}