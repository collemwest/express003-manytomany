'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: { allowNull: true, type: Sequelize.INTEGER, references: { model: 'Customers', key: 'id' } }, 
      productId:  { allowNull: true, type: Sequelize.INTEGER, references: { model: 'Products',  key: 'id' } },
      quantity: {
        type: Sequelize.INTEGER
      },
      totalprice: {
        type: Sequelize.DOUBLE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};