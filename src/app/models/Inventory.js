import Sequelize, { Model } from 'sequelize';

class Inventory extends Model {
  static init(sequelize) {
    super.init(
      {
        item: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsToMany(models.Item, {
      through: 'items',
      as: 'items',
      foreignKey: 'inventoryID',
    });
  }
}

export default Inventory;
