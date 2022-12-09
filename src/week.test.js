const Week = require("./week");

describe("Practice the activities of the Week:", () => {
  const days = new Week("Every day", "Practice", "Healthy");

  test("Return the id of the day ", () => {
    expect(days.dayNumber()).toEqual("Every day");
  });

  test("Perform the function", () => {
    expect(days.titleName()).toEqual("Practice");
  });

  test("Complete purpose", () => {
    expect(days.occupation()).toEqual("Healthy");
  });
});
