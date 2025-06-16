import {BeforeScenario} from "../helpers/fixtures";
import {COOKIES} from "../helpers/cookies"

BeforeScenario(async ({baseMethods, context})=>{
    await context.addCookies([
        COOKIES.COOKIES_POLICY,
        COOKIES.COOKIES_PREFERENCE_SET
    ])
    await baseMethods.goToBaseUrl();
})