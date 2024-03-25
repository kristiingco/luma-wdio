const { defineStep } = require("@wdio/cucumber-framework");
const RegisterPage = require("../pageobjects/RegisterPage");
const AccountPage = require("../pageobjects/AccountPage");
const LoginPage = require("../pageobjects/LoginPage");
const Navbar = require("../pageobjects/components/Navbar");
const HomePage = require("../pageobjects/HomePage");

defineStep(/^I am on the registration page$/, async () => {
    await RegisterPage.open();
});

defineStep(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

defineStep(
    /^I enter a valid email address, password, and my personal details$/,
    async () => {
        await RegisterPage.fillRegisterForm(
            "John",
            "Doe",
            "jd5@email.com",
            "Password123!"
        );
    }
);

defineStep(/^I enter my valid email and password$/, async () => {
    await LoginPage.fillLoginForm("jd3@email.com", "Password123!");
});

defineStep(/^I click on the Create An Account button$/, async () => {
    await RegisterPage.clickCreateAnAccountButton();
});

defineStep(/^I click on the Sign In button$/, async () => {
    await LoginPage.clickSignInButton();
});

defineStep(
    /^I should be redirected to My Account page with my email "([^"]*)" in the contact information$/,
    async (email) => {
        await expect(browser).toHaveUrl(
            expect.stringContaining("customer/account")
        );
        await AccountPage.assertContactInformation(email);
    }
);
