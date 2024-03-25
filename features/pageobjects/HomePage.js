const AbstractPage = require("./AbstractPage");

class HomePage extends AbstractPage {
    get promoBlocks() {
        return $(".blocks-promo");
    }

    async assertPromoBlocksAreDisplayed() {
        await expect(this.promoBlocks).toBeDisplayed();
    }
}

module.exports = new HomePage();
