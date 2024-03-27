const AbstractPage = require("./AbstractPage");

class LoginPage extends AbstractPage {
    open() {
        return super.open("customer/account/login/");
    }

    get emailInput() {
        return $("#email");
    }

    get passwordInput() {
        return $("[name='login[password]']");
    }

    get signInButton() {
        return $(".action.login.primary");
    }

    get forgotYourPasswordLink() {
        return $("a[class='action remind'] span");
    }

    get loginErrorMessage() {
        return $("div[role='alert']");
    }

    async fillLoginForm(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }

    async assertLoginErrorMessage() {
        await this.loginErrorMessage.waitForDisplayed();
        await expect(this.loginErrorMessage).toHaveText(
            expect.stringContaining(
                "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
            )
        );
    }
}

module.exports = new LoginPage();
