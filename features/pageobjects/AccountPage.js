const AbstractPage = require("./AbstractPage");

class AccountPage extends AbstractPage {
    open() {
        return super.open("customer/account/create");
    }

    get contactInformation() {
        return $("div[class='box box-information'] div[class='box-content']");
    }

    async assertContactInformation(email) {
        await this.contactInformation.waitForDisplayed();
        await expect(this.contactInformation).toHaveText(
            expect.stringContaining(email)
        );
    }
}

module.exports = new AccountPage();
