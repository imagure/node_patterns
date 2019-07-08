abstractFactory = require('./utils.js').abstractFactory;
japaneseRestaurant = require('./restaurants.js').japaneseRestaurant
italianRestaurant = require('./restaurants.js').italianRestaurant
utilitiesStore = require('./stores.js').utilitiesStore
drugStore = require('./stores.js').drugStore

class Factories {
    static get RestaurantFactory() {
        return abstractFactory({
            japaneseRestaurant: japaneseRestaurant,
            italianRestaurant: italianRestaurant
        });
    }

    static get StoreFactory() {
    	return abstractFactory({
    		utilitiesStore: utilitiesStore,
    		drugStore: drugStore
    	});
    }
}

module.exports = Factories