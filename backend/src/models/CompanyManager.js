const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (Email, Password, ConfirmPassword, Name) values (?, ?, ?, ?)`,
      [users.Email, users.Password, users.ConfirmPassword, users.Name]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set Email = ?, Password = ?, ConfirmPassword = ?, Name = ? where id = ?`,
      [users.Email, users.Password, users.ConfirmPassword, users.Name]
    );
  }
}

module.exports = CompanyManager;
