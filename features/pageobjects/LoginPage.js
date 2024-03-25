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

    async fillLoginForm(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
    }

    async clickSignInButton() {
        await this.signInButton.click();
    }
}

module.exports = new LoginPage();
