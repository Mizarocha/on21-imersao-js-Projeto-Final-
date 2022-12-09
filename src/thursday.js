const Week = require("./week.js");

class Thursday extends Week {
  constructor(id, name, description) {
    super(id, name, description);
    this.constructor.Thursdays.push({
      id: this.id,
      name: this.name,
      description: this.description,
    });
  }

  static Thursdays = [];
}

module.exports = Thursday;
