const { defineStep } = require("@wdio/cucumber-framework");
const RegisterPage = require("../pageobjects/RegisterPage");
const AccountPage = require("../pageobjects/AccountPage");

defineStep(/^I am on the registration page$/, async () => {
    await RegisterPage.open();
});

defineStep(
    /^I enter a valid email address, password, and my personal details$/,
    async () => {
        await RegisterPage.fillRegisterForm(
            "John",
            "Doe",
            "jd3@email.com",
            "Password123!"
        );
    }
);

defineStep(/^I click on the Create An Account button$/, async () => {
    await RegisterPage.clickCreateAnAccountButton();
});

defineStep(/^I should be redirected to My Account page$/, async () => {
    await expect(browser).toHaveUrl(
        expect.stringContaining("customer/account")
    );
    await AccountPage.assertContactInformation("jd3@email.com");
});
