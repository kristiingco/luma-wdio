const AbstractPage = require("./AbstractPage");

class RegisterPage extends AbstractPage {
    open() {
        return super.open("customer/account/create");
    }

    get firstNameInput() {
        return $("#firstname");
    }

    get lastNameInput() {
        return $("#lastname");
    }

    get emailInput() {
        return $("#email_address");
    }

    get passwordInput() {
        return $("#password");
    }

    get confirmPasswordInput() {
        return $("#password-confirmation");
    }

    get createAnAccountButton() {
        return $("button[title='Create an Account']");
    }
}

module.exports = new RegisterPage();
