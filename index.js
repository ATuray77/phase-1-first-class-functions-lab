// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
  const firstTwo = drivers.slice(0, 2);
  return firstTwo;
}

const returnLastTwoDrivers = function() {
  return drivers.slice(2);
}
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(number){
  function fareMultiplier() {
   return  number * 4;
  }
 return fareMultiplier;
};


function createFareMultiplier(number){
function fareQuintupler(){
  return number * 5;
}
return fareQuintupler;
};

const fareDoubler = function createFareMultiplier(number) {
  return number * 2;
}

const fareTripler = function createFareMultiplier(number){
  return number * 3;
}

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
 return returnFirstTwoDrivers(drivers);
};