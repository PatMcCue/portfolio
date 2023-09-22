//SPREAD Exercise

const terrestrials = ["fox", "lion", "elephant"];
const aquatics = ["shark", "whale", "octopus"];

// TODO: create the array allAnimals that contains all animals from terrestrials and aquatics arrays
const allAnimals = [...terrestrials, ...aquatics];
console.log(allAnimals);

//REST Exercise

// TODO: create the function sumAll
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr);
  }
  
  console.log(sumAll(1, 2)); // expected output: 3
  console.log(sumAll(1, 2, 3)); // expected output: 6
  console.log(sumAll(1, 2, 3, 4)); // expected output: 10
  
