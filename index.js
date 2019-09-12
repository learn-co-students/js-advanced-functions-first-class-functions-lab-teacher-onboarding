// Code your solution in this file!
// PROBLEM ONE
// Declare a variable with const that is assigned an anonymous function. 
// The assigned function should accept an array of drivers as an argument 
// and return the first two drivers in the array.
const returnFirstTwoDrivers = function(driverArray) {
    return driverArray.slice(0, 2);
};

// PROBLEM TWO
// Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of drivers as an argument and return the last two drivers in the array.
const returnLastTwoDrivers = function(driverArray) {
    return driverArray.slice(-2);
};

// PROBLEM THREE
// This is an array containing two elements: the two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// PROBLEM FOUR
// This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride accordingly. If createFareMultiplier() receives an argument of 4, it will return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(int) {
    return function(fare) {
        return (fare * int);
    };
};

// PROBLEM FIVE
// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);

// PROBLEM SIX
// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);

// PROBLEM SEVEN
// selectDifferentDrivers() — This function takes two arguments, an array 
// of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() 
// function. Based on these two arguments, selectDifferentDrivers() will return 
// either the first two drivers or the last two drivers.
function selectDifferentDrivers(driverArray, returnFn) {
    return returnFn(driverArray);
}
// Resources