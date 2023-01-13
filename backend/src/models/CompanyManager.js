const AbstractManager = require("./AbstractManager");

class CompanyManager extends AbstractManager {
  constructor() {
    super({ table: "company" });
  }

  insert(company) {
    return this.connection.query(
      `insert into ${this.table} (Email, Password, ConfirmPassword, NameCompany) values (?, ?, ?, ?)`,
      [
        company.Email,
        company.Password,
        company.ConfirmPassword,
        company.NameCompany,
      ]
    );
  }

  update(company) {
    return this.connection.query(
      `update ${this.table} set Email = ?, Password = ?, ConfirmPassword = ?, NameCompany = ? where id = ?`,
      [
        company.Email,
        company.Password,
        company.ConfirmPassword,
        company.NameCompany,
        company.id,
      ]
    );
  }
}

module.exports = CompanyManager;
