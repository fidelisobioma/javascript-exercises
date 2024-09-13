const findTheOldest = function (people) {
  let currentDate = new Date().getFullYear();
  return people.reduce((oldest, current) => {
    let oldAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentDate - oldest.yearOfBirth;
    let currentAge = oldest.yearOfDeath
      ? current.yearOfDeath - current.yearOfBirth
      : currentDate - current.yearOfBirth;
    return currentAge > oldAge ? current : oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
