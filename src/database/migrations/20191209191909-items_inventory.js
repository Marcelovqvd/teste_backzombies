module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      value: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      inventoryID: {
        type: Sequelize.INTEGER,
        references: { model: 'inventories', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      itemsID: {
        type: Sequelize.INTEGER,
        references: { model: 'items', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('items');
  },
};
