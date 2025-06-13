import { test } from '../helpers/fixtures';
import { createBdd } from 'playwright-bdd';

//have to pass custom fixture into function
const { Given, When, Then } = createBdd(test);

Given('the employee starts a new calculation', async({page, baseMethods}) => {
    await baseMethods.goToBaseUrl();
});