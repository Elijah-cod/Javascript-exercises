const findTheOldest = function(arr) {
  let oldest = 0;
  let old;
    arr.forEach(person => {
      if (person.yearOfDeath!== undefined){
        let age = person.yearOfDeath - person.yearOfBirth;
        if (age>oldest){
          oldest = age;
          old = person;
        }
      }
      else {
        let age = 2023 - person.yearOfBirth;
        if (age>oldest){
          oldest = age;
          old = person;
        }
      }
     
    });
    return old;
    
};

// Do not edit below this line
module.exports = findTheOldest;
