const AbstractPage = require("./AbstractPage");

class LoginPage extends AbstractPage {
    open() {
        return super.open("login");
    }
}

module.exports = new LoginPage();
