// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Order extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       Order.belongsToMany(models.Product, {
//         through: models.Order,
//         as: "orders",
//         foreignKey: "customerId"
//       });
//     }
//   }
//   Order.init({
//     customerId: DataTypes.INTEGER,
//     productId: DataTypes.INTEGER,
//     quantity: DataTypes.INTEGER,
//     totalprice: DataTypes.DOUBLE
//   }, {
//     sequelize,
//     modelName: 'Order',
//   });
//   return Order;
// };