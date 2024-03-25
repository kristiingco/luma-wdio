class Navbar {
    get welcomeMessage() {
        return $("div[class='panel header'] span[class='logged-in']");
    }

    async assertWelcomeMessage(name) {
        await expect(this.welcomeMessage).toHaveText(
            expect.stringContaining(name)
        );
    }
}

module.exports = new Navbar();
