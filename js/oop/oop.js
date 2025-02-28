//  OOP - object oriented programing

function xxx() {
  return "xxx";
}

class Person {
  constructor(name, age, isMaried) {
    this.name = name;
    this.age = age;
    this.isMaried = isMaried;
    this.isAdult = age >= 18;
    this.randomNumber = Math.random();
    this.extra = xxx();
    this.legsCount = 2;
    this.marks = [];
  }
}

//  metodai... aka funkcijos

const jonas = new Person("Jonas", 99, true);
const maryte = new Person("Maryte", 88, false);
const jonukas = new Person("Jonukas", 7);

console.log(jonas);

console.log(maryte);

console.log(jonukas);

console.log(jonas);
++jonas.age;
jonas.isMaried = false;

console.log(jonas);

// jonas.bithday()
jonas.marks.push(10);
jonas.marks.push("asd");

// jonas.addMark(10);
// jonas.addMark("asd");

console.log(jonas);

console.clear();
// Dog, Cat, Car

class Car {
  constructor(model, engine, power, color, type, wheels) {
    this.model = model;
    this.engine = engine + " l";
    this.power = power + " kW";
    this.color = color;
    this.type = type;
    this.wheelSize = wheels;
  }
}
const audi = new Car("RS6", 4.0, 453, "black", "wagon", "R20");

console.log(audi);

function validateHello(greetings) {
  if (
    greetings.includes("hello") ||
    greetings.includes(ciao) ||
    greetings.includes(salut) ||
    greetings.includes(hallo) ||
    greetings.includes(hola) ||
    greetings.includes("ahoj") ||
    greetings.includes(czesc)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(validateHello("ahoj"));
