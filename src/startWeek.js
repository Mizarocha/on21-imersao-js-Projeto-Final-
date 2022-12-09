const promptSync = require("prompt-sync");

const Monday = require("./monday");
const Tuesday = require("./tuesday");
const Wednesday = require("./wednesday");
const Thursday = require("./thursday");
const Friday = require("./friday");

const prompt = promptSync();

function startWeek() {
  console.log(`Select the day:
  
  1 - Monday
  2 - Tuesday
  3 - Wednesday
  4 - Thursday
  5 - Friday
  `);

  var select = Number(prompt());
  switch (select) {
    case 1:
      const MondayList = Monday.Mondays;
      console.log(MondayList);
      startWeek();
      break;
    case 2:
      const TuesdayList = Tuesday.Tuesdays;
      console.log(TuesdayList);
      startWeek();
      break;
    case 3:
      const WednesdayList = Wednesday.Wednesdays;
      console.log(WednesdayList);
      startWeek();
      break;
    case 4:
      const ThursdayList = Thursday.Thursdays;
      console.log(ThursdayList);
      startWeek();
      break;
    case 5:
      const FridayList = Friday.fridays;
      console.log(FridayList);
      startWeek();
      break;
    case 0:
      console.log("Congratulations, first week successfully completed!");
      break;
    default:
      console.log("Invalid option, weekends are not included in the purpose");
      startWeek();

      break;
  }
}

module.exports = startWeek;
