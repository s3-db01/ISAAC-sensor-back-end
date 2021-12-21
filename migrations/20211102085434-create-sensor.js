'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      floor_id: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      x_coordinate: {
        type: Sequelize.INTEGER
      },
      y_coordinate: {
        type: Sequelize.INTEGER
      },
      flagged_faulty: {
        allowNull: true,
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .then(() => {
      return queryInterface.sequelize.query('ALTER TABLE "Sensors" ADD CONSTRAINT "sensor_id" PRIMARY KEY ("x_coordinate", "y_coordinate")');
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sensors');
  }
};