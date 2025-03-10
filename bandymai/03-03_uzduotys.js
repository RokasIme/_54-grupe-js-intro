/* 
Užduotis 1: Sukurkite tuščią objektą pavadinimu car ir pridėkite jame savybes brand, model, ir year.
*/

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.engine = "not specified";
    this.tyresChange = 0;
  }

  method() {
    return `This is ${this.brand} brand}`;
  }
  addTyreChange(tyres) {
    this.tyresChange = tyres;
    return `This season you must change ${this.tyresChange} tyres`;
  }
  addProperty(obj, key, value) {
    if (typeof obj === "object" && obj !== null) {
      obj[key] = value;
      console.log(`New property: ${key} ${obj[key]} added `);
    } else {
      console.log("Pateiktas argumentas nėra objektas");
    }
  }
}

const auto = new Car("Opel", "Mokka", 2016);
console.log(auto);

// Užduotis 2: Sukurkite metodą, kuris atspausdins automobilio brand savybę.
console.log(auto.method());

// Užduotis 3: Sukurkite metodą addProperty, kuris pridės naują savybę į objektą dinamiškai.
console.log(auto.addTyreChange(4));
auto.addProperty(auto, "engine", "Petrol");
console.log(auto);

// Užduotis 4: Patikrinkite, ar automobilio objektas turi savybę model, naudodami hasOwnProperty.
console.log(auto.hasOwnProperty("model"));

// Užduotis 5: Sukurkite funkciją, kuri grąžins automobilio objekto visų savybių raktus.
function autoKeys() {
  return Object.keys(auto);
}
console.log(`Object keys is: ${autoKeys()}`);
