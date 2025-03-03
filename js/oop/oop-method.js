class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.isStudying = false;
    this.marks = [];
  }

  birthday() {
    this.age++;
    return "Sveikiname su gimtadieniu!";
  }
  hi() {
    return `${this.name} sako: labas!!!`;
  }
  setMark(mark) {
    if (typeof mark !== "number") {
      return "Pažymys turi būti skaičiaus tipo";
    }
    if (!isFinite(mark)) {
      return "Pažymys turi būti normalus skaičius";
    }
    if (mark <= 0) {
      return "Pažymys turi būti teigiamas skaičiaus";
    }
    if (mark > 10) {
      return "Pažymys negali būti didesnis nei 10";
    }
    if (!Number.isInteger(mark)) {
      return "Pažymys turi būti teigiamas sveikasis skaičiaus";
    }

    this.marks.push(mark);

    return `Pažymys ${mark} pridėtas studentui ${this.name}`;
  }

  calcMarksAverage() {
    if (this.marks.length === 0) {
      return `${this.name} neturi pažymių, vidurkis negalimas`;
    }
    let sum = 0;
    for (const mark of this.marks) {
      sum += mark;
    }
    return sum / this.marks.length;
  }
}

const jonas = new Student("Jonas", 99);
const maryte = new Student("Maryte", 88);

console.log(jonas.age);
console.log(maryte.age);

jonas.birthday();
maryte.birthday();

console.log(jonas.age);
console.log(maryte.age);

console.log(jonas.hi());
console.log(maryte.hi());

// Maryte gavo 10

maryte.setMark(10);
maryte.setMark("sesi");
maryte.setMark(Infinity);
maryte.setMark(NaN);
maryte.setMark(-1);
maryte.setMark(3.14191695);
maryte.setMark(11);

console.log(maryte.marks);

console.log(jonas.calcMarksAverage());
jonas.setMark(4);
jonas.setMark(10);

console.log(jonas.calcMarksAverage());

console.log(jonas.setMark(10));
