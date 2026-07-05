const { readCarsFromJson } = require("../storge");

async function manager() {
  try {
    const racingDetails = await readCarsFromJson();
    const cars = racingDetails.cars;
    const managerCars = {
      raceName: () => racingDetails.raceName,
      currentLap: () => racingDetails.currentLap,
      totalLaps: racingDetails.totalLaps,
      totalCarsInRace: () => cars.length,
      pitStopsCompleted: () => {
        const carsCompletd = cars.filter((car) => car.status === "done");
        return carsCompletd.length;
      },
      carsWaiting: () => {
        const carsCompletd = cars.filter((car) => car.status === "waiting");
        return carsCompletd.length;
      },
      PendingDriverDetails: () => {
        return cars.filter((car) => car.status === "waiting");
      },
      nextCarDetails: () => {
        return cars.find((car) => car.status === "waiting");
      },
      getCarByNumber: (num) => {
        const car = cars.find((car) => car.carNumber === num);
        if (car) {
          console.log(
            `faund car: ${car.carNumber} Driver:  ${car.driverName} sttus${car.status}`,
          );
        }else{
          console.log(`Error: No car found with number: ${num} in the current race`);
          

        }
      },
    };
    return managerCars;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { manager };
