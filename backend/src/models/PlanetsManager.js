const AbstractManager = require("./AbstractManager");

class PlanetsManager extends AbstractManager {
  constructor() {
    super({ table: "planets" });
  }

  findAll() {
    return this.connection.query(`SELECT * FROM  ${this.table}`);
  }

  insert(planets) {
    return this.connection.query(
      `insert into ${this.table} (Name, Picture) values (?, ?)`,
      [planets.Name, planets.Picture]
    );
  }

  update(planets) {
    return this.connection.query(
      `update ${this.table} set Name = ?, Picture = ? where id = ?`,
      [planets.Name, planets.Picture, planets.id]
    );
  }
}

module.exports = PlanetsManager;
