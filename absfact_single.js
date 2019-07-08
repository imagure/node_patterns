factories = require('./factories')

singleton = require('./utils.js').singleton;

jr = factories.RestaurantFactory('japaneseRestaurant', 'japanese')
ds = factories.StoreFactory('drugStore', 'medicines')

jr_single = new singleton(jr)

console.log(jr_single.factory.info)
console.log(jr_single.factory.speciality())

//this one should point to the same object regardless of the 'new'
//particle and the argument
ds_single = new singleton(ds)

//these ones print the same output of the previous
console.log(ds_single.factory.info)
console.log(ds_single.factory.speciality())
