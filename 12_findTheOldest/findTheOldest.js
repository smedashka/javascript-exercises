function getAge(person) {
  if (person.yearOfDeath === undefined) {
    person.yearOfDeath = new Date().getFullYear();
  }
  return person.yearOfDeath - person.yearOfBirth;
}

const findTheOldest = function (people) {
  let peopleOldestToYoungest = people.toSorted((a, b) => getAge(b) - getAge(a));
  return peopleOldestToYoungest[0];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

// Do not edit below this line
module.exports = findTheOldest;
