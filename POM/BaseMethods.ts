import type {Locator, Page } from '@playwright/test';
import { expect } from '@playwright/test';

export class BaseMethods{
    readonly inputBox: Locator;

    constructor(public readonly page: Page){
        this.inputBox = page.locator('//input[@id="response"]')
    }

    async goToBaseUrl(){
        await this.page.goto('/')
    }

    async clickBtn(btnTitle: string){
        await this.page.getByRole("button", {name: btnTitle})
            .click();
    }

    async selectRadioBtn(radioBtnTitle: string){
        await this.page.getByRole("radio", {name: radioBtnTitle})
            .click();
    }

    async typeIntoInput(inputValue: string){
        await this.inputBox.fill(inputValue);
        expect(this.inputBox.textContent()).toBe(inputValue);
    }
}