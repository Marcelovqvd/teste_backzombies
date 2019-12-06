import Sequelize, { Model } from 'sequelize';

class Survivor extends Model {
  static Init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        genre: Sequelize.STRING,
        location: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Survivor;
