const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (Email, Password) values (?, ?)`,
      [users.Email, users.Password]
    );
  }

  update(users) {
    return this.connection.query(
      `update ${this.table} set Email = ?, Password = ? where id = ?`,
      [users.Email, users.Password, users.id]
    );
  }
}

module.exports = UsersManager;
