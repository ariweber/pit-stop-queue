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
    };
    return managerCars;
  } catch (e) {
    console.log(e);
  }
}

module.exports = { manager };
