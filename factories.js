abstractFactory = require('./utils.js').abstractFactory;
japaneseRestaurant = require('./restaurants.js').japaneseRestaurant
italianRestaurant = require('./restaurants.js').italianRestaurant

class Factories {
    static get RestaurantFactory() {
        return abstractFactory({
            japaneseRestaurant: japaneseRestaurant,
            italianRestaurant: italianRestaurant
        });
    }
}

module.exports = Factories