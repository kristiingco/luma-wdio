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

    async fillRegisterForm(firstName, lastName, email, password) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.confirmPasswordInput.setValue(password);
    }

    async clickCreateAnAccountButton() {
        await this.createAnAccountButton.click();
    }
}

module.exports = new RegisterPage();
