const Week = require("./week");

class Monday extends Week {
  constructor(id, name, description) {
    super(id, name, description);
    this.constructor.Mondays.push({
      id: this.id,
      name: this.name,
      description: this.description,
    });
  }

  static Mondays = [];
}

module.exports = Monday;
