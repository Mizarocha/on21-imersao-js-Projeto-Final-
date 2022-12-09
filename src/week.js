class Week {
  id;
  name;
  description;

  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  dayNumber() {
    return this.id;
  }

  titleName() {
    return this.name;
  }

  occupation() {
    return this.description;
  }
}

module.exports = Week;
