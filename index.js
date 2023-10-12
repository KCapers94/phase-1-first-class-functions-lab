const returnFirstTwoDrivers = function(array) {
    return(array.slice(0,2))
}
returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const returnLastTwoDrivers = function(newArray) {
    return(newArray.slice(2,4))
}
returnLastTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(multiplier) {
    return function (fare) {
    return fare * multiplier 
    }
}
createFareMultiplier(4)(10)

const fareDoubler = function(fare) {
return fare * 2
}
fareDoubler(10)

const fareTripler = function(fare) {
    return fare * 3
}
fareTripler(10)

let selectDifferentDrivers = function(array, callback) {
    return callback(array)
}
selectDifferentDrivers(['Antonia', 'Nuru', 'Amari', 'Mo'])(returnLastTwoDrivers)





