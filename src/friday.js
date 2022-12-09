const Week = require("./week");

class Friday extends Week {
  constructor(id, name, description) {
    super(id, name, description);
    this.constructor.fridays.push({
      id: this.id,
      name: this.name,
      description: this.description,
    });
  }

  static fridays = [];
}

module.exports = Friday;
