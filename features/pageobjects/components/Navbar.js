class Navbar {
    get welcomeMessage() {
        return $("div[class='panel header'] span[class='logged-in']");
    }

    get customerMenuButton() {
        return $("[data-action='customer-menu-toggle']");
    }

    get logoutButton() {
        return $("li[data-label='or'] a");
    }

    async clickCustomerMenuButton() {
        await this.customerMenuButton.click();
    }

    async clickLogoutButton() {
        await this.customerMenuButton.waitForDisplayed();
        await this.clickCustomerMenuButton();
        await this.logoutButton.waitForDisplayed();
        await this.logoutButton.click();
    }

    async assertWelcomeMessage(name) {
        await expect(this.welcomeMessage).toHaveText(
            expect.stringContaining(name)
        );
    }
}

module.exports = new Navbar();
