class Store {
    constructor(type) {
        this.type = type;
    }

    get info(){
        return ('Sells ' + this.type)
    }

    speciality(){
        return 'Sells products!'
    }
}

class utilitiesStore extends Store{
    speciality() {
        return 'Sell utilities!'
    }
}

class drugStore extends Store{
    speciality() {
        return 'Sell medicines!'
    }
}

module.exports = {
    utilitiesStore: utilitiesStore,
    drugStore: drugStore
}