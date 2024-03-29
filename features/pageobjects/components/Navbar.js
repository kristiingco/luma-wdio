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

    get womenCategory() {
        return $("#ui-id-4");
    }

    get menCategory() {
        return $("#ui-id-5");
    }

    get gearCategory() {
        return $("#ui-id-6");
    }

    async clickCustomerMenuButton() {
        await this.customerMenuButton.click();
    }

    async clickCategory(category) {
        switch (category) {
            case "Women":
                await this.womenCategory.click();
                break;
            case "Men":
                await this.menCategory.click();
                break;
            default:
                await this.gearCategory.click();
                break;
        }
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

    async assertProductsExist() {
        await expect(await $(".product-item")).toExist();
    }
}

module.exports = new Navbar();
