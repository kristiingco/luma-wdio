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
}

module.exports = new LoginPage();
