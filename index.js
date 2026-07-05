const { manager } = require("./servich/managerCars");
const { writeDBToJson, CARS_FILE, URL } = require("./storge");
async function app() {
  console.log("Pit Stop Queue - Race Team Management System");
  console.log(
    "Race engineer: Let's check the current queue status on the pit wall.",
  );

  console.log("data queue Loading...");

  console.log("========== PIT STOP QUEUE ==========");
  await writeDBToJson();
  const race = await manager();

  console.log(`Race: ${race.raceName()}`);
  console.log(`Lap: ${race.currentLap()}/${race.totalLaps}`);
  console.log(`Cars in race: ${race.totalCarsInRace()}`);
  console.log(`Pit stops completed: ${race.pitStopsCompleted()}`);
  console.log(`Cars waiting: ${race.carsWaiting()}`);

  const next = race.nextCarDetails();

  console.log(
    `Radio message to car ${next.carNumber}: "Box box box, ${next.driverName}, pit this lap!"`,
  );
  console.log("--- Search for a car by number ---");
  const car1 = race.getCarByNumber(44);
  const car2 = race.getCarByNumber(99);
}

app();
