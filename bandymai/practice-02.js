/**
 * Užduotis: "Miesto eismo analizė"
 *
 * Jūsų tikslas - parašyti kelias funkcijas, kurios analizuos miesto transporto srautą.
 * Įsivaizduokite, kad turime duomenų apie įvairius miesto rajonus, jų populiacija ir eismo intensyvumą.
 * Turėsite apdoroti šiuos duomenis ir pateikti išvadas apie transporto srautą.
 */

/**
 * Turite masyvą, kuris reprezentuoja miesto rajonus ir jų populiaciją, transporto duomenis:
 *
 * name - rajono pavadinimas
 * population - rajono gyventojų skaičius
 * traffic - masyvas, kuris parodo eismo intensyvumą (automobilių skaičius per valandą) kiekvieną savaitės dieną (pirmadienis - sekmadienis)
 */
const cityTraffic = [
  {
    name: "Senamiestis",
    population: 15000,
    traffic: [120, 85, 90, 70, 150, 200, 130],
  },
  {
    name: "Šnipiškės",
    population: 10000,
    traffic: [80, 60, 75, 95, 100, 120, 110],
  },
  {
    name: "Antakalnis",
    population: 20000,
    traffic: [100, 120, 140, 160, 180, 200, 220],
  },
  {
    name: "Žirmūnai",
    population: 25000,
    traffic: [200, 220, 250, 270, 300, 330, 350],
  },
  {
    name: "Lazdynai",
    population: 12000,
    traffic: [50, 70, 80, 90, 100, 120, 130],
  },
];

/**
 * [1] Vidutinis eismo srautas rajone
 *
 * Sukurkite funkciją averageTraffic(region), kuri priima rajono objektą ir grąžina vidutinį eismo intensyvumą per savaitę.
 *
 * Pvz.: averageTraffic(cityTraffic[0]) turėtų grąžinti 120.71 (suapvalinta iki dviejų skaičių po kablelio).
 */
function averageTraffic(duomenys) {
  let autoPerSavaite = 0;
  let autoVidurkis = 0;
  for (let i = 0; i < duomenys.traffic.length; i++) {
    autoPerSavaite += duomenys.traffic[i];
  }
  return Number(
    (autoVidurkis = autoPerSavaite / duomenys.traffic.length).toFixed(2)
  );
}

console.log(
  `\n Rajone ${
    cityTraffic[0].name
  } vidutinis eismo intensyvumas : ${averageTraffic(
    cityTraffic[0]
  )} automobiliai per parą`
);
console.log(
  `\n Rajone ${
    cityTraffic[1].name
  } vidutinis eismo intensyvumas : ${averageTraffic(
    cityTraffic[1]
  )} automobiliai per parą\n`
);
/**
 * [2] Rajonas su didžiausiu vidutiniu eismu
 *
 * Parašykite funkciją busiestRegion(data), kuri priima miesto duomenų masyvą ir grąžina rajono pavadinimą, kuriame vidutinis eismo intensyvumas yra didžiausias.
 *
 * Pvz.: busiestRegion(cityTraffic) turėtų grąžinti "Žirmūnai".
 */
function busiestRegion(miestas) {
  let IntensyviausiasRajonas = "";
  let maxTrafic = 0;

  for (let i = 0; i < miestas.length; i++) {
    const avg = averageTraffic(miestas[i]);
    if (avg > maxTrafic) {
      maxTrafic = avg;
      IntensyviausiasRajonas = miestas[i].name;
    }
  }
  return IntensyviausiasRajonas;
}
console.log(`\n Intesyviausias miesto rajonas: ${busiestRegion(cityTraffic)} `);

/**
 * [3] Eismo intensyvumas vienam gyventojui
 *
 * Parašykite funkciją trafficPerPerson(region), kuri priima rajono objektą ir grąžina eismo srautą, tenkantį vienam gyventojui per savaitę.
 *
 * Pvz.: trafficPerPerson(cityTraffic[0]) turi grąžinti 0.056 (suapvalinta iki trijų skaičių po kablelio).
 */

function trafficPerPerson(region) {
  return Number(
    (
      region.traffic.reduce((sum, num) => sum + num, 0) / region.population
    ).toFixed(3)
  );
}

console.log(
  `\n ${cityTraffic[0].name} srautas vienam gyventojui ${trafficPerPerson(
    cityTraffic[0]
  )} automobilio per savaitę`
);

console.log(
  `\n ${cityTraffic[1].name} srautas vienam gyventojui ${trafficPerPerson(
    cityTraffic[1]
  )} automobilio per savaitę`
);

/**
 * [4] Sugeneruoti savaitės eismo ataskaitą
 *
 * Sukurkite funkciją generateTrafficReport(data), kuri priima miesto duomenų masyvą ir grąžina masyvą su tokiais objektais kiekvienam miesto rajonui:
 * {
 *      name: "Senamiestis",       // Rajono pavadinimas
 *      avgTraffic: 120.71,        // Vidutinis eismo srautas rajone
 *      bussiestDay: 200,          // Didžiausias fiksuotas eismo srautas kažkurią dieną
 *      trafficPerPerson: 0.056    // Eismo intensyvumas vienam gyventojui
 * }
 */
const miestoMasyvas = {};
function generateTrafficReport(data) {
  miestoMasyvas.name = data.name;
  miestoMasyvas.averageTraffic = averageTraffic(data);
  miestoMasyvas.bussiestDay = Math.max(...data.traffic);
  miestoMasyvas.trafficPerPerson = trafficPerPerson(data);
  return miestoMasyvas;
}

console.table(generateTrafficReport(cityTraffic[0]));
console.table(generateTrafficReport(cityTraffic[1]));
console.table(generateTrafficReport(cityTraffic[2]));
console.table(generateTrafficReport(cityTraffic[3]));
console.table(generateTrafficReport(cityTraffic[4]));

/**
 * [EXTRA] Papildoma užduotis
 *
 * Jei norite iššūkio, pridėkite funkciją findLeastBusyDay(data), kuri priima miesto duomenų masyvą ir nustato mažiausio eismo dieną visame mieste. Ji turėtų grąžinti savaitės dienos pavadinimą (pvz., "Pirmadienis").
 */

const savaitesDienos = [
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
  "Sekmadienis",
];
let maziausiasEismas = [];
function findLeastBusyDay(data) {
  for (let i = 0; i < data[0].traffic.length; i++) {
    maziausiasEismas.push(
      data[0].traffic[i] +
        data[1].traffic[i] +
        data[2].traffic[i] +
        data[3].traffic[i] +
        data[4].traffic[i]
    );
  }

  let maziausiasSkaicius = Math.min(...maziausiasEismas);

  for (let i = 0; i < maziausiasEismas.length; i++) {
    if (maziausiasEismas[i] === maziausiasSkaicius) {
      return `Mažiausio intesyvumo mieste diena: ${savaitesDienos[i]} `;
    }
  }
}

console.log(findLeastBusyDay(cityTraffic));
