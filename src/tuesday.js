const Week = require("./week");

class Tuesday extends Week {
  constructor(id, name, description) {
    super(id, name, description);
    this.constructor.Tuesdays.push({
      id: this.id,
      name: this.name,
      description: this.description,
    });
  }

  static Tuesdays = [];
}

module.exports = Tuesday;
