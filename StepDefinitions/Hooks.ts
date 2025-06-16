import {BeforeScenario} from "../helpers/Fixtures";
import {Cookies} from "../helpers/Cookies"

BeforeScenario(async ({baseMethods, context})=>{
    await context.addCookies([
        Cookies.COOKIES_POLICY,
        Cookies.COOKIES_PREFERENCE_SET
    ])
    await baseMethods.goToBaseUrl();
})