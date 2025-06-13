import { test as base } from '@playwright/test';
import { BaseMethods } from '../POM/BaseMethods'

type CustomFixtures = {
    baseMethods: BaseMethods;
};

export const test = base.extend<CustomFixtures>({
    baseMethods: async ({page}, use) =>{
        const baseMethods = new BaseMethods(page);
        await use(baseMethods);
    }
})