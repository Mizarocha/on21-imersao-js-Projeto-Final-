const Week = require("./week");

class Wednesday extends Week {
  constructor(id, name, description) {
    super(id, name, description);
    this.constructor.Wednesdays.push({
      id: this.id,
      name: this.name,
      description: this.description,
    });
  }

  static Wednesdays = [];
}

module.exports = Wednesday;
