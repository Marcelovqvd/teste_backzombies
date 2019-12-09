import Sequelize, { Model } from 'sequelize';

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        email: Sequelize.STRING,
        name: Sequelize.STRING,
        value: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Inventory, {
      through: 'items',
      as: 'inventory',
      foreignKey: 'itemsID',
    });
  }
}

export default Item;
