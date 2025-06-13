import type {Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BaseMethods{
    readonly inputBox: Locator;
    readonly pageHeading: Locator;
    readonly continueBtn: Locator;

    constructor(public readonly page: Page){
        this.inputBox = page.locator('//input[@id="response"]')
        this.pageHeading = page.locator('h1')
        this.continueBtn = page.getByRole('button', { name: 'continue' })
    }

    async goToBaseUrl(){
        await this.page.goto('')
    }

    async clickBtn(btnTitle: string){
        await this.page.getByRole("button", {name: btnTitle})
            .click();
    }

    async clickContinue(){
        await this.continueBtn.click();
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
}