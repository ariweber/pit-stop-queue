const fs = require("fs/promises");

const CARS_FILE = "data/cars.json";

async function writeDBToJson() {
  try {
    const respons = await fetch(
      "https://server-for-test-week-13.onrender.com/api/race",
    );
    const db = await respons.json();
    await fs.writeFile(CARS_FILE, JSON.stringify(db, null, 2), "utf-8");
  } catch (err) {
    console.log(err);
  }
}

async function readCarsFromJson() {
  try {
    const data = await fs.readFile(CARS_FILE, "utf-8");
    return JSON.parse(data || []);
  } catch (e) {
    console.log(e);
    return []
  }
}

module.exports = { writeDBToJson, readCarsFromJson };
