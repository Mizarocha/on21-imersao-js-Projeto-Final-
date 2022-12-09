const Monday = require("./monday");
const Tuesday = require("./tuesday");
const Wednesday = require("./wednesday");
const Thursday = require("./thursday");
const Friday = require("./friday");
const startWeek = require("./startWeek");

console.log("Health and wellness");

const firstDay = new Monday(1, "Feed", "Fruits, greens and vegetables");
console.log(firstDay);

const secondDay = new Tuesday(2, "To sleep", "8 hours a day");
console.log(secondDay);

const thirdDay = new Wednesday(3, "Drink water", "2 liters a day");
console.log(thirdDay);

const fourthDay = new Thursday(
  4,
  "Physical exercise",
  "3x squats and 3x crunches"
);
console.log(fourthDay);

const fifthDay = new Friday(5, "Happy hour", "Friends and family");
console.log(fifthDay);

startWeek();
