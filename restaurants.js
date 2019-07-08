class Restaurant {
    constructor(type) {
        this.type = type;
    }

    get info(){
        return ('Makes ' + this.type + ' food!')
    }

    speciality(){
        return 'Makes food'
    }
}

class japaneseRestaurant extends Restaurant{
    speciality() {
        return 'Makes great sushi!'
    }
}

class italianRestaurant extends Restaurant{
    speciality() {
        return 'Makes great spagheti!'
    }
}

module.exports = {
    japaneseRestaurant: japaneseRestaurant,
    italianRestaurant: italianRestaurant
}