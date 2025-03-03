class Pet {
  constructor(name, fur) {
    this.name = name;
    this.furColor = fur;
    this.legsCount = 4;
    this.sound = "taip";
    this.emoji = "🥓";
    this.hasTail = true;
  }

  hi() {
    return `Hi, my name is ${this.name}`;
  }
  voice() {
    return `${this.name}: ${" " + this.sound.repeat(2)}!! ${this.emoji.repeat(
      2
    )}`;
  }
}

class Dog extends Pet {
  constructor(name, fur) {
    super(name, fur);
    this.sound = "au";
    this.emoji = "🐕";
  }
}

class Cat extends Pet {
  constructor(name, fur) {
    super(name, fur);
    this.sound = "miau";
    this.emoji = "🐱";
  }
}

class Hamster extends Pet {
  constructor(name, fur) {
    super(name, fur);
    this.hasTail = false; // pirma paims standartą iš Pet o tafa perrašys kas parašyta pas Hamster
    this.sound = krimst;
    this.emoji = "🐹";
  }
}

const rex = new Dog("Rex", "brown");
const brisius = new Dog("Brisius", "white");
const rainis = new Cat("Rainis", "grey");
const garfildas = new Cat("Garfildas", "orange");

console.log(rex.voice());
console.log(brisius);
console.log(rainis.voice());
console.log(garfildas.hi());

class MotorineTransportoPriemone {
  constructor(model, power, color) {
    this.model = model;
    this.engine = "not specified";
    this.power = power + " kW";
    this.color = color;
    this.engineSound = "kle kle kle kle";
  }
  sound() {
    return `${this.model} engine says: ${this.engineSound}`;
  }
}

class Automobilis extends MotorineTransportoPriemone {
  constructor(model, power, color) {
    super(model, power, color);
    this.wheels = 4;
  }
}

class Elektromobilis extends Automobilis {
  constructor(model, power, color) {
    super(model, power, color);
    this.engine = "Electric";
    this.engineSound = " psssss ";
  }
}

class ICEautomobilis extends Automobilis {
  constructor(model, power, color) {
    super(model, power, color);
    this.engine = "Internal combustion";
    this.engineSound = " bu bu bu bu ";
  }
}
const maserati = new ICEautomobilis("Maserati", 300, "black");
const tesla = new Elektromobilis("Tesla", 200, "red");
const audi = new Automobilis("Audi", 100, "grey");

class Sunkvezimis extends MotorineTransportoPriemone {
  constructor(parameters) {}
}

class Motociklas extends MotorineTransportoPriemone {
  constructor(parameters) {}
}

class Keturratis extends MotorineTransportoPriemone {
  constructor(parameters) {}
}

console.log(audi);

console.log(tesla);
console.log(maserati);
console.log(audi.sound());
