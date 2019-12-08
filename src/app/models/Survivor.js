import Sequelize, { Model } from 'sequelize';

class Survivor extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        genre: Sequelize.STRING,
        location: Sequelize.STRING,
        infected: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default Survivor;