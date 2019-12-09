import Sequelize from 'sequelize';

import Survivor from '../app/models/Survivor';
import databaseConfig from '../config/database';

const models = [Survivor];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
