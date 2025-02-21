function getPlanetName(id) {
  let name = "";
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
    default:
      name = "nera";
  }

  return name;
}
console.log(getPlanetName(3));

//  Jūratės sprendimas
const getPlanetName = (id) => {
  const planets = new Map([
    [1, "Mercury"],
    [2, "Venus"],
    [3, "Earth"],
    [4, "Mars"],
    [5, "Jupiter"],
    [6, "Saturn"],
    [7, "Uranus"],
    [8, "Neptune"],
  ]);

  return planets.get(id);
};
