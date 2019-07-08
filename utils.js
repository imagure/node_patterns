function abstractFactory(class_map_) {
  return function(class_key, ...parameters) {
    const class_map = class_map_;
    return new class_map[class_key](...parameters);
  };
}

function Singleton(factory) {

  if (typeof Singleton.instance === 'object') {
    console.log("Object already existing!")
    return Singleton.instance;
  }
  
  console.log("Creating object...")
  // proceed as normal
  this.factory = factory;
  
  // cache
  Singleton.instance = this;
  
  // implicit return
  return this;
}

module.exports = {
  abstractFactory: abstractFactory,
  singleton: Singleton
};
