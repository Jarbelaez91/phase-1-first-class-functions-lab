const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice (-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = function(multiplier){
    return function (fare){
        return multiplier * fare
    }
}

const fareDoubler = function(createFareMultiplier){
    return createFareMultiplier * 2

}
//const fareDoubler = createFareMultiplier(2)


const fareTripler = function(createFareMultiplier) {
    return createFareMultiplier * 3
}

//const fareTriplerr = createFareMultiplier(2)

const selectDifferentDrivers = function (drivers, driversGroup) {
    //drivers => array of names
    // driverGroup => a function
    return driversGroup(drivers)
}