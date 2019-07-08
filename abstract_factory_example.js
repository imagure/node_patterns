factories = require('./factories')

jr = factories.RestaurantFactory('japaneseRestaurant', 'japanese')
ir = factories.RestaurantFactory('italianRestaurant', 'italian')

console.log(jr.info)
console.log(jr.speciality())
console.log(ir.info)
console.log(ir.speciality())
