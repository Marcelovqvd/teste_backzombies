import Sequelize, { Model } from 'sequelize';

class Survivor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        genre: Sequelize.STRING,
        location: Sequelize.STRING,
        infected: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Survivor;
