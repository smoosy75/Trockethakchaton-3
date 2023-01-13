const AbstractManager = require("./AbstractManager");

class VesselsManager extends AbstractManager {
  constructor() {
    super({ table: "vessels" });
  }

  insert(vessels) {
    return this.connection.query(
      `insert into ${this.table} (Name, Picture, Description, Places, PriceWeek, AssuranceDate, ControlDate, Planets_idPlanets, Company_idCompany) values (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        vessels.Name,
        vessels.Picture,
        vessels.Description,
        vessels.Places,
        vessels.PriceWeek,
        vessels.AssuranceDate,
        vessels.ControlDate,
        vessels.Planets_idPlanets,
        vessels.Company_idCompany,
      ]
    );
  }

  update(vessels) {
    return this.connection.query(
      `update ${this.table} set Name = ?, Picture = ?, Description = ?, Places = ?, PriceWeek = ?, AssuranceDate = ?, ControlDate = ?, Planets_idPlanets = ?, Company_idCompany = ? where id = ?`,
      [
        vessels.Name,
        vessels.Picture,
        vessels.Description,
        vessels.Places,
        vessels.PriceWeek,
        vessels.AssuranceDate,
        vessels.ControlDate,
        vessels.Planets_idPlanets,
        vessels.Company_idCompany,
        vessels.id,
      ]
    );
  }
}

module.exports = VesselsManager;
