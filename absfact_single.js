factories = require('./factories')

singleton = require('./utils.js').singleton;

jr = factories.RestaurantFactory('japaneseRestaurant', 'japanese')
ir = factories.RestaurantFactory('italianRestaurant', 'italian')

jr_single = new singleton(jr)

//this one should point to the same object regardless of the 'new'
//and the argument
ir_single = new singleton(ir)

console.log(jr_single.factory.info)
console.log(jr_single.factory.speciality())

//these ones print the same output of the previous
console.log(ir_single.factory.info)
console.log(ir_single.factory.speciality())
